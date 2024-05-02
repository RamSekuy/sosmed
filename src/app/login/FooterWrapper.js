"use client";
import React from "react";
import Footer from "./components/SubComponent/Footer";
import { useEffect, useRef, useState } from "react";

const FooterWrapper = () => {
	const footerRef = useRef(null);
	const [footerBottom, setFooterBottom] = useState(0);

	useEffect(() => {
		function handleScroll() {
			const footerRect = footerRef.current.getBoundingClientRect().top;
			const footerBottom = footerRect.top + footerRect.height;
		}

		if (footerBottom >= window.innerHeight) {
			setFooterBottom(window.innerHeight - footerRect.height);
		} else {
			setFooterBottom(null);
		}

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);
	return (
		<div
			className="sticky bottom-0 mb-[3rem]"
			ref={footerRef}
			style={{
				bottom: footerBottom !== null ? `${footerBottom}px` : "auto",
			}}>
			<Footer />
		</div>
	);
};

export default FooterWrapper;
