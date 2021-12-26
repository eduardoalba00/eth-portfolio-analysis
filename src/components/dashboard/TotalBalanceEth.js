import { Icon } from "@iconify/react";
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
	color: theme.palette.warning.darker,
	backgroundColor: theme.palette.warning.lighter,
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
	color: theme.palette.warning.dark,
	backgroundImage: `linear-gradient(135deg, ${alpha(
		theme.palette.warning.dark,
		0
	)} 0%, ${alpha(theme.palette.warning.dark, 0.24)} 100%)`,
}));

// ----------------------------------------------------------------------

export default function TotalBalanceEth() {
	const total_balance_eth = useSelector(
		(state) => state.Wallet.total_balance_eth
	);
	return (
		<RootStyle>
			<IconWrapperStyle>
				<Icon icon="cib:ethereum" width={24} height={24} />
			</IconWrapperStyle>
			<Typography variant="h3">
				{total_balance_eth ? total_balance_eth.toFixed(4) : "-"}
			</Typography>
			<Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
				Total Balance (ETH)
			</Typography>
		</RootStyle>
	);
}
