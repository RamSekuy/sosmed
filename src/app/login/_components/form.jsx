"use client";

import { auth } from "@/app/_redux/middleware/auth.middle";
import { login } from "@/app/_redux/slices/user.slice";
import { useState } from "react";
import { useDispatch } from "react-redux";

export default function LoginForm() {
  const [input, setInput] = useState({});
  const inputHandler = (e) =>
    setInput({ ...input, [e.target.id]: e.target.value });
  const dispatch = useDispatch();
  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "24px",
        width: "100%",
      }}
    >
      <input
        className="bg-[#fafafa] w-[75%] text-[.7rem] pt-[9px] pb-[7px] pl-[8px] rounded-[2px] border-[1px] border-solid border-gray-200 mb-[0.45rem]"
        type="text"
        name="email"
        id="email"
        onChange={inputHandler}
        placeholder="Phone number, username, or email"
      />
      <input
        className="bg-[#fafafa] w-[75%] text-[.7rem] pt-[9px] pb-[7px] pl-[8px] rounded-[2px] border-[1px] border-solid border-gray-200 mb-3"
        type="password"
        name="password"
        id="password"
        onChange={inputHandler}
        placeholder="Password"
      />

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
        onClick={async () => {
          console.log(input);
          await dispatch(auth(input));
        }}
        type="button"
      >
        Log in
      </button>
    </form>
  );
}
