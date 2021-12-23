import { useState } from "react";
// material
import { styled } from "@mui/material/styles";
import DashboardApp from "../../pages/DashboardApp";
import DashboardSidebar from "./DashboardSidebar";

// ----------------------------------------------------------------------

const RootStyle = styled("div")({
  display: "flex",
  minHeight: "100%",
  overflow: "hidden",
});

const MainStyle = styled("div")(({ theme }) => ({
  flexGrow: 1,
  overflow: "auto",
  minHeight: "100%",
  paddingTop: 24,
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up("lg")]: {
    paddingTop: 24,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));

// ----------------------------------------------------------------------

export default function DashboardLayout() {
  const [open, setOpen] = useState(false);

  return (
    <RootStyle>
      <DashboardSidebar />
      <MainStyle>
        <DashboardApp />
      </MainStyle>
    </RootStyle>
  );
}
