// material
import { styled } from "@mui/material/styles";
import { Card, Typography } from "@mui/material";
// redux
import { useSelector } from "react-redux";
// ----------------------------------------------------------------------
const RootStyle = styled(Card)(({ theme }) => ({
	boxShadow: "none",
	display: "flex",
	justifyContent: "space-between",
	padding: theme.spacing(3, 3),
	backgroundColor: theme.palette.success.lighter,
	borderRadius: theme.shape.borderRadiusMd,
}));

const Column = styled("div")(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	padding: theme.spacing(1, 1),
	textAlign: "left",
}));
// ----------------------------------------------------------------------

export default function DailyProfit() {
	const daily_profit = useSelector((state) => state.Wallet.daily_profit);
	return (
		<RootStyle>
			<Column>
				<Typography variant="h5">Daily Profit</Typography>
				<Typography variant="subtitle2" sx={{ opacity: "50%" }}>
					Last 24 Hours
				</Typography>
				<Typography variant="h3" sx={{ pt: 1 }}>
					{daily_profit.toFixed(4)}
				</Typography>
				<Typography variant="subtitle1" sx={{ opacity: "50%" }}>
					ETH
				</Typography>
			</Column>
		</RootStyle>
	);
}
