import { Navigate, useRoutes } from "react-router-dom";
// layouts
import DashboardLayout from "./layouts/dashboard";
//
import Launch from "./pages/Launch";
import DashboardApp from "./pages/DashboardApp";
// ----------------------------------------------------------------------

export default function Router() {
	return useRoutes([
		{
			path: "/",
			element: <DashboardLayout />,
		},
		{
			path: "/launch",
			element: <Launch />,
		},
	]);
}
