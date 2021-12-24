// material
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
//components
import ConnectButton from "../../components/dashboard/ConnectButton";
//redux
import { useSelector } from "react-redux";

// ----------------------------------------------------------------------
const DRAWER_WIDTH = 220;

const RootStyle = styled("div")(({ theme }) => ({
	[theme.breakpoints.up("lg")]: {
		flexShrink: 0,
		width: DRAWER_WIDTH,
	},
	alignItems: "center",
	borderRight: "1px solid",
	borderColor: theme.palette.grey[300],
}));

const AccountStyle = styled("div")(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	padding: theme.spacing(2, 2.5),
	borderRadius: theme.shape.borderRadiusSm,
	backgroundColor: theme.palette.grey[200],
	overflow: "hidden",
}));
// ----------------------------------------------------------------------

export default function DashboardSidebar() {
	return (
		<RootStyle>
			<Box sx={{ my: 3, mx: 2.5 }}>
				<ConnectButton />
			</Box>
		</RootStyle>
	);
}
