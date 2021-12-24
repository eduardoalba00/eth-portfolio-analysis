import Router from "./routes";
// theme
import ThemeConfig from "./theme";
import GlobalStyles from "./theme/globalStyles";
// components
import ScrollToTop from "./components/ScrollToTop";
import DashboardLayout from "./layouts/dashboard";
import Launch from "./pages/Launch";
// router
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
	return (
		<ThemeConfig>
			<ScrollToTop />
			<GlobalStyles />
			<Router />
		</ThemeConfig>
	);
}
