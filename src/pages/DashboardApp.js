// material
import { Box, Grid, Container, Typography } from "@mui/material";
// components
import Page from "../components/Page";
import WalletBalance from "../components/dashboard/WalletBalance";
import ConnectButton from "../components/dashboard/ConnectButton";

// ----------------------------------------------------------------------

export default function DashboardApp() {
	return (
		<Page title="Dashboard | Ethereum Portfolio">
			<Container maxWidth="xl">
				<Box sx={{ pb: 5, display: "flex", alignItems: "center" }}>
					<Typography variant="h4">Hi, Welcome back</Typography>
					<ConnectButton />
				</Box>
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
				</Grid>
			</Container>
		</Page>
	);
}
