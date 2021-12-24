import { Button, Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useEthers, useEtherBalance } from "@usedapp/core";
import palette from "../../theme/palette";
import shape from "../../theme/shape";
import { formatEther } from "@ethersproject/units";
import Identicon from "../Identicon";
//redux
import setAddress, { setBalance } from "../../store/Actions/WalletAction";
import { useDispatch, useSelector } from "react-redux";

const WalletButton = styled(Button)({
	backgroundColor: palette.grey[800],
	borderRadius: shape.borderRadiusSm,
	margin: "1px",
	overflow: "hidden",
	whiteSpace: "nowrap",
	textOverflow: "ellipsis",
});

export default function ConnectButton() {
	const dispatch = useDispatch();

	// access browser wallet info
	const { activateBrowserWallet, account } = useEthers();
	const etherBalance = useEtherBalance(account);

	//global state for the address and balance of a wallet
	const wallet_address = useSelector((state) => state.Wallet.address);
	const wallet_balance = useSelector((state) => state.Wallet.balance);

	// setting global redux states
	if (account) dispatch(setAddress(account));
	if (etherBalance)
		dispatch(setBalance(parseFloat(formatEther(etherBalance)).toFixed(3)));

	const connectButton = (
		<Button variant="subtitle1" onClick={activateBrowserWallet}>
			CONNECT WALLET
		</Button>
	);

	const accountAddress = (
		<Box
			display="flex"
			alignItems="center"
			backgroundColor={palette.grey[300]}
			borderRadius={shape.borderRadiusSm}
			mx={2}
		>
			<Typography variant="subtitle2" color="black" mx={2}>
				{wallet_balance} ETH
			</Typography>
			<WalletButton onClick={activateBrowserWallet} variant="contained">
				<Typography variant="subtitle2" color="white" mx={2}>
					{wallet_address &&
						`${wallet_address.slice(0, 6)}...${wallet_address.slice(
							wallet_address.length - 4,
							wallet_address.length
						)}`}
				</Typography>
				<Identicon />
			</WalletButton>
		</Box>
	);

	return (
		<div>
			{!wallet_address && connectButton}
			{wallet_address && accountAddress}
		</div>
	);
}
