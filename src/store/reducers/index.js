import {createStore, combineReducers} from "redux"
import minecraftReducer from "./minecraftReducer";

const rootReducer = combineReducers({
    minecraftReducer
});

const store = createStore(rootReducer)

export default store;
