import { createSlice } from "@reduxjs/toolkit";

 const authSlice = createSlice({
    name:"auth",
    initialState:{
        loading:false,
        user:null
    },
    reducers:{
        //actions
        setLoading:(state,action) => {
            state.loading = action.payload;
        },
        setUser:(state, action) => {
            state.user = action.payload;
        }
    }
});
export const {setLoading, setUser} = authSlice.actions;//basically we need to see a loading whenever login happens even if it fails 
export default authSlice.reducer;