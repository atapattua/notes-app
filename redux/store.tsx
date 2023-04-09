import { configureStore } from "@reduxjs/toolkit";

//reducers
import notesReducer from "./notesSlice";

export const store = configureStore({
    reducer: {
        notes: notesReducer
    }
})