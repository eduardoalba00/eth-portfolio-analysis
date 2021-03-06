import { Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useEthers, useEtherBalance } from "@usedapp/core";
import { formatEther } from "@ethersproject/units";
// theme
import palette from "../../theme/palette";
import shape from "../../theme/shape";
// components
import Identicon from "../Identicon";
// redux
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
	setAddress,
	setBalance,
	setDailyExpenditure,
	setTotalBalanceETH,
	setTotalBalanceUSD,
	setTotalFloor,
	setDailyIncome,
	setDailyProfit,
} from "../../store/Actions/WalletAction";
// util
import { getFloorTotal } from "../../utils/get-assets";
import { getEthPriceUSD } from "../../utils/get-eth-price";
import {
	getDailyExpenditure,
	getDailyIncome,
	getDailyProfit,
} from "../../utils/get-expenses";

// ----------------------------------------------------------------------
const WalletButtonContainer = styled("div")({
	display: "inline-flex",
	overflow: "hidden",
	alignItems: "center",
	backgroundColor: palette.secondary.main,
	border: "1px solid transparent",
	borderRadius: shape.borderRadiusSm,
	transition: "1s",
	"&:hover": {
		border: "1px solid",
		borderColor: palette.primary.darker,
		boxShadow: "none",
	},
});

const WalletButton = styled(Button)({
	backgroundColor: palette.primary.darker,
	border: "1px solid transparent",
	borderRadius: shape.borderRadiusSm,
	overflow: "hidden",
	boxShadow: "none",
	transition: "1s",
	"&:hover": {
		backgroundColor: palette.primary.darker,
		border: "1px solid",
		borderColor: palette.primary.main,
		boxShadow: "none",
	},
});

const ConnectButtonStyle = styled(Button)({
	backgroundColor: palette.primary.darker,
	color: palette.primary.contrastText,
	border: "1px solid transparent",
	borderRadius: shape.borderRadiusSm,
	overflow: "hidden",
	boxShadow: "none",
	transition: "1s",
	"&:hover": {
		backgroundColor: palette.secondary.main,
		color: palette.secondary.contrastText,
		border: "1px solid",
		borderColor: palette.primary.main,
		boxShadow: "none",
	},
});

// ----------------------------------------------------------------------

export default function ConnectButton() {
	const dispatch = useDispatch();

	// access browser wallet info
	const { activateBrowserWallet, account } = useEthers();
	const etherBalance = useEtherBalance(account);

	//global state for the address and balance of a wallet
	const wallet_address = useSelector((state) => state.Wallet.address);
	const wallet_balance = useSelector((state) => state.Wallet.balance);

	// initializing global redux states for wallet
	useEffect(() => {
		if (account && etherBalance) {
			let balance = parseFloat(formatEther(etherBalance));
			dispatch(setAddress(account));
			dispatch(setBalance(balance));

			getFloorTotal(account).then((floor_total) => {
				dispatch(setTotalFloor(floor_total));
				dispatch(setTotalBalanceETH(balance + floor_total));
				getEthPriceUSD().then((data) => {
					dispatch(
						setTotalBalanceUSD(data * (balance + floor_total))
					);
				});
			});

			getDailyExpenditure(account).then((data) => {
				// console.log(data);
				dispatch(setDailyExpenditure(data));
			});

			getDailyIncome(account).then((data) => {
				// console.log(data);
				dispatch(setDailyIncome(data));
			});

			getDailyProfit(account).then((data) => {
				// console.log(data);
				dispatch(setDailyProfit(data));
			});
		}
	}, [account, etherBalance, dispatch]);

	const connectButton = (
		<ConnectButtonStyle variant="subtitle2" onClick={activateBrowserWallet}>
			CONNECT WALLET
		</ConnectButtonStyle>
	);

	const accountAddress = (
		<WalletButtonContainer>
			<Typography
				variant="subtitle2"
				color={palette.primary.darker}
				mx={1}
			>
				{wallet_balance.toFixed(4)} ETH
			</Typography>
			<WalletButton onClick={activateBrowserWallet} variant="contained">
				<Typography variant="subtitle2" color="white" mr={1}>
					{wallet_address &&
						`${wallet_address.slice(0, 6)}...${wallet_address.slice(
							wallet_address.length - 4,
							wallet_address.length
						)}`}
				</Typography>
				<Identicon />
			</WalletButton>
		</WalletButtonContainer>
	);

	return (
		<div>
			{!wallet_address && connectButton}
			{wallet_address && accountAddress}
		</div>
	);
}
