// material
import { styled } from "@mui/material/styles";
import DashboardApp from "../../pages/DashboardApp";
import Sidebar from "./Sidebar";

// ----------------------------------------------------------------------

const RootStyle = styled("div")({
	display: "flex",
	minHeight: "100%",
	overflow: "hidden",
});

const MainStyle = styled("div")(({ theme }) => ({
	flexGrow: 1,
	overflow: "auto",
	minHeight: "100%",
	paddingTop: "2.5rem",
	paddingBottom: theme.spacing(10),
	[theme.breakpoints.up("lg")]: {
		paddingTop: "2.5rem",
		paddingLeft: theme.spacing(2),
		paddingRight: theme.spacing(2),
	},
}));

// ----------------------------------------------------------------------

export default function DashboardLayout() {
	return (
		<RootStyle>
			<Sidebar />
			<MainStyle>
				<DashboardApp />
			</MainStyle>
		</RootStyle>
	);
}
