import { configureStore,combineReducers} from "@reduxjs/toolkit";
import useReducer from "./userReducer";
import themeReducer from "./themeReducer";

const rootReducer = combineReducers({
  user: useReducer,
  theme:themeReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableMiddleware: {} }),
});
