// material
import { Grid, Container, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import palette from "../theme/palette";
// components
import Page from "../components/Page";
import ConnectButton from "../components/dashboard/ConnectButton";
import BalanceCard from "../components/dashboard/BalanceCard";
import ProfitDaily from "../components/dashboard/ProfitDaily";
import ExpenditureDaily from "../components/dashboard/ExpenditureDaily";
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
						<BalanceCard />
					</Grid>
					<Grid item xs={12} sm={6} md={6}>
						<ProfitDaily />
					</Grid>
					<Grid item xs={12} sm={6} md={6}>
						<ExpenditureDaily />
					</Grid>
				</Grid>
			</Container>
		</Page>
	);
}
