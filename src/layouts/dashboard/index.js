// material
import { styled } from "@mui/material/styles";
import DashboardApp from "../../pages/DashboardApp";

// ----------------------------------------------------------------------

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 92;

const RootStyle = styled("div")({
	display: "flex",
	minHeight: "100%",
	overflow: "hidden",
});

const MainStyle = styled("div")(({ theme }) => ({
	flexGrow: 1,
	overflow: "auto",
	minHeight: "100%",
	paddingTop: "1.5rem",
	paddingBottom: theme.spacing(10),
	[theme.breakpoints.up("lg")]: {
		paddingTop: "1.5rem",
		paddingLeft: theme.spacing(2),
		paddingRight: theme.spacing(2),
	},
}));

// ----------------------------------------------------------------------

export default function DashboardLayout() {
	return (
		<RootStyle>
			<MainStyle>
				<DashboardApp />
			</MainStyle>
		</RootStyle>
	);
}
