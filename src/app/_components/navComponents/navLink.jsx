"use client";
import { getURL } from "next/dist/shared/lib/utils";
import "./navLink.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function NavLink() {
  const page = (url = "", text = "", logo = "", mobile = false) => {
    return { url, text, logo, mobile };
  };
  const pageList = [
    page("/", "Beranda", "/navIcon/home.svg", true),
    page("/search", "Pencarian", "/navIcon/search.svg", true),
    page("/explore", "Jelajahi", "/navIcon/explore.png"),
    page("/reels", "Reels", "/navIcon/reels.svg", true),
    page("/message", "Pesan", "/navIcon/message.png", true),
    page("/notification", "Notifikasi", "/navIcon/notification.png"),
  ];
  const [urlState, setUrlState] = useState("");

  useEffect(() => {
    setUrlState(getURL());
  }, []);

  return (
    <div className="w-full flex md:flex-col justify-evenly gap-2">
      {pageList.map((e, i) => (
        <div
          className={`w-[48px] xl:w-full ${e.mobile ? "" : "hidden"} sm:block`}
          onClick={() => {
            setUrlState(e.url);
          }}
          key={i * i}
        >
          <Link href={e.url} className="w-full">
            <div
              className={`rounded-full flex aspect-square justify-center items-center xl:aspect-auto xl:w-full xl:p-3 xl:justify-start gap-3 transition-colors hover:bg-gray-100 navLink ${
                urlState == e.url ? "activePage" : ""
              }`}
            >
              <div className="w-full max-w-[22px] aspect-square relative">
                <Image src={e.logo} fill alt="Logo" />
              </div>
              <h1 className="hidden xl:block">{e.text}</h1>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
