import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {
        checkStatus: () => {
            return "under construction";
        }
    }
});

export const { checkStatus } = categoriesSlice.reducer
export default categoriesSlice.reducer;