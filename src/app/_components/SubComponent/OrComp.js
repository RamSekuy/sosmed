import { Box } from "@mui/material";
import React from "react";

const OrComp = () => {
	return (
		<Box
			sx={{
				width: "77%",
				height: "20px",
				display: "flex",
				flexDirection: "row",
				justifyContent: "center",
				margin: "14px 40px 18px ",
			}}>
			<Box
				sx={{
					width: "100%",
					borderBottom: "1px solid #737373",
					height: ".6rem",
				}}></Box>
			<Box
				sx={{
					margin: "0 18px",
					color: "#737373",
					fontSize: "14px",
					fontWeight: "650",
				}}>
				OR
			</Box>
			<Box
				sx={{
					width: "100%",
					borderBottom: "1px solid #737373",
					height: ".6rem",
				}}></Box>
		</Box>
	);
};

export default OrComp;
