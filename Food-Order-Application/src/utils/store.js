import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const store = configureStore({
    reducer:{
        cart:cartSlice,
    },
});

export default store;



/**
 * Create Store
 *   -configureStore()- RTK
 * 
 * Provide my store to app
 *   - <Provider store= {store}> - react-redux
 * 
 * Slice
 *    -createSlice({
 *      name:"",
 *      initialState:
 *      reducers:{
 *          addItem: (state, action)=> {state= action.payload}
 *    }
 * }) - RTK
 * 
 * export const {addItem, removeItem}=cartSlice.actions;
 * exprt default cartSlice.reducer;
 * 
 * Put that slice into Store
 *    {
 * reducer:{
 *  cart:cartSlice,
 *  user:userSlice
 *  }
 * }
 */