import {configureStore, createSlice} from '@reduxjs/toolkit';

const autSlice=createSlice({
    name:"auth",
    initialState:{ isLoggedIn:false},
    reducers:{
        login(state){
            state.isLoggedIn=true
        },
        logout(state){
            localStorage.removeItem("userId");
            state.isLoggedIn=false
        },
    }
});
export const authActions =autSlice.actions

export const store=configureStore({
    reducer: autSlice.reducer
})
