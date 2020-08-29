import React from "react";
import { Layout } from "../components";
import { useHistory } from "react-router-dom";
import { appController } from "../common/appController";
const { verifyToken } = appController;

const Home = () => {
  const history = useHistory();

  React.useEffect(() => {
    verifyToken(history);
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
