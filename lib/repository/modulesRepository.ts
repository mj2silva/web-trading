import { firestore } from 'lib/firebase';
import {
  CourseBenefits, Faq, Module, ModuleClass, PreRegisteredUser,
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
    });
  });
  const modulesPromises = partialModules.map(
    (partialModule) => {
      const getModule = async (): Promise<Module> => {
        const classes = await getModuleClasses(partialModule.id);
        const module: Module = {
          name: '',
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
  const benefitsCollectionRef = firestore.collection(benefitsCollection);
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
