import React from "react";
import { Box } from "@mui/material";
import Image from "next/image";

const GetTheApp = () => {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
			}}>
			<Box sx={{ margin: "10px 20px", fontSize: "13px" }}>Get the app.</Box>
			<Box
				sx={{
					display: "flex",
					flexDirection: "row",
					gap: ".6rem",
					justifyContent: "center",
					margin: "10px 0",
				}}>
				<Image src="/assets/googleplay.png" width={135} height={40} />
				<Image src="/assets/microsoft.png" width={110} height={40} />
			</Box>
		</Box>
	);
};

export default GetTheApp;
