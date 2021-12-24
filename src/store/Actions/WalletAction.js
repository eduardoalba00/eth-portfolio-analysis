import { SET_ADDRESS } from "../constants/action-types";

export const setAddress = (address) => {
    return {
        type: SET_ADDRESS,
        payload: address,
    };
};

export default setAddress;
