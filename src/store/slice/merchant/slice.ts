import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ReduxStoreModel } from "@/models/redux/redux-store-model";
import { fetchContent } from "./requests";

const initialState: any = {
  count: {
    data: [],
    isLoading : false,
    error: {},
  },
};

export const merchantSlice = createSlice({
  name: "merchant",
  initialState,
  reducers: {
    // setRequestsRefreshRate: (state, action: PayloadAction<any>) => {
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchContent.pending, (state) => {});
    builder.addCase(fetchContent.fulfilled, (state, action) => {});
    builder.addCase(fetchContent.rejected, (state, action) => {});
  },
});

export const {} = merchantSlice.actions;

export default merchantSlice.reducer;
