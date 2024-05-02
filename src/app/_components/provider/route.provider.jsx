"use client";
import { getValidAuthTokens } from "@/app/_cookies/cookie";
import { deleteCookie, getCookie } from "cookies-next";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function RouteProvider({ children }) {
  const { push } = useRouter();
  const auth = useSelector((state) => state.auth);
  const guestOnlyPaths = ["/login", "/register"];
  const needLoginPaths = ["/", "/profile"];
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const { data } = getValidAuthTokens();
    console.log(data);
    if (guestOnlyPaths.find((path) => path == pathname) && data) {
      const path = getCookie("path");

      if (path) {
        push(path);
        deleteCookie("path");
      } else push("/");
    } else if (
      needLoginPaths.find((path) => {
        if (path != "/" && pathname.includes(path)) return path;
        else if (pathname == path) return path;
      }) &&
      !data
    ) {
      // setRouteCooke(pathname);
      push("/login");
    } else {
      setIsLoading(false);
    }
  }, [pathname, auth]);
  if (isLoading) return <h1>Loading...</h1>;
  return children;
}
