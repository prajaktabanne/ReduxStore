import { createStore } from "redux";
import { reducerAction } from "./reducer";

const store = createStore(reducerAction);
export default store;
