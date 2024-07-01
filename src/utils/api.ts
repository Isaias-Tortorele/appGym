import axios from 'axios';

const BASE_URL = process.env.EXPO_PUBLIC_API_URL;

const api = axios.create({
  baseURL: BASE_URL,
});

// Função para buscar exercícios por página
export const getAllExercises = async () => {
  try {
    const response = await api.get('/exercicios');
    const allExercises: any[] = [];

    // Iterar sobre cada categoria de exercício
    for (const category in response.data) {
      if (Object.prototype.hasOwnProperty.call(response.data, category)) {
        // Iterar sobre cada exercício dentro da categoria
        response.data[category].forEach((exercise: any) => {
          allExercises.push(exercise);
        });
      }
    }

    return allExercises;
  } catch (error) {
    console.error('Error fetching exercises by page:', error);
    throw error;
  }
};

// Função para buscar exercícios por grupo muscular
export const getExercisesByMuscleGroup = async (muscleGroup: string) => {
  try {
    const response = await api.get(`/${muscleGroup}`);
    console.log(response.data);

    return response.data;
  } catch (error) {
    console.error('Error fetching exercises by muscle group:', error);
    throw error;
  }
};
