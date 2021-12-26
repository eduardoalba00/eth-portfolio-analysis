import { Icon } from "@iconify/react";
import appleFilled from "@iconify/icons-ant-design/apple-filled";
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
	color: theme.palette.info.darker,
	backgroundColor: theme.palette.info.lighter,
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
	color: theme.palette.info.dark,
	backgroundImage: `linear-gradient(135deg, ${alpha(
		theme.palette.info.dark,
		0
	)} 0%, ${alpha(theme.palette.info.dark, 0.24)} 100%)`,
}));

// ----------------------------------------------------------------------

const TOTAL = 1352831;

export default function AppNewUsers() {
	const floor_total = useSelector((state) => state.Wallet.floor_total);

	return (
		<RootStyle>
			<IconWrapperStyle>
				<Icon icon="icomoon-free:price-tags" width={24} height={24} />
			</IconWrapperStyle>
			<Typography variant="h3">
				{floor_total ? floor_total.toFixed(4) : "-"}
			</Typography>
			<Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
				Total Floor (ETH)
			</Typography>
		</RootStyle>
	);
}
