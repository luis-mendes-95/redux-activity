import { legacy_createStore as createStore, combineReducers } from "redux";
import itemsReducer from "./modules/Items/reducer";
import healthReducer from "./modules/Health/reducer";
import staminaReducer from "./modules/Stamina/reducer";

const reducers = combineReducers({ items: itemsReducer, health: healthReducer, stamina: staminaReducer });

const store = createStore(reducers);

export default store;
      