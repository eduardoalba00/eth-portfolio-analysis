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
	color: theme.palette.success.darker,
	backgroundColor: theme.palette.success.lighter,
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
	color: theme.palette.success.dark,
	backgroundImage: `linear-gradient(135deg, ${alpha(
		theme.palette.success.dark,
		0
	)} 0%, ${alpha(theme.palette.success.dark, 0.24)} 100%)`,
}));

// ----------------------------------------------------------------------

export default function WalletBalance() {
	const wallet_balance = useSelector((state) => state.Wallet.balance);
	return (
		<RootStyle>
			<IconWrapperStyle>
				<Icon icon="fa-solid:wallet" width={24} height={24} />
			</IconWrapperStyle>
			<Typography variant="h3">
				{wallet_balance ? wallet_balance.toFixed(4) : "-"}
			</Typography>
			<Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
				Wallet Balance (ETH)
			</Typography>
		</RootStyle>
	);
}
