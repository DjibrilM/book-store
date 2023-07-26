import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import formatData from "../../helpers/formatData";

import axios from "axios";

const initialState = {
    activityLoading: false,
    loading: false,
    books: [

    ]
}

const booksSlice = createSlice({
    initialState,
    name: "books",
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(addBookThunk.rejected, () => {
            alert("something went wrong ")
        }).addCase(addBookThunk.pending, (state) => {
            state.activityLoading = true;
            console.log("pending");
        }).addCase(addBookThunk.fulfilled, (state, action) => {
            state.activityLoading = false;
            state.books.unshift(action.payload);
        })

        builder.addCase(fetchBooksThunk.pending, (state) => {
            state.loading = true
        }).addCase(fetchBooksThunk.rejected, () => {
            alert("failed to load data");
        }).addCase(fetchBooksThunk.fulfilled, (state, action) => {
            state.loading = false;
            state.books = [...action.payload];
        })

        builder.addCase(removeBookThunk.rejected, () => {
            alert("something went wrong !");
        }).addCase(removeBookThunk.pending, (state, action) => {
            const findIndex = state.books.findIndex((el) => el.item_id === action.meta.arg);
            state.books[findIndex].loading = true;

        }).addCase(removeBookThunk.fulfilled, (state, action) => {
            const findIndex = state.books.findIndex(el => el.item_id === action.payload);
            state.books.splice(findIndex, 1);
        })
    }
});

export const addBookThunk = createAsyncThunk('books/post', async (book) => {
    await axios.post("https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/2waVtFduBwFZQr5iXaTN/books", {
        ...book
    });
    return book;
});

export const fetchBooksThunk = createAsyncThunk('books/get', async () => {
    const request = await axios.get("https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/2waVtFduBwFZQr5iXaTN/books");
    const formatedData = formatData(request.data);
    return formatedData;
});

export const removeBookThunk = createAsyncThunk('books/delete', async (id) => {
    await axios.delete("https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/2waVtFduBwFZQr5iXaTN/books/" + id);
    return id;
});

export const { addBook, removeBook } = booksSlice.actions;
export const bookSelector = (state) => state.books;
export default booksSlice.reducer;

