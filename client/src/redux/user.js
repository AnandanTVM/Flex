import { createSlice } from '@reduxjs/toolkit'

const INITIAL_STATE = {
    userDeatils: [],
    count: 0,
}


const userSlice = createSlice({
    name: "user",
    initialState: INITIAL_STATE,
    reducers: {
        addUserDetails: (state, action) => {

            state.userDeatils.push(action.payload)
            console.log(state.userDeatils);
        },

    }


})

export const { addUserDetails } = userSlice.actions;
//reducer export to a store 
export default userSlice.reducer;