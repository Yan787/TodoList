import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

type initialType = {
    setDelete: number | undefined
}

const initialState: initialType = {
    setDelete: undefined
}

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
    	setDelete: (state, action: PayloadAction<number>) => {
                state.setDelete = action.payload
        },
    }
})

export const {setDelete} = todoSlice.actions

export default todoSlice.reducer

export const TodoSalectors = {
   getDelete : (state: RootState) => state.todo.setDelete
}
