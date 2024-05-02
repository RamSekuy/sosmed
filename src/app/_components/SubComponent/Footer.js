import { Box, Typography } from "@mui/material";
import React from "react";

const link = [
	{ title: "Meta", url: "#" },
	{ title: "About", url: "#" },
	{ title: "Blog", url: "#" },
	{ title: "Jobs", url: "#" },
	{ title: "Help", url: "#" },
	{ title: "API", url: "#" },
	{ title: "Privacy", url: "#" },
	{ title: "Terms", url: "#" },
	{ title: "Locations", url: "#" },
	{ title: "Instagram Lite", url: "#" },
	{ title: "Threads", url: "#" },
	{ title: "Contact Uploading & Non-Users", url: "#" },
	{ title: "Meta Verified", url: "#" },
	{ title: "Meta in Indonesia", url: "#" },
];
const language = [
	{ title: "English", value: "en" },
	{ title: "Afrikaans", value: "af" },
	{ title: "Cestina", value: "cs" },
	{ title: "Dansk", value: "da" },
	{ title: "English (UK)", value: "en-gb" },
	{ title: "Espanol (espana)", value: "es" },
	{ title: "Espanol", value: "es-la" },
	{ title: "Suomi", value: "fi" },
	{ title: "francais", value: "fr" },
	{ title: "Bahasa Indonesia", value: "id" },
	{ title: "Norsk", value: "nb" },
	{ title: "Nederlands", value: "nl" },
	{ title: "Portugues (Brasil)", value: "pt-br" },
	{ title: "Portugues (Portugal)", value: "pt" },
	{ title: "Svenska", value: "sv" },
	{ title: "Filipino", value: "tl" },
	{ title: "Hrvatski", value: "hr" },
];

const Footer = () => {
	return (
		<footer className="flex flex-col items-center gap-5 ">
			<Box sx={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
				{link.map((link) => (
					<Box key={link.title} sx={{ fontSize: "12px", color: "#898989" }}>
						<a href={link.url}>{link.title}</a>
					</Box>
				))}
			</Box>
			<Box sx={{ display: "flex", flexDirection: "row", gap: "1.25rem" }}>
				<Box sx={{ fontSize: "12px", color: "#898989" }}>
					<select className="w-[4.2rem]">
						{language.map((lang) => (
							<option key={lang.value}>{lang.title}</option>
						))}
					</select>
				</Box>
				<Box>
					<Typography sx={{ fontSize: "12px", color: "#898989" }}>
						© 2024 Instagram from Meta
					</Typography>
				</Box>
			</Box>
		</footer>
	);
};

export default Footer;
