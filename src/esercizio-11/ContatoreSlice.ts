import {createSlice} from "@reduxjs/toolkit";
import ContatoreSlice from "./ContatoreSlice";

export interface ContatoreState {
    valore: number;
}

const initialState: ContatoreState = {
    valore: 0
}

export const contatoreSlice = createSlice({
    name: "contatore",
    initialState,
    reducers: {
        incrementa: (state) => {
            state.valore = state.valore + 1;
        },
        impostaValore: (state, action) => {
            state.valore = action.payload;
        }
    }
})

export const { incrementa, impostaValore } = contatoreSlice.actions;
export default contatoreSlice.reducer;
