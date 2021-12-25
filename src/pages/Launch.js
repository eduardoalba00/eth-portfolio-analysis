import FadeIn from "react-fade-in/lib/FadeIn";
// components
import Page from "../components/Page";
import dashboardImgVertical from "../assets/images/dashboardVertical.png";
// material
import { Container, Typography, Grid, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
// theme
import palette from "../theme/palette";
import shape from "../theme/shape";
// router
import { useNavigate } from "react-router";

// ----------------------------------------------------------------------
const ImageWrapper = styled("div")(({ theme }) => ({
	boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
	borderRadius: shape.borderRadiusMd,
	marginLeft: theme.spacing(5),
	marginRight: theme.spacing(5),
}));

const LaunchButton = styled(Button)(({ theme }) => ({
	marginTop: theme.spacing(10),
	backgroundColor: palette.primary.darker,
	color: palette.primary.contrastText,
	border: "1px solid transparent",
	borderRadius: shape.borderRadiusSm,
	overflow: "hidden",
	boxShadow: "none",
	"&:hover": {
		backgroundColor: palette.secondary.main,
		color: palette.secondary.contrastText,
		border: "1px solid",
		borderColor: palette.primary.main,
		boxShadow: "none",
	},
}));

const TextWrapper = styled("div")(({ theme }) => ({
	width: "80%",
	[theme.breakpoints.down("sm")]: {
		textAlign: "center",
	},
	[theme.breakpoints.up("md")]: {
		textAlign: "left",
	},
}));
// ----------------------------------------------------------------------
const DELAY = 500;
const DURATION = 2000;

export default function Launch() {
	let navigate = useNavigate();

	function handleClick() {
		navigate("/dashboard");
	}

	return (
		<Page title="Home | Blocklame Analysis">
			<Container maxwidth="xl">
				<Grid container spacing={4}>
					<Grid item xs={12} sm={12} md={12} sx={{ pb: "10vh" }}>
						<TextWrapper>
							<FadeIn transitionDuration={DURATION}>
								<Typography variant="h6">Blocklame</Typography>
							</FadeIn>
						</TextWrapper>
					</Grid>
					<Grid item xs={12} sm={12} md={6}>
						<TextWrapper>
							<FadeIn transitionDuration={DURATION} delay={DELAY}>
								<Typography variant="h2">Analyze</Typography>
								<Typography variant="h2" sx={{ mt: "-1vh" }}>
									your portfolio
								</Typography>
								<Typography variant="h6" sx={{ pt: "5vh" }}>
									Launch the app and take hold of your web3
									portfolio
								</Typography>
								<LaunchButton
									onClick={handleClick}
									variant="subtitle2"
								>
									Launch App
								</LaunchButton>
							</FadeIn>
						</TextWrapper>
					</Grid>
					<Grid item xs={12} sm={12} md={6}>
						<FadeIn transitionDuration={DURATION} delay={DELAY}>
							<ImageWrapper>
								<img
									src={dashboardImgVertical}
									style={{
										borderRadius: shape.borderRadiusMd,
									}}
								/>
							</ImageWrapper>
						</FadeIn>
					</Grid>
				</Grid>
			</Container>
		</Page>
	);
}
