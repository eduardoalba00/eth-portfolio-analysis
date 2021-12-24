// material
import { styled } from "@mui/material/styles";
import { Card, Typography } from "@mui/material";
import { useSelector } from "react-redux";

// ----------------------------------------------------------------------
const RootStyle = styled(Card)(({ theme }) => ({
	boxShadow: "none",
	textAlign: "center",
	padding: theme.spacing(5, 0),
	color: "white",
	backgroundColor: theme.palette.primary.darker,
	borderRadius: theme.shape.borderRadiusMd,
}));
// ----------------------------------------------------------------------

export default function WalletBalance() {
	const wallet_balance = useSelector((state) => state.Wallet.balance);

	return (
		<RootStyle>
			<Typography variant="h3">{wallet_balance} ETH</Typography>
			<Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
				Wallet Balance
			</Typography>
		</RootStyle>
	);
}
