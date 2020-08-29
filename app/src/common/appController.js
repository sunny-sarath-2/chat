import { notification } from "antd";
import Services from "../services/API";

export const appController = {
  verifyToken: async (history, login = false, returnUrl = "/login") => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      if (!accessToken) {
        throw "";
      }
      await Services.verifyToken();
      if (login) {
        history.push("/");
      }
    } catch (error) {
      if (error) {
        notification.error({
          message: "Session failed",
          description: error?.response?.message,
        });
      }
      history.push(returnUrl);
    }
  },
};
