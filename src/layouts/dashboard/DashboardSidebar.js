// material
import { Box, Typography, Link } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Icon } from "@iconify/react";
//theme
import palette from "../../theme/palette";

// ----------------------------------------------------------------------
const DRAWER_WIDTH = 250;

const RootStyle = styled("div")(({ theme }) => ({
	[theme.breakpoints.up("lg")]: {
		flexShrink: 0,
		width: DRAWER_WIDTH,
	},
	alignItems: "center",
	borderRight: "1px solid",
	borderColor: theme.palette.primary.lighter,
	backgroundColor: "white",
}));

const AccountStyle = styled("div")(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	padding: theme.spacing(1, 1),
	borderRadius: theme.shape.borderRadiusSm,
	backgroundColor: theme.palette.info.main,
	overflow: "hidden",
}));
// ----------------------------------------------------------------------

export default function DashboardSidebar() {
	return (
		<RootStyle>
			<Box sx={{ my: 5, mx: 2.5 }}>
				<Link underline="none" href="http://twitter.com/BlocklameEth">
					<AccountStyle>
						<Icon
							icon="mdi:twitter"
							width="3rem"
							style={{ color: "white" }}
						/>
						<Box sx={{ ml: 2 }}>
							<Typography
								variant="subtitle2"
								color={palette.primary.contrastText}
							>
								Blocklame.eth
							</Typography>
							<Typography
								variant="body2"
								color={palette.primary.contrastText}
								sx={{ opacity: "75%" }}
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
