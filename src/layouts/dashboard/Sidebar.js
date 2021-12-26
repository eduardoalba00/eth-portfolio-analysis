import PropTypes from "prop-types";
import { useEffect } from "react";
// material
import { styled } from "@mui/material/styles";
import { Icon } from "@iconify/react";
import { Box, Typography, Link, Drawer } from "@mui/material";
// router
import { useLocation } from "react-router-dom";
//theme
import palette from "../../theme/palette";
// components
import NavSection from "../../components/NavSection";
import sidebarConfig from "./SidebarConfig";
import Scrollbar from "../../components/Scrollbar";
import MHidden from "../../components/MHidden";

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
	color: "white",
	padding: theme.spacing(1, 1),
	borderRadius: theme.shape.borderRadiusSm,
	backgroundColor: theme.palette.primary.darker,
	overflow: "hidden",
	border: "1px solid transparent",
	transition: "1s",
	"&:hover": {
		backgroundColor: palette.secondary.main,
		color: palette.secondary.contrastText,
		border: "1px solid",
		borderColor: palette.secondary.contrastText,
	},
}));
// ----------------------------------------------------------------------
// const APPBAR_MOBILE = 64;
// const APPBAR_DESKTOP = 92;
// ----------------------------------------------------------------------

Sidebar.propTypes = {
	isOpenSidebar: PropTypes.bool,
	onCloseSidebar: PropTypes.func,
};

export default function Sidebar({ isOpenSidebar, onCloseSidebar }) {
	const { pathname } = useLocation();

	useEffect(() => {
		if (isOpenSidebar) {
			onCloseSidebar();
		}
	}, [isOpenSidebar, onCloseSidebar, pathname]);

	const renderContent = (
		<Scrollbar
			sx={{
				height: "100%",
				"& .simplebar-content": {
					height: "100%",
					display: "flex",
					flexDirection: "column",
				},
			}}
		>
			<Box sx={{ my: 5, mx: 2.5 }}>
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

			<NavSection navConfig={sidebarConfig} />

			<Box sx={{ flexGrow: 1 }} />
		</Scrollbar>
	);

	return (
		<RootStyle>
			<MHidden width="lgUp">
				<Drawer
					open={isOpenSidebar}
					onClose={onCloseSidebar}
					PaperProps={{
						sx: { width: DRAWER_WIDTH },
					}}
				>
					{renderContent}
				</Drawer>
			</MHidden>

			<MHidden width="lgDown">
				<Drawer
					open
					variant="persistent"
					PaperProps={{
						sx: {
							width: DRAWER_WIDTH,
							bgcolor: "background.default",
						},
					}}
				>
					{renderContent}
				</Drawer>
			</MHidden>
		</RootStyle>
	);
}
