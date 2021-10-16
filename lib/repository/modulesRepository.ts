import { firestore, getServerTimestamp } from 'lib/firebase';
import {
  Comment,
  CourseBenefits, Faq, Module, ModuleClass, PreRegisteredUser, User, UserGroup,
} from 'lib/types';

const modulesCollection = 'courseModules';
const classesCollection = 'moduleClasses';
const benefitsCollection = 'courseBenefits';
const faqsCollection = 'courseFaqs';
const preRegisteredUsersCollection = 'preRegisteredUsers';

export const getPublicModuleClasses = async (moduleId: string = ''): Promise<ModuleClass[]> => {
  if (moduleId) {
    const classesRef = firestore
      .collection(modulesCollection)
      .doc(moduleId)
      .collection(classesCollection)
      .orderBy('order');
    const classesResponse = await classesRef.get();
    const classes: ModuleClass[] = [];
    classesResponse.forEach((classResponse) => {
      const classData = classResponse.data();
      classes.push({
        name: classData.name,
        order: classData.order,
      });
    });
    return classes;
  }
  throw new Error('Debe enviar el id del módulo para buscar las clases');
};

export const getModuleClasses = async (moduleId: string = ''): Promise<ModuleClass[]> => {
  if (moduleId) {
    const classesRef = firestore
      .collection(modulesCollection)
      .doc(moduleId)
      .collection(classesCollection)
      .orderBy('order');
    const classesResponse = await classesRef.get();
    const classes: ModuleClass[] = [];
    classesResponse.forEach((classResponse) => {
      const classData = classResponse.data();
      classes.push({
        name: classData.name,
        order: classData.order,
        videoUrl: classData.videoUrl || null,
        id: classResponse.id,
        type: classData.type || 'VIDEO',
        slug: classData.slug || '',
      });
    });
    return classes;
  }
  throw new Error('Debe enviar el id del módulo para buscar las clases');
};

export const getModules = async (): Promise<Module[]> => {
  const modulesCollectionRef = firestore.collection(modulesCollection).orderBy('order');
  const modulesData = await modulesCollectionRef.get();
  const partialModules: Partial<Module>[] = [];
  modulesData.forEach((moduleResponse) => {
    const moduleData = moduleResponse.data();
    partialModules.push({
      name: moduleData.name,
      id: moduleResponse.id,
      slug: moduleData.slug || '',
    });
  });
  const modulesPromises = partialModules.map(
    (partialModule) => {
      const getModule = async (): Promise<Module> => {
        const classes = await getModuleClasses(partialModule.id);
        const module: Module = {
          name: '',
          order: 0,
          ...partialModule,
          classes,
        };
        return module;
      };
      return getModule();
    },
  );
  const modules = await Promise.all(modulesPromises);
  return modules;
};

export const getPublicModules = async (): Promise<Module[]> => {
  const modulesCollectionRef = firestore.collection(modulesCollection).orderBy('order');
  const modulesData = await modulesCollectionRef.get();
  const partialModules: Partial<Module>[] = [];
  modulesData.forEach((moduleResponse) => {
    const moduleData = moduleResponse.data();
    partialModules.push({
      name: moduleData.name,
      id: moduleResponse.id,
    });
  });
  const modulesPromises = partialModules.map(
    (partialModule) => {
      const getModule = async (): Promise<Module> => {
        const classes = await getPublicModuleClasses(partialModule.id);
        const module: Module = {
          name: '',
          order: 0,
          ...partialModule,
          classes,
        };
        return module;
      };
      return getModule();
    },
  );
  const modules = await Promise.all(modulesPromises);
  return modules;
};

export const getCourseBenefits = async (): Promise<CourseBenefits[]> => {
  const benefitsCollectionRef = firestore.collection(benefitsCollection).orderBy('order');
  const benefitsCollectionResponse = await benefitsCollectionRef.get();
  const benefits: CourseBenefits[] = [];
  benefitsCollectionResponse.forEach((benefitDocument) => {
    const benefitData = benefitDocument.data();
    benefits.push({
      id: benefitDocument.id,
      name: benefitData.name,
      description: benefitData.description,
    });
  });
  return benefits;
};

