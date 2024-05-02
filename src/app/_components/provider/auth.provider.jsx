"use client"
import { getValidAuthTokens } from "@/app/_cookies/cookie";
import { keepLogin } from "@/app/_redux/middleware/auth.middle";
import { useEffect } from "react";
import { useDispatch } from "react-redux"

export default function AuthProvider({children}) {
    const dispatch = useDispatch();
    const {data} = getValidAuthTokens();

    const fetchUser = async (storage)=> await dispatch(keepLogin(storage))

    useEffect(()=>{
        if (data) fetchUser(data)
    },[data]);

  return children
}
