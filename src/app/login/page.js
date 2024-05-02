import { Box } from "@mui/material";
import OrComp from "../_components/SubComponent/OrComp";
import GetTheApp from "../_components/SubComponent/GetTheApp";
import Image from "next/image";
import Link from "next/link";
import LoginImage from "../_components/SubComponent/loginImage";
import LoginForm from "./_components/form";

export default function Home() {
  return (
    <Box className="w-screen flex items-center justify-center">
      <Box className="flex flex-row w-4/5 mt-[4rem] justify-center mb-[7rem]">
        <LoginImage />
        <Box className="w-[350px]">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              marginTop: "47px",
              borderRadius: "1px",
              border: "1px solid #e7e5eb",
              paddingBottom: "12px",
            }}
          >
            <Box sx={{ margin: "36px auto 12px auto" }}>
              <Image src="/assets/buatlogin.png" width={175} height={51} />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <LoginForm />
              <OrComp />
              <Box sx={{ margin: "8px 40px" }}>
                <button className="flex flex-row items-center text-[#385185] text-[13px] font-semibold ">
                  <span className="w-[16px] h-[16px] mr-[10px] ">
                    <img src="/assets/fb.png" style={{ objectFit: "cover" }} />
                  </span>
                  Log in with Facebook
                </button>
              </Box>
              <Box
                sx={{ margin: "8px auto", color: "#00376b", fontSize: "11px" }}
              >
                Forgot password?
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              width: "100%",
              padding: "20px 0 ",
              borderRadius: "1px",
              border: "1px solid #e7e5eb",
              margin: "10px 0",
            }}
          >
            <p className="text-center text-[13px]">
              Don't have an account?
              <Link
                href="/register"
                style={{ color: "#4cb5f9", marginLeft: "5px" }}
              >
                Sign up
              </Link>
            </p>
          </Box>
          <GetTheApp />
        </Box>
      </Box>
    </Box>
  );
}
