import { createSlice } from '@reduxjs/toolkit';
import { initialAnimals } from '../data/initialData';

const initialState = {
    animals: initialAnimals,
};

const animalSlice = createSlice({
    name: 'animals',
    initialState,
    reducers: {
        addAnimal: (state, action) => {
            state.animals.push(action.payload);
        },

        deleteAnimal: (state, action) => {
            state.animals = state.animals.filter(
                (animal) => animal.id !== action.payload
            );
        },

        updateAnimal: (state, action) => {
            const index = state.animals.findIndex(
                (animal) => animal.id === action.payload.id
            );

            if (index !== -1) {
                state.animals[index] = action.payload;
            }
        },
    },
});

export const { 
    addAnimal, 
    deleteAnimal, 
    updateAnimal 
} = animalSlice.actions;

export default animalSlice.reducer;