import { configureStore } from '@reduxjs/toolkit';
import groupsReducer from './groupsSlice';
import animalsReducer from './animalSlice';

export const store = configureStore({
    reducer: {
        groups: groupsReducer,
        animals: animalsReducer,
    },
});