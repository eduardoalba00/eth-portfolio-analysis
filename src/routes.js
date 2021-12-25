import { useRoutes } from "react-router-dom";
// layouts
import DashboardLayout from "./layouts/dashboard";
import LaunchLayout from "./layouts/launch";
// ----------------------------------------------------------------------

export default function Router() {
	return useRoutes([
		{
			path: "/",
			element: <LaunchLayout />,
		},
		{
			path: "/dashboard",
			element: <DashboardLayout />,
		},
	]);
}
