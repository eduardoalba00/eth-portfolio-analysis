import { Link as RouterLink } from "react-router-dom";
// material
import { Box, Typography, Link } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Icon } from "@iconify/react";
//theme
import palette from "../../theme/palette";

// ----------------------------------------------------------------------
const DRAWER_WIDTH = 280;

const RootStyle = styled("div")(({ theme }) => ({
	[theme.breakpoints.up("lg")]: {
		flexShrink: 0,
		width: DRAWER_WIDTH,
	},
	alignItems: "center",
	borderRight: "1px solid",
	borderColor: theme.palette.primary.darker,
	backgroundColor: theme.palette.primary.darker,
	borderRadius: theme.shape.borderRadiusMd,
	margin: theme.spacing(2, 2.5),
}));

const AccountStyle = styled("div")(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	padding: theme.spacing(2, 2.5),
	borderRadius: theme.shape.borderRadiusSm,
	backgroundColor: theme.palette.primary.light,
	overflow: "hidden",
}));
// ----------------------------------------------------------------------

export default function DashboardColumn() {
	return (
		<RootStyle>
			<Box sx={{ my: 5, mx: 2.5 }}>
				<Link underline="none" component={RouterLink} to="#">
					<AccountStyle>
						<Icon
							icon="mdi-light:home"
							width="3rem"
							style={{ color: "white" }}
						/>
						<Box sx={{ ml: 2 }}>
							<Typography
								variant="subtitle2"
								color={palette.primary.contrastText}
							>
								Eduardo Alba
							</Typography>
							<Typography
								variant="body2"
								color={palette.primary.lighter}
							>
								Founder
							</Typography>
						</Box>
					</AccountStyle>
				</Link>
			</Box>
		</RootStyle>
	);
}
