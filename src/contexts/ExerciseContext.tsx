import React, { createContext, useState, useContext, ReactNode } from 'react';

type Exercise = {
  id: string;
  name: string;
  url_gif: string;
};

type ExerciseContextType = {
  selectedExercises: Exercise[];
  setSelectedExercises: (exercises: Exercise[]) => void;
  toggleExerciseSelection: (exercise: Exercise) => void;
  clearSelectedExercises: () => void;
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

  const clearSelectedExercises = () => {
    setSelectedExercises([]);
  };

  return (
    <ExerciseContext.Provider
      value={{
        selectedExercises,
        setSelectedExercises,
        toggleExerciseSelection,
        clearSelectedExercises,
      }}>
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
