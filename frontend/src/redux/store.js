import { configureStore} from "@reduxjs/toolkit";
import navSlice from "./slices/navSlice";
import pageSlice from "./slices/pageSlice";
import useReducer  from "./slices/userSlice";
import userSlice from "./slices/userSlice";
import authSlice from "./slices/authSlice";



const Store = configureStore({
    reducer: {
        // Define your reducers here
        nav:navSlice,
        page: pageSlice,
        user:useReducer,
        user:userSlice,
        auth:authSlice,
        // Add more reducers here if needed.
    },
    // Other store enhancers if needed
});

export default Store;