import React, { createContext, useState, useContext, ReactNode } from 'react';

type Exercise = {
  id: string;
  name: string;
  url_gif: string;
};

type Routine = {
  name: string;
  exercises: Exercise[];
};

type RoutinesContextType = {
  routines: Routine[];
  addRoutine: (name: string, exercises: Exercise[]) => void;
  updateRoutine: (name: string, exercises: Exercise[]) => void; // Adicione a função updateRoutine
};

const RoutinesContext = createContext<RoutinesContextType | undefined>(undefined);

export const RoutinesProvider = ({ children }: { children: ReactNode }) => {
  const [routines, setRoutines] = useState<Routine[]>([]);

  const addRoutine = (name: string, exercises: Exercise[]) => {
    setRoutines((prevRoutines) => [...prevRoutines, { name, exercises }]);
  };

  const updateRoutine = (name: string, exercises: Exercise[]) => {
    setRoutines((prevRoutines) =>
      prevRoutines.map((routine) => (routine.name === name ? { ...routine, exercises } : routine))
    );
  };

  return (
    <RoutinesContext.Provider value={{ routines, addRoutine, updateRoutine }}>
      {children}
    </RoutinesContext.Provider>
  );
};

export const useRoutines = (): RoutinesContextType => {
  const context = useContext(RoutinesContext);
  if (!context) {
    throw new Error('useRoutines must be used within a RoutinesProvider');
  }
  return context;
};
