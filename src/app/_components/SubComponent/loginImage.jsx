"use client";
import { useEffect,useState } from "react";
import { Box } from "@mui/material";
import Image from "next/image";

export default function LoginImage() {
    const loginImages = [
        { id: 1, image: "/assets/screenshot1.png" },
        { id: 2, image: "/assets/screenshot2.png" },
        { id: 3, image: "/assets/screenshot3.png" },
        { id: 4, image: "/assets/screenshot4.png" },
    ];

    const [currentImageId, setCurrentImageId] = useState(0);

    useEffect(() => {
		const transitionalInterval = setInterval(() => {
			setCurrentImageId((prevId) => (prevId + 1) % loginImages.length);
		}, 3000);
		return () => clearInterval(transitionalInterval);
	}, []);

    return (
    <Box
					className="w-[380.3px] relative hidden lg:block"
					sx={{
						backgroundImage: "url(/assets/home-phones.png)",
						backgroundSize: "468.32px 634.15px",
						backgroundPosition: "center",
						margin: "0 32px 12px 0",
						height: "650px",
						backgroundRepeat: "no-repeat",
						overflow: "hidden",
					}}>
					{loginImages.map((image, index) => (
						<Image
							key={index}
							src={image.image}
							alt={`image ${image.id + 1}`}
							style={{
								position: "absolute",
								opacity: currentImageId === index ? 1 : 0,
								transition: "opacity 1s ease-in-out",
								marginLeft: "114px",
								marginTop: "33px",
							}}
							width={250}
							height={538.8}
						/>
					))}
				</Box>
  )
}
