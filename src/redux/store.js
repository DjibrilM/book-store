import { configureStore } from "@reduxjs/toolkit";
import booksSlice from "./features/booksSlice";
import categoriesSlice from "./features/categoriesSlice";

const store = configureStore({
    reducer: {
        books: booksSlice,
        categories: categoriesSlice
    }

});

export default store;