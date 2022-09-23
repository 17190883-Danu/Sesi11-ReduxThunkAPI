import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./features/counter/counterSlice";
import usersReducer from "./features/users/userSlice";
import authSlice from "./features/auth/authSlice";
import logger from 'redux-logger'
export default configureStore({
  reducer: {
    counter: counterReducer,
    users: usersReducer,
    auth: authSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})