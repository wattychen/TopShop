import { combineReducers } from "redux";
import {userReducer} from './user/user.reducer'
import { categoriesReducer } from "./categories/categories.reducer";

export const rootReducer = combineReducers({
    user: userReducer,
    categories: categoriesReducer
})

export const abc = (acb) => {
    `lets see if this works`
}