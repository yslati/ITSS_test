import { createSlice } from '@reduxjs/toolkit'

export interface IProduct {
    id: number,
    name: string
    type: string
    ref: string,
    price: number
};

const productSlice = createSlice({
    name: 'products',
    initialState: [
        {
            id: 1,
            name: "product 1",
            type: "type 1",
            ref: "0154FO1001",
            price: 12.99
        },
        {
            id: 2,
            name: "product 2",
            type: "type 2",
            ref: "0154FO1002",
            price: 16.99
        },
        {
            id: 3,
            name: "product 3",
            type: "type 1",
            ref: "0154FO1003",
            price: 37.99
        },
        {
            id: 4,
            name: "product 4",
            type: "type 3",
            ref: "0154FO1004",
            price: 5.99
        },
        {
            id: 5,
            name: "product 5",
            type: "type 2",
            ref: "0154FO1005",
            price: 24.99
        },
        {
            id: 6,
            name: "product 6",
            type: "type 2",
            ref: "0154FO1006",
            price: 49.99
        },
    ],
    reducers : {
        addProduct: (state, action) => {
            state.push(action.payload)
        },
        deleteProduct: (state, action) => {
            console.log(`delete ${action.payload}`);
            
            state = state.filter(p => p.id !== action.payload)
        },
        deleteAllProducts: (state, action) => {
            state = []
        },
    },

})

export const { addProduct, deleteProduct, deleteAllProducts } = productSlice.actions
export default productSlice.reducer