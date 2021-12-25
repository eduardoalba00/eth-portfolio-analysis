import { useState, useEffect } from "react";
import { useEthers } from "@usedapp/core";
import React from "react";
// material
import { styled } from "@mui/material/styles";
import { Card, Typography } from "@mui/material";
import { useSelector } from "react-redux";
// util
import { getCollectionStats } from "../../utils/get-assets";
// theme
import shape from "../../theme/shape";

// ----------------------------------------------------------------------
const RootStyle = styled(Card)(({ theme }) => ({
	boxShadow: "none",
	padding: theme.spacing(3, 3),
	color: theme.palette.primary.contrastText,
	backgroundColor: theme.palette.primary.darker,
	borderRadius: theme.shape.borderRadiusMd,
}));

const Item = styled("div")(({ theme }) => ({
	display: "flex",
	alignItems: "center",
}));

const Name = styled("div")(({ theme }) => ({
	width: "20%",
}));

const Data = styled("div")(({ theme }) => ({
	width: "20%",
	textAlign: "right",
}));
// ----------------------------------------------------------------------

export default function CollectionsSummary() {
	const [collectionSummary, setCollectionSummary] = useState([]);
	const { account } = useEthers();

	useEffect(() => {
		if (account) {
			getCollectionStats(account).then((collection_stats) => {
				setCollectionSummary(collection_stats);
			});
		}
	}, [account]);

	return (
		<RootStyle>
			<Typography variant="subtitle1">Collection Stats</Typography>
			<Typography variant="subtitle2" sx={{ opacity: 0.72, pb: 3 }}>
				List
			</Typography>
			<CollectionSummaryItems list={collectionSummary} />
		</RootStyle>
	);
}

function CollectionSummaryItems(props) {
	let collections = props.list;
	return (
		<>
			<Item sx={{ pb: 3 }}>
				<Name>
					<Typography variant="subtitle2">Name</Typography>
				</Name>
				<Data>
					<Typography variant="subtitle2">Average Price</Typography>
				</Data>
				<Data>
					<Typography variant="subtitle2">Floor Price</Typography>
				</Data>
				<Data>
					<Typography variant="subtitle2">Daily Change</Typography>
				</Data>
				<Data>
					<Typography variant="subtitle2">Daily Volume</Typography>
				</Data>
			</Item>
			<Item>
				<Name>
					<Typography variant="subtitle2">
						Little Lemon Friends
					</Typography>
				</Name>

				<Data>
					<Typography variant="subtitle2">0.123</Typography>
				</Data>
				<Data>
					<Typography variant="subtitle2">0.951</Typography>
				</Data>
				<Data>
					<Typography variant="subtitle2">-0.32</Typography>
				</Data>
				<Data>
					<Typography variant="subtitle2">23.12</Typography>
				</Data>
			</Item>
		</>
	);
}
