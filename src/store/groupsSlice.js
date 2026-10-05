import {createSlice} from '@reduxjs/toolkit';
import { initialGroups } from '../data/initialData';

const initialState = {
    groups: initialGroups,
};

const groupsSlice = createSlice({
    name: 'groups',
    initialState,
    reducers: {
        addGroup: (state, action) => {
            state.groups.push(action.payload);
        },

        deleteGroup: (state, action) => {
            state.groups = state.groups.filter(
                (group) => group.id !== action.payload
            );
        },
    },
});

export const { addGroup, deleteGroup } = groupsSlice.actions;
export default groupsSlice.reducer;