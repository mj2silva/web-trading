import { firestore } from 'lib/firebase';
import { Module, ModuleClass } from 'lib/types';

const modulesCollection = 'courseModules';
const classesCollection = 'moduleClasses';

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
