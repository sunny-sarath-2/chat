import React from "react";
import { Layout } from "../components";
const Home = () => {
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
