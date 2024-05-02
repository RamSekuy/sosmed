import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import GetTheApp from "../_components/SubComponent/GetTheApp";
import OrComp from "../_components/SubComponent/OrComp";
import Link from "next/link";

const Register = () => {
  return (
    <Box className="w-screen flex items-center justify-center ">
      <Box className="w-[350px]">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            marginTop: "12px",
            borderRadius: "1px",
            border: "1px solid #e7e5eb",
            paddingBottom: "12px",
          }}
        >
          <Box sx={{ margin: "36px auto 12px auto" }}>
            <Link href="/">
              <Image src="/assets/buatlogin.png" width={175} height={51} />
            </Link>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "75%",
                marginBottom: ".3rem",
              }}
            >
              <Typography
                sx={{
                  textAlign: "center",
                  color: "#737373",
                  fontSize: "15px",
                  fontWeight: "550",
                  mb: "15px",
                }}
              >
                Sign up to see photos and videos from your friends.
              </Typography>
              <button className="flex flex-row items-center text-[#fff] text-[13px] font-semibold bg-[#0095f6] w-full justify-center py-[.44rem] rounded-lg">
                <span className="w-[16px] h-[16px] mr-[10px] ">
                  <img
                    src="/assets/fbwhite.png"
                    style={{ objectFit: "cover" }}
                  />
                </span>
                Log in with Facebook
              </button>
            </Box>
            <OrComp />
            <form
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
              }}
            >
              <input
                className="bg-[#fafafa] w-[75%] text-[.7rem] pt-[9px] pb-[7px] pl-[8px] rounded-[2px] border-[1px] border-solid border-gray-200 mb-[0.45rem]"
                type="email"
                name="email"
                id="email"
                placeholder="Mobile Number or Email"
              />
              <input
                className="bg-[#fafafa] w-[75%] text-[.7rem] pt-[9px] pb-[7px] pl-[8px] rounded-[2px] border-[1px] border-solid border-gray-200 mb-[0.45rem]"
                type="text"
                name="fullname"
                id="fullname"
                placeholder="Full Name"
              />
              <input
                className="bg-[#fafafa] w-[75%] text-[.7rem] pt-[9px] pb-[7px] pl-[8px] rounded-[2px] border-[1px] border-solid border-gray-200 mb-[0.45rem]"
                type="text"
                name="username"
                id="username"
                placeholder="Username"
              />
              <input
                className="bg-[#fafafa] w-[75%] text-[.7rem] pt-[9px] pb-[7px] pl-[8px] rounded-[2px] border-[1px] border-solid border-gray-200 mb-3"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
              <Box sx={{ width: "75%" }}>
                <Typography
                  sx={{
                    textAlign: "center",
                    fontSize: "12px",
                    color: "#737373",
                    marginBottom: "10px",
                  }}
                >
                  People who use our service may have uploaded your contact
                  information to Instagram.
                  <a href="#" className="text-blue-800">
                    Learn More
                  </a>
                </Typography>
                <Typography
                  sx={{
                    textAlign: "center",
                    fontSize: "12px",
                    color: "#737373",
                    marginBottom: "10px",
                  }}
                >
                  By signing up, you agree to our
                  <a href="#" className="text-blue-800">
                    Terms , Privacy Policy and Cookies Policy .
                  </a>
                </Typography>
              </Box>

              <button
                className="rounded-[8px] "
                style={{
                  backgroundColor: "#4cb5f9",
                  margin: "8px 20px 8px 20px",
                  width: "75%",
                  height: "32px",
                  color: "#fff",
                  fontSize: "14px",
                  fontWeight: "700",
                }}
              >
                Sign up
              </button>
            </form>
            <Box sx={{ margin: "8px 40px" }}></Box>
          </Box>
        </Box>
        <Box
          sx={{
            width: "100%",
            padding: "23px 0 ",
            borderRadius: "1px",
            border: "1px solid #e7e5eb",
            margin: "10px 0",
          }}
        >
          <p className="text-center text-[13px]">
            have an account?
            <a
              href="#"
              style={{
                color: "#4cb5f9",
                marginLeft: "5px",
                fontWeight: "550",
              }}
            >
              Log in
            </a>
          </p>
        </Box>
        <GetTheApp />
      </Box>
    </Box>
  );
};

export default Register;
