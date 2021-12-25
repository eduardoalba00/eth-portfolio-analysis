// material
import { styled } from "@mui/material/styles";
import { Card, Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { Icon } from "@iconify/react";
// theme
import palette from "../../theme/palette";

// ----------------------------------------------------------------------
const RootStyle = styled(Card)(({ theme }) => ({
	boxShadow: "none",
	display: "flex",
	justifyContent: "space-between",
	padding: theme.spacing(3, 3),
	backgroundColor: theme.palette.secondary.main,
	borderRadius: theme.shape.borderRadiusMd,
}));

const Column = styled("div")(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	padding: theme.spacing(1, 1),
	textAlign: "left",
}));

// ----------------------------------------------------------------------

export default function BalanceCard() {
	const wallet_balance = useSelector((state) => state.Wallet.balance);
	const floor_total = useSelector((state) => state.Wallet.floor_total);
	const balance_floor_sum = (
		floor_total + parseFloat(wallet_balance)
	).toFixed(3);

	const items = [
		{
			icon: "fa-solid:wallet",
			title: "Wallet Balance",
			value: wallet_balance,
		},
		{
			icon: "cib:ethereum",
			title: "Floor Total",
			value: floor_total,
		},
		{
			icon: "fluent:money-calculator-24-filled",
			title: "Balance Plus Floor Total",
			value: balance_floor_sum,
		},
	];
	return (
		<RootStyle>
			<Grid container spacing={2}>
				{items.map((item, index) => {
					return (
						<Grid item xs={12} sm={6} md={4} key={index}>
							<Column>
								<Icon icon={item.icon} width="3rem" />
								<Typography
									variant="subtitle1"
									color={palette.secondary.darker}
									sx={{ pt: 3 }}
								>
									{item.title}
								</Typography>
								<Typography variant="h3">
									{item.value}
								</Typography>
								<Typography
									variant="subtitle1"
									color={palette.secondary.darker}
								>
									ETH
								</Typography>
							</Column>
						</Grid>
					);
				})}
			</Grid>
		</RootStyle>
	);
}
