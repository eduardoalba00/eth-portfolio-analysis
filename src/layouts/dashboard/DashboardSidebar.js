// material
import { styled } from "@mui/material/styles";

// ----------------------------------------------------------------------
const DRAWER_WIDTH = 220;

const RootStyle = styled("div")(({ theme }) => ({
	[theme.breakpoints.up("lg")]: {
		flexShrink: 0,
		width: DRAWER_WIDTH,
	},
	alignItems: "center",
	borderRight: "1px solid",
	borderColor: theme.palette.primary.darker,
	backgroundColor: theme.palette.primary.darker,
}));

const AccountStyle = styled("div")(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	padding: theme.spacing(2, 2.5),
	borderRadius: theme.shape.borderRadiusSm,
	backgroundColor: theme.palette.primary.dark,
	overflow: "hidden",
}));
// ----------------------------------------------------------------------

export default function DashboardSidebar() {
	return <RootStyle></RootStyle>;
}
