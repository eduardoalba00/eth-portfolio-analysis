import { merge } from "lodash";
import ReactApexChart from "react-apexcharts";
// material
import { useTheme, styled } from "@mui/material/styles";
import { Card, CardHeader } from "@mui/material";
// utils
import { fNumber } from "../../utils/format-number";
//
import { BaseOptionChart } from "../charts";
// redux
import { useSelector } from "react-redux";

// ----------------------------------------------------------------------

const CHART_HEIGHT = 372;
const LEGEND_HEIGHT = 72;

const ChartWrapperStyle = styled("div")(({ theme }) => ({
	height: CHART_HEIGHT,
	marginTop: theme.spacing(5),
	"& .apexcharts-canvas svg": { height: CHART_HEIGHT },
	"& .apexcharts-canvas svg,.apexcharts-canvas foreignObject": {
		overflow: "visible",
	},
	"& .apexcharts-legend": {
		height: LEGEND_HEIGHT,
		alignContent: "center",
		position: "relative !important",
		borderTop: `solid 1px ${theme.palette.divider}`,
		top: `calc(${CHART_HEIGHT - LEGEND_HEIGHT}px) !important`,
	},
}));

// ----------------------------------------------------------------------

export default function AppCurrentVisits() {
	const theme = useTheme();
	const wallet_balance = useSelector((state) => state.Wallet.balance);
	const floor_total = useSelector((state) => state.Wallet.floor_total);

	const CHART_DATA = [wallet_balance, floor_total];

	const chartOptions = merge(BaseOptionChart(), {
		colors: [theme.palette.info.main, theme.palette.error.main],
		labels: ["Wallet", "NFT"],
		stroke: { colors: [theme.palette.background.paper] },
		legend: { floating: true, horizontalAlign: "center" },
		dataLabels: { enabled: true, dropShadow: { enabled: false } },
		tooltip: {
			fillSeriesColor: false,
			y: {
				formatter: (seriesName) => fNumber(seriesName),
				title: {
					formatter: (seriesName) => `#${seriesName}`,
				},
			},
		},
		plotOptions: {
			pie: { donut: { labels: { show: false } } },
		},
	});

	return (
		<Card>
			<CardHeader title="Total Balance" />
			<ChartWrapperStyle dir="ltr">
				<ReactApexChart
					type="pie"
					series={CHART_DATA}
					options={chartOptions}
					height={280}
				/>
			</ChartWrapperStyle>
		</Card>
	);
}
