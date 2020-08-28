import React from "react";
import { Layout } from "../components";
import { notification } from "antd";
import { useHistory } from "react-router-dom";
import Services from "../services/API";

const Home = () => {
  const history = useHistory();

  React.useEffect(() => {
    verifyToken();
  }, []);
  const verifyToken = React.useCallback(async () => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      if (!accessToken) {
        throw "";
      }
      await Services.verifyToken();
      console.log(await Services.getAllUsers());
    } catch (error) {
      if (error) {
        notification.error({
          message: "Session failed",
          description: error?.response?.message,
        });
      }
      history.push("/login");
    }
  }, []);
  return (
    <Layout>
      <div
        style={{
          height: "inherit",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1
          style={{
            fontSize: 32,
            fontWeight: 800,
          }}
        >
          Welcome
        </h1>
      </div>
    </Layout>
  );
};

export default Home;
