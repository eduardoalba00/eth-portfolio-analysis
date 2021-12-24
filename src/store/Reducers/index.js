import { combineReducers } from "redux";
import WalletReducer from "./WalletReducer";

const reducers = combineReducers({
    Wallet: WalletReducer,
});

export default reducers;
