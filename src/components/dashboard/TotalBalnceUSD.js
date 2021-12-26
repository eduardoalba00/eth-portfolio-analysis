import { Icon } from "@iconify/react";
import androidFilled from "@iconify/icons-ant-design/android-filled";
// material
import { alpha, styled } from "@mui/material/styles";
import { Card, Typography } from "@mui/material";
// redux
import { useSelector } from "react-redux";

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
	boxShadow: "none",
	textAlign: "center",
	padding: theme.spacing(5, 0),
	color: theme.palette.error.darker,
	backgroundColor: theme.palette.error.lighter,
}));

const IconWrapperStyle = styled("div")(({ theme }) => ({
	margin: "auto",
	display: "flex",
	borderRadius: "50%",
	alignItems: "center",
	width: theme.spacing(8),
	height: theme.spacing(8),
	justifyContent: "center",
	marginBottom: theme.spacing(3),
	color: theme.palette.error.dark,
	backgroundImage: `linear-gradient(135deg, ${alpha(
		theme.palette.error.dark,
		0
	)} 0%, ${alpha(theme.palette.error.dark, 0.24)} 100%)`,
}));

// ----------------------------------------------------------------------

export default function TotalBalanceUSD() {
	const total_balance_usd = useSelector(
		(state) => state.Wallet.total_balance_usd
	);
	return (
		<RootStyle>
			<IconWrapperStyle>
				<Icon icon="fontisto:dollar" width={24} height={24} />
			</IconWrapperStyle>
			<Typography variant="h3">
				{total_balance_usd ? total_balance_usd.toFixed(2) : "-"}
			</Typography>
			<Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
				Total Balance (USD)
			</Typography>
		</RootStyle>
	);
}