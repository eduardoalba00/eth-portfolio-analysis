import FadeIn from "react-fade-in/lib/FadeIn";
// material
import { Grid, Container, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import palette from "../theme/palette";
// components
import Page from "../components/Page";
import ConnectButton from "../components/dashboard/ConnectButton";
import BalanceCard from "../components/dashboard/BalanceCard";
import DailyProfit from "../components/dashboard/DailyProfit";
import DailyExpenditure from "../components/dashboard/DailyExpenditure";
import WeeklyProfit from "../components/dashboard/WeeklyProfit";
import WeeklyExpenditure from "../components/dashboard/WeeklyExpenditure";
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
	[theme.breakpoints.down("sm")]: {
		textAlign: "center",
	},
	[theme.breakpoints.up("md")]: {
		textAlign: "right",
	},
}));

// ----------------------------------------------------------------------
const DELAY = 250;
const DURATION = 2000;

export default function DashboardApp() {
	const current_date = getCurrentDate();
	return (
		<Page title="Blocklame Interface">
			<Container maxWidth="xl">
				<Grid container spacing={4}>
					<Grid item xs={12} sm={12} md={6}>
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
					</Grid>
					<Grid item xs={12} sm={12} md={6}>
						<ButtonWrapper>
							<ConnectButton />
						</ButtonWrapper>
					</Grid>
					<Grid item xs={12} sm={12} md={12}>
						<FadeIn transitionDuration={DURATION} delay={DELAY}>
							<BalanceCard />
						</FadeIn>
					</Grid>
					<Grid item xs={12} sm={6} md={6}>
						<FadeIn
							transitionDuration={DURATION}
							delay={DELAY + 250}
						>
							<DailyProfit />
						</FadeIn>
					</Grid>
					<Grid item xs={12} sm={6} md={6}>
						<FadeIn
							transitionDuration={DURATION}
							delay={DELAY + 250}
						>
							<DailyExpenditure />
						</FadeIn>
					</Grid>
					<Grid item xs={12} sm={6} md={6}>
						<FadeIn
							transitionDuration={DURATION}
							delay={DELAY + 500}
						>
							<WeeklyProfit />
						</FadeIn>
					</Grid>
					<Grid item xs={12} sm={6} md={6}>
						<FadeIn
							transitionDuration={DURATION}
							delay={DELAY + 500}
						>
							<WeeklyExpenditure />
						</FadeIn>
					</Grid>
				</Grid>
			</Container>
		</Page>
	);
}
