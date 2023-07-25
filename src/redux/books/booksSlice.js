import { createSlice } from "@reduxjs/toolkit";
const initialState = []

const booksSlice = createSlice({
    initialState,
    name: "books",
    reducers: {
        addBook: (state, action) => {
            const newBokk = state.push(action.payload);
            return newBokk
        },
        removeBook: (state, payload) => {
            const elementIndex = state.findIndex(el => el.id === payload.id);
            const removeBook = state.splice(elementIndex, 1);
            return removeBook;
        }
    }
});

export const { addBook, removeBook } = booksSlice.actions;
export const bookSelector = (state) => state.books;
export default booksSlice.reducer;

