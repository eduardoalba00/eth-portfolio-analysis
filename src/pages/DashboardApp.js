// material
import { Grid, Container, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import palette from "../theme/palette";
// components
import Page from "../components/Page";
import WalletBalance from "../components/dashboard/WalletBalance";
import ConnectButton from "../components/dashboard/ConnectButton";
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
						<Typography
							variant="h3"
							color={palette.primary.contrastText}
						>
							Hi, Welcome back
						</Typography>
						<Typography
							variant="subtitle1"
							color={palette.primary.lighter}
							fontWeight={500}
						>
							{current_date}
						</Typography>
					</TitleContainer>
					<ButtonContainer>
						<ConnectButton />
					</ButtonContainer>
				</HeaderContainer>

				<Grid container spacing={3}>
					<Grid item xs={12} sm={6} md={3}>
						<WalletBalance />
					</Grid>
					<Grid item xs={12} sm={6} md={3}>
						<WalletBalance />
					</Grid>
					<Grid item xs={12} sm={6} md={3}>
						<WalletBalance />
					</Grid>
					<Grid item xs={12} sm={6} md={3}>
						<WalletBalance />
					</Grid>
					<Grid item xs={12} sm={8} md={8}>
						<WalletBalance />
					</Grid>
					<Grid item xs={12} sm={4} md={4}>
						<WalletBalance />
					</Grid>
				</Grid>
			</Container>
		</Page>
	);
}
