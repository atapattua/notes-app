import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    notes: {}
}

export const notesSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        addNote: (state) => {

        },
        deleteNote: (state) => {

        },

    }
});

export const {addNote, deleteNote } = notesSlice.actions;

export default notesSlice.reducer;