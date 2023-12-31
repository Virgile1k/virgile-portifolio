import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { Middleware, Reducer } from 'redux';
import { createLogger } from 'redux-logger';
import authSlice, { LoginState } from "../Features/User/loginSlice";
import thunk from 'redux-thunk';
import signupSlice from "../Features/signup/signup";
import blogSlice  from "../Features/blogs/addblog";
import  blogsSlice from "../Features/blogs/fethcallblogs";
import fetchBlogByIdSlice from "../Features/blogs/Fetchblogbyid";
import userSlice from "../Features/User/Allusers";
import messageSlice from "../Messages/Messagepost";
import messagegetSlice from "../Messages/Messageget";
import  blogSliceupdate  from "../Features/blogs/updateblog";
import  blogdeleteSlice from "../Features/blogs/deleteblog";
// App middleware definition
type AppMiddleware = Middleware[];

// Store options interface
interface StoreOptions {
  reducer: {
    user: Reducer<LoginState>;
  };
  middleware: AppMiddleware;
}

// Create default middleware
const defaultMiddleware = getDefaultMiddleware();

// Middleware array
const middleware: AppMiddleware = [
  ...defaultMiddleware,
  thunk,
];

// Logger middleware in dev environment
let logger: Middleware | undefined;
if (process.env.NODE_ENV === 'development') {
  logger = createLogger();
  middleware.push(logger);
}

// Create store with types
const store = configureStore({
  reducer: {
    user: authSlice.reducer,
    signup:signupSlice,
    addblog:blogSlice,
    blogs:blogsSlice.reducer,
    blogid:fetchBlogByIdSlice,
    users:userSlice.reducer,
    message:messageSlice,
    messageget:messagegetSlice,
    blogSliceupdate:blogSliceupdate,
    blogSliceDelete:blogdeleteSlice,
  },
  middleware,
} as StoreOptions);

export default store;
