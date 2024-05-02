// "use client"
import { Inter } from "next/font/google";
import "./globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import MainNavbar from "./_components/navComponents/mainNavbar";
import StoreProvider from "./_components/provider/storeProvider";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="flex flex-col md:flex-row">
        {/* Responsive Navbar */}
        <StoreProvider>
          <MainNavbar />
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
