import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface RegisterState {
  token: string;
  phone: string
}

export interface UserState {
  register: RegisterState
}

const initialState: UserState = {
  register: {
    token: "",
    phone: ""
  },
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    registerUser: (state, action: PayloadAction<RegisterState>) => {
      state.register = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { registerUser } = userSlice.actions

export default userSlice.reducer