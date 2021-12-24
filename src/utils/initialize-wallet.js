import { formatEther } from "@ethersproject/units";
// redux
import { useDispatch } from "react-redux";
import {
	setAddress,
	setBalance,
	setTotalFloor,
} from "../store/Actions/WalletAction";
// util
import { getFloorTotal } from "./get-assets";

export default function IntitializeWallet(addr, balance) {
	const dispatch = useDispatch();

	dispatch(setAddress(addr));
	dispatch(setBalance(parseFloat(formatEther(balance)).toFixed(4)));
	getFloorTotal(addr).then((floor_total) => {
		dispatch(setTotalFloor(floor_total));
	});
}
