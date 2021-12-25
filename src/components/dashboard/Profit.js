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
	backgroundColor: theme.palette.secondary.main,
	borderRadius: theme.shape.borderRadiusMd,
}));

const Column = styled("div")(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	padding: theme.spacing(1, 1),
	textAlign: "left",
}));
// ----------------------------------------------------------------------

export default function Profit() {
	return (
		<RootStyle>
			<Column>
				<Typography variant="h3">Profit</Typography>
			</Column>
		</RootStyle>
	);
}
