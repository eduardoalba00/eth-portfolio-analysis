// material
import { styled } from "@mui/material/styles";
// components
import Launch from "../../pages/Launch";

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
	paddingTop: "10vh",
	paddingBottom: theme.spacing(10),
	[theme.breakpoints.up("lg")]: {
		paddingTop: "10vh",
		paddingLeft: theme.spacing(2),
		paddingRight: theme.spacing(2),
	},
}));

// ----------------------------------------------------------------------

export default function LaunchLayout() {
	return (
		<RootStyle>
			<MainStyle>
				<Launch />
			</MainStyle>
		</RootStyle>
	);
}
