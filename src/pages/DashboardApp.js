// material
import { Grid, Container, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import palette from "../theme/palette";
// components
import Page from "../components/Page";
import ConnectButton from "../components/dashboard/ConnectButton";
import LineChart from "../components/dashboard/LineChart";
import WalletBalance from "../components/dashboard/WalletBalance";
import FloorBalance from "../components/dashboard/FloorBalance";
import TotalBalanceEth from "../components/dashboard/TotalBalanceEth";
import TotalBalanceUSD from "../components/dashboard/TotalBalanceUSD";
import PieChart from "../components/dashboard/PieChart";
import TwitterButton from "../components/dashboard/TwitterButton";
//utils
import { getCurrentDate } from "../utils/get-current-date";

// ----------------------------------------------------------------------

const FlexWrapper = styled("div")(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "start",
}));

const TitleWrapper = styled("div")(({ theme }) => ({
	[theme.breakpoints.down("sm")]: {
		textAlign: "center",
	},
	[theme.breakpoints.up("md")]: {
		textAlign: "left",
	},
}));

const ButtonWrapper = styled("div")(({ theme }) => ({
	[theme.breakpoints.down("sm")]: {
		textAlign: "center",
	},
	[theme.breakpoints.up("md")]: {
		textAlign: "right",
	},
}));

// ----------------------------------------------------------------------

export default function DashboardApp() {
	const current_date = getCurrentDate();
	return (
		<Page title="Blocklame Interface">
			<Container maxWidth="xl">
				<Grid container spacing={4}>
					<Grid item xs={12} sm={12} md={6}>
						<FlexWrapper>
							<TitleWrapper>
								<Typography variant="h3" color={"black"}>
									Blocklame Dashboard
								</Typography>
								<Typography
									variant="subtitle1"
									color={palette.primary.light}
									fontWeight={500}
								>
									{current_date}
								</Typography>
							</TitleWrapper>
							<TwitterButton />
						</FlexWrapper>
					</Grid>
					<Grid item xs={12} sm={12} md={6}>
						<ButtonWrapper>
							<ConnectButton />
						</ButtonWrapper>
					</Grid>
					<Grid item xs={12} sm={6} md={3}>
						<WalletBalance />
					</Grid>
					<Grid item xs={12} sm={6} md={3}>
						<FloorBalance />
					</Grid>
					<Grid item xs={12} sm={6} md={3}>
						<TotalBalanceEth />
					</Grid>
					<Grid item xs={12} sm={6} md={3}>
						<TotalBalanceUSD />
					</Grid>
					<Grid item xs={12} sm={6} md={8}>
						<LineChart />
					</Grid>
					<Grid item xs={12} sm={6} md={4}>
						<PieChart />
					</Grid>
				</Grid>
			</Container>
		</Page>
	);
}
