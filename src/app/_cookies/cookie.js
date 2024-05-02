const { getCookie, deleteCookie, setCookie } = require("cookies-next")

const getAuthCookie = (name)=>{
    const cookie = getCookie(name);
    if(!cookie)return undefined;
    return Buffer.from(cookie,"base64").toString("ascii");
}

export const getValidAuthTokens = ()=>{
    try {
        const token = getAuthCookie("auth")
        const data = JSON.parse(String(token))
        return {data}
    } catch (error) {
        deleteCookie("auth");
        return{
            data:undefined
        }
    }
}

export const setAuthCookie = (token,name)=>{
    const toBase64 = Buffer.from(token).toString("base64");

    setCookie(name,toBase64,{
        maxAge: 60*60*24,
        path:"/"
    })
}

export const setRouteCookie = (pathname) => {
    const path = ['/','/register','/login']
    const checkPath = path.find((p)=>p==pathname);
    if(!checkPath){
        setCookie('path',pathname,{
            maxAge: 60*60
        })
    }
}