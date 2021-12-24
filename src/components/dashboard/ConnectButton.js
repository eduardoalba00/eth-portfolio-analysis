import { Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useEthers, useEtherBalance } from "@usedapp/core";
import { formatEther } from "@ethersproject/units";
import { useEffect } from "react";
// theme
import palette from "../../theme/palette";
import shape from "../../theme/shape";
// components
import Identicon from "../Identicon";
// redux
import setAddress, { setBalance } from "../../store/Actions/WalletAction";
import { useDispatch, useSelector, componentDidMount } from "react-redux";
import { setTotalFloor } from "../../store/Actions/WalletAction";
// util
import { getFloorTotal } from "../../utils/get-assets";

// ----------------------------------------------------------------------
const WalletButtonContainer = styled("div")({
	display: "flex",
	alignItems: "center",
	backgroundColor: palette.secondary.main,
	borderRadius: shape.borderRadiusSm,
});

const WalletButton = styled(Button)({
	backgroundColor: palette.primary.darker,
	border: "1px solid transparent",
	borderRadius: shape.borderRadiusSm,
	overflow: "hidden",
	boxShadow: "none",
	"&:hover": {
		backgroundColor: palette.primary.darker,
		border: "1px solid",
		borderColor: palette.secondary.main,
		boxShadow: "none",
	},
});

const ConnectButtonStyle = styled(Button)({
	backgroundColor: palette.secondary.main,
	color: palette.primary.darker,
	border: "1px solid transparent",
	borderRadius: shape.borderRadiusSm,
	overflow: "hidden",
	boxShadow: "none",
	"&:hover": {
		backgroundColor: palette.primary.main,
		color: palette.secondary.contrastText,
		border: "1px solid",
		borderColor: palette.secondary.main,
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

	// setting global redux states
	if (account && etherBalance) {
		dispatch(setAddress(account));
		dispatch(setBalance(parseFloat(formatEther(etherBalance)).toFixed(4)));
		getFloorTotal(account).then((floor_total) => {
			dispatch(setTotalFloor(floor_total));
		});
	}

	// connecting to browser wallet on button click
	function handleConnectWallet() {
		activateBrowserWallet();
	}

	const connectButton = (
		<ConnectButtonStyle variant="subtitle2" onClick={handleConnectWallet}>
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
				{wallet_balance} ETH
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
