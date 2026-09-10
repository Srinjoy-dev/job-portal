import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name:"auth",
    initialState:{
        loading:false
    },
    reducers:{
        //actions
        setLoading:(state,action) => {
            state.loading = action.payload;
        }
    }
});
export const {setLoading} = authSlice.actions;
export default authSlice.reducer;
//basically we need to see a loading whenever login happens even if it fails 