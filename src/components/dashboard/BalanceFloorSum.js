// material
import { styled } from "@mui/material/styles";
import { Card, Typography } from "@mui/material";
import { useSelector } from "react-redux";

// ----------------------------------------------------------------------
const RootStyle = styled(Card)(({ theme }) => ({
	boxShadow: "none",
	textAlign: "center",
	padding: theme.spacing(5, 0),
	color: theme.palette.primary.contrastText,
	backgroundColor: theme.palette.primary.darker,
	borderRadius: theme.shape.borderRadiusMd,
}));
// ----------------------------------------------------------------------

export default function BalanceFloorSum() {
	const floor_total = useSelector((state) => state.Wallet.floor_total);
	const wallet_balance = useSelector((state) => state.Wallet.balance);
	const balance_floor_sum = floor_total + parseFloat(wallet_balance);

	return (
		<RootStyle>
			<Typography variant="h3">{balance_floor_sum} ETH</Typography>
			<Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
				Balance Plus Floor Total
			</Typography>
		</RootStyle>
	);
}
