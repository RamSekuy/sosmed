import { login } from "../slices/user.slice";
import { deleteCookie } from "cookies-next";
import { axiosInstance } from "@/app/api/_instances/axios";
import { setAuthCookie } from "@/app/_cookies/cookie";

export const auth =
  ({ username, password }) =>
  async (dispatch) => {
    try {
      const res = await axiosInstance().get("/users", {
        params: {
          username,
          password,
        },
      });

      const user = res.data[0];
      console.log(user);
      if (user.id) {
        dispatch(login(user));
        setAuthCookie(JSON.stringify(user), "auth");
      }
    } catch (err) {
      console.log(err.message);
      deleteCookie("auth");
      alert("WRONG Email / Password");
      return err.message;
    }
  };

export const keepLogin = (storage) => {
  return async (dispatch) => {
    try {
      const res = await axiosInstance().get("/users", {
        params: { username: storage.username },
      });
      const user = res.data[0];
      // console.log(user);
      if (user.id) {
        dispatch(login(user));
      }
    } catch (err) {
      deleteCookie("auth");
      window.location.reload();
      return err.message;
    }
  };
};
