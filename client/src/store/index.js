import { configureStore, createSlice } from '@reduxjs/toolkit';

// -------------------modal------------------------------

const initialModalState = {
    productState: false,
    techState: false
}

const modalSlice = createSlice({
    name: 'modal',
    initialState: initialModalState,
    reducers: {
        productStateToggle(state) {
            state.productState = !state.productState; 
        },
        techStateToggle(state) {
            state.techState = !state.techState; 
        }
    }
});

//-------------------current info-------------------------

const currentInfoState = {
   productState: 0,
   technologyState: 0,
   applicationState: 0,
}

const currentSlice = createSlice({
    name: "current",
    initialState: currentInfoState,
    reducers: {
        changeProductState(state, action) {
            state.productState = action.payload;
        },
        changeTechnologyState(state, action) {
            state.technologyState = action.payload;
        },
        changeApplicationState(state, action) {
            state.applicationState = action.payload;
        }
    }
}) 

// ------------------exporting actions-------------------------

export const modalActions = modalSlice.actions;
export const currentActions = currentSlice.actions;

// -------------------store--------------------------

const store = configureStore({
    reducer: {
        modal: modalSlice.reducer,
        current: currentSlice.reducer,
    }
})

export default store;
