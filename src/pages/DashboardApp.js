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
const HeaderContainer = styled("div")({
	display: "flex",
	alignItems: "center",
	paddingBottom: "3rem",
});

const TitleContainer = styled("div")({
	display: "flex",
	flexDirection: "column",
});

const ButtonContainer = styled("div")({
	marginLeft: "auto",
});
// ----------------------------------------------------------------------

export default function DashboardApp() {
	const current_date = getCurrentDate();

	return (
		<Page title="Dashboard | Ethereum Portfolio">
			<Container maxWidth="xl">
				<HeaderContainer>
					<TitleContainer>
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
					</TitleContainer>
					<ButtonContainer>
						<ConnectButton />
					</ButtonContainer>
				</HeaderContainer>

				<Grid container spacing={4}>
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
