import React, { ReactNode } from 'react';
import { ExerciseProvider } from '~/contexts/ExerciseContext';
import { RoutinesProvider } from '~/contexts/RoutinesContext';

export const CombinedProvider = ({ children }: { children: ReactNode }) => (
  <ExerciseProvider>
    <RoutinesProvider>{children}</RoutinesProvider>
  </ExerciseProvider>
);
