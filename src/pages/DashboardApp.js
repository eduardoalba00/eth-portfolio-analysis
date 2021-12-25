// material
import { Grid, Container, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import palette from "../theme/palette";
// components
import Page from "../components/Page";
import ConnectButton from "../components/dashboard/ConnectButton";
import BalanceCard from "../components/dashboard/BalanceCard";
import Profit from "../components/dashboard/Profit";
import Expenditure from "../components/dashboard/Expenditure";
//utils
import { getCurrentDate } from "../utils/get-current-date";

// ----------------------------------------------------------------------

const TitleWrapper = styled("div")(({ theme }) => ({
	[theme.breakpoints.down("sm")]: {
		textAlign: "center",
	},
	[theme.breakpoints.up("md")]: {
		textAlign: "left",
	},
}));

const ButtonWrapper = styled("div")(({ theme }) => ({
	[theme.breakpoints.down("xs")]: {
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
		<Page title="Dashboard | Ethereum Portfolio">
			<Container maxWidth="xl">
				<Grid container spacing={4}>
					<Grid item xs={12} sm={12} md={6}>
						<TitleWrapper>
							<Typography variant="h3" color={"black"}>
								Hi, Welcome back
							</Typography>
							<Typography
								variant="subtitle1"
								color={palette.primary.light}
								fontWeight={500}
							>
								{current_date}
							</Typography>
						</TitleWrapper>
					</Grid>
					<Grid item xs={12} sm={12} md={6}>
						<ButtonWrapper>
							<ConnectButton />
						</ButtonWrapper>
					</Grid>
					<Grid item xs={12} sm={12} md={12}>
						<BalanceCard />
					</Grid>
					<Grid item xs={12} sm={6} md={6}>
						<Profit />
					</Grid>
					<Grid item xs={12} sm={6} md={6}>
						<Expenditure />
					</Grid>
				</Grid>
			</Container>
		</Page>
	);
}
