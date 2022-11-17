import { createSlice } from '@reduxjs/toolkit'

const userInfoFromStorage = localStorage.getItem("userDetails")
console.log(userInfoFromStorage);

const INITIAL_STATE = {
    userDeatils: [userInfoFromStorage],
    count: 0,
}


const userSlice = createSlice({
    name: "user",
    initialState: INITIAL_STATE,

})

export const { addUserDetails } = userSlice.actions;
//reducer export to a store 
export default userSlice.reducer;