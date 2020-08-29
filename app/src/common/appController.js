import { notification } from "antd";
import Services from "../services/API";

export const appController = {
  verifyToken: async (history) => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      if (!accessToken) {
        throw "";
      }
      await Services.verifyToken();
    } catch (error) {
      if (error) {
        notification.error({
          message: "Session failed",
          description: error?.response?.message,
        });
      }
      history.push("/login");
    }
  },
};
