import { styled } from "@mui/material/styles";
import { Box, Typography, Link } from "@mui/material";
import { Icon } from "@iconify/react";
import palette from "../../theme/palette";

// ----------------------------------------------------------------------
const AccountStyle = styled("div")(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	color: theme.palette.secondary.contrastText,
	padding: theme.spacing(1, 1),
	borderRadius: theme.shape.borderRadiusSm,
	backgroundColor: theme.palette.secondary.main,
	overflow: "hidden",
	border: "1px solid",
	borderColor: theme.palette.primary.darker,
	transition: "1s",
	"&:hover": {
		backgroundColor: palette.primary.darker,
		color: palette.primary.contrastText,
		border: "1px solid",
		borderColor: palette.primary.darker,
	},
}));
// ----------------------------------------------------------------------

export default function TwitterButton() {
	return (
		<Box sx={{ mx: 2.5 }}>
			<Link underline="none" href="http://twitter.com/BlocklameEth">
				<AccountStyle>
					<Icon icon="mdi:twitter" width="3rem" />
					<Box sx={{ ml: 2 }}>
						<Typography variant="subtitle2">
							Blocklame.eth
						</Typography>
						<Typography variant="body2" sx={{ opacity: "75%" }}>
							Creator
						</Typography>
					</Box>
				</AccountStyle>
			</Link>
		</Box>
	);
}
