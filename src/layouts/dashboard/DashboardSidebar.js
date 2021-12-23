// material
import { Box, Grid, Container, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

// ----------------------------------------------------------------------
const RootStyle = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("lg")]: {
    flexShrink: 0,
    width: DRAWER_WIDTH,
  },
  alignItems: "center",
}));
// ----------------------------------------------------------------------

const DRAWER_WIDTH = 280;

export default function DashboardSidebar() {
  return (
    <RootStyle>
      <Box sx={{ px: 2.5, py: 3 }}>
        <Typography variant="h3">Here</Typography>
      </Box>
    </RootStyle>
  );
}