export const getFaqs = async (): Promise<Faq[]> => {
  const faqsCollectionRef = firestore.collection(faqsCollection);
  const faqsCollectionResponse = await faqsCollectionRef.get();
  const faqs: Faq[] = [];
  faqsCollectionResponse.forEach((faqDocument) => {
    const faqData = faqDocument.data();
    faqs.push({
      id: faqDocument.id,
      question: faqData.question,
      answer: faqData.answer,
    });
  });
  return faqs;
};

export const preRegisterUser = async (newUserData: PreRegisteredUser): Promise<void> => {
  const preRegisteredUsersCollectionRef = firestore.collection(preRegisteredUsersCollection);
  const preRegisteredUserDoc = preRegisteredUsersCollectionRef.doc();
  await preRegisteredUserDoc.set(newUserData);
};

/* export const getModuleClassData = async (
  moduleSlug: string, classSlug: string): Promise<ModuleClass> => {
  const moduleRef = firestore.collection('modules').where('slug', '==', moduleSlug).limit(1);
  const response = await moduleRef.get();
  const moduleDoc: ModuleClass = response.docs[0];
  if (moduleDoc) {
    const classRef = firestore.collection('modules').doc(moduleDoc.id).collection('modules');
  }
} */

export const getUserModules = async (user: User, userGroup?: UserGroup):
  Promise<Module[]> => {
  let group: UserGroup;
  if (!userGroup) {
    const userGroupRef = firestore
      .collection('userGroups')
      .doc(user?.groupId);
    const userGroupDoc = await userGroupRef.get();
    group = userGroupDoc.data() as UserGroup;
  } else {
    group = userGroup;
  }
  if (group.accessBegin.toMillis() < Date.now() && group.accessEnd.toMillis() > Date.now()) {
    const modulesCollectionRef = firestore
      .collection('courseModules')
      .orderBy('order');
    const userModulesResponse = await modulesCollectionRef.get();
    const partialUserModules: Module[] = [];
    userModulesResponse.forEach((moduleResponse) => {
      partialUserModules.push({
        id: moduleResponse.id,
        ...moduleResponse.data() as Module,
      });
    });

    const modulesPromises: Promise<Module>[] = partialUserModules.map(
      (partialModule) => {
        const getModule = async (): Promise<Module> => {
          const classes = await getModuleClasses(partialModule.id);
          if (partialModule.order <= (group?.higherModuleOrder || 100)) {
            const module: Module = {
              ...partialModule,
              classes,
            };
            return module;
          }
          return {
            ...partialModule,
            classes: classes.map((moduleClass) => {
              const newClass = moduleClass;
              delete newClass.videoUrl;
              delete newClass.slug;
              delete newClass.type;
              return moduleClass;
            }),
          };
        };
        return getModule();
      },
    )
      .filter((promise) => typeof promise !== 'undefined') as Promise<Module>[];
    const modules = await Promise.all(modulesPromises);
    return modules;
  }
  throw Error('El acceso a la plataforma para el usuario ha vencido.');
};

export const createComment = async (user: User, comment: Comment): Promise<void> => {
  const commentsCollectionRef = firestore.collection('comments');
  const commentDocRef = commentsCollectionRef.doc();
  const commentToSave = {
    ...comment,
    public: false,
    userId: user?.uid,
    date: getServerTimestamp(),
    userPicture: user?.photoURL || user?.photoUrl || '/img/usuario.png',
    username: `${user?.names} ${user?.lastNames}` || user?.displayName || user?.username || '',
  };
  await commentDocRef.set(commentToSave);
};

export const getPublishedComments = async (): Promise<Comment[]> => {
  const commentsCollectionQuery = firestore.collection('comments').where('public', '==', true);
  const commentsDocs = await commentsCollectionQuery.get();
  const comments: Comment[] = [];
  commentsDocs.forEach((commentDoc) => {
    const comment = commentDoc.data() as Comment;
    comments.push({
      comment: comment.comment,
      rate: comment.rate,
      userId: comment.userId,
      public: comment.public,
      userPicture: comment.userPicture,
      username: comment.username,
    });
  });
  return comments;
};
