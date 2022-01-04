import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "../reduxFeatures/user/userSlice";
import movieReducer from "../reduxFeatures/movie/movieSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
