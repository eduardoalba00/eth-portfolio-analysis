// material
import { styled } from "@mui/material/styles";
import { Card, Typography } from "@mui/material";
// theme

// ----------------------------------------------------------------------
const RootStyle = styled(Card)(({ theme }) => ({
	boxShadow: "none",
	display: "flex",
	justifyContent: "space-between",
	padding: theme.spacing(3, 3),
	backgroundColor: theme.palette.error.lighter,
	borderRadius: theme.shape.borderRadiusMd,
}));

const Column = styled("div")(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	padding: theme.spacing(1, 1),
	textAlign: "left",
}));
// ----------------------------------------------------------------------

export default function Expenditure() {
	return (
		<RootStyle>
			<Column>
				<Typography variant="h5">Expenditure</Typography>
				<Typography variant="subtitle2" sx={{ opacity: "50%" }}>
					Total this week
				</Typography>
				<Typography variant="h3" sx={{ pt: 1 }}>
					0.322
				</Typography>
				<Typography variant="subtitle1" sx={{ opacity: "50%" }}>
					ETH
				</Typography>
			</Column>
		</RootStyle>
	);
}