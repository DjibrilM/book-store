import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        "item_id": "item1",
        "title": "The Great Gatsby",
        "author": "John Smith",
        "category": "Fiction"
    },
    {
        "item_id": "item2",
        "title": "Anna Karenina",
        "author": "Leo Tolstoy",
        "category": "Fiction"
    },
    {
        "item_id": "item3",
        "title": "The Selfish Gene",
        "author": "Richard Dawkins",
        "category": "Nonfiction"
    }
]

const booksSlice = createSlice({
    initialState,
    name: "books",
    reducers: {
        addBook: (state, action) => {
            state.unshift(action.payload);
        },
        removeBook: (state, action) => {
           const elementIndex = state.findIndex(el => el.item_id === action.payload);
           state.splice(elementIndex, 1);
        },
    }
});

export const { addBook, removeBook } = booksSlice.actions;
export const bookSelector = (state) => state.books;
export default booksSlice.reducer;

