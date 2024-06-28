import React, { createContext, useState, useContext, ReactNode } from 'react';

type Exercise = {
  id: string;
  name: string;
  type: string;
  url_gif: string;
  url_photo: string;
  series: number;
  repetition: string;
  member: string;
};

type Routine = {
  name: string;
  exercises: Exercise[];
};

type RoutinesContextType = {
  routines: Routine[];
  addRoutine: (name: string, exercises: Exercise[]) => void;
};

const RoutinesContext = createContext<RoutinesContextType | undefined>(undefined);

export const RoutinesProvider = ({ children }: { children: ReactNode }) => {
  const [routines, setRoutines] = useState<Routine[]>([]);

  const addRoutine = (name: string, exercises: Exercise[]) => {
    setRoutines((prevRoutines) => [...prevRoutines, { name, exercises }]);
  };

  return (
    <RoutinesContext.Provider value={{ routines, addRoutine }}>{children}</RoutinesContext.Provider>
  );
};

export const useRoutines = (): RoutinesContextType => {
  const context = useContext(RoutinesContext);
  if (!context) {
    throw new Error('useRoutines must be used within a RoutinesProvider');
  }
  return context;
};
