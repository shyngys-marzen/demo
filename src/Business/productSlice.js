import { createSlice } from "@reduxjs/toolkit";

import {
  getAllProductsThunk,
} from "../Data/productThunk";

const initialState = {
  productList: [],
  loading: {
    products: false,

  },


};

const productSlice  = createSlice({
  name: "productSlice",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllProductsThunk.pending]: (state = initialState, ) => {
      state.loading.products = true;

    },
    [getAllProductsThunk.fulfilled]: (state = initialState, action) => {
      state.productList = action.payload.products.map((item) => ({
        ...item,
        count: 1,
      }));
     
 
    },

    
  },
});

export default productSlice.reducer;
