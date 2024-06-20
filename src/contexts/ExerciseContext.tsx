import React, { createContext, useState, useContext, ReactNode } from 'react';

type Exercise = {
  id: string;
  title: string;
  url_gif: string;
};

type ExerciseContextType = {
  selectedExercises: Exercise[];
  toggleExerciseSelection: (exercise: Exercise) => void;
};

const ExerciseContext = createContext<ExerciseContextType | undefined>(undefined);

export const ExerciseProvider = ({ children }: { children: ReactNode }) => {
  const [selectedExercises, setSelectedExercises] = useState<Exercise[]>([]);

  const toggleExerciseSelection = (exercise: Exercise) => {
    setSelectedExercises((prevSelected) => {
      if (prevSelected.find((ex) => ex.id === exercise.id)) {
        return prevSelected.filter((ex) => ex.id !== exercise.id);
      } else {
        return [...prevSelected, exercise];
      }
    });
  };

  return (
    <ExerciseContext.Provider value={{ selectedExercises, toggleExerciseSelection }}>
      {children}
    </ExerciseContext.Provider>
  );
};

export const useExercise = (): ExerciseContextType => {
  const context = useContext(ExerciseContext);
  if (!context) {
    throw new Error('useExercise must be used within an ExerciseProvider');
  }
  return context;
};
