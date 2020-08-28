import React, { Children } from "react";
import { Layout as AntLayout } from "antd";
import Sider from "./sider";
import Header from "./header";
const { Content } = AntLayout;

export const Layout = ({ children }) => {
  return (
    <AntLayout>
      <Sider />
      <AntLayout
        style={{
          marginLeft: "80px",
          background: "#fff",
        }}
      >
        <Header />
        <Content
          style={{
            height: "calc(100vh - 80px)",
            marginTop: 70,
            background: "#fff",
          }}
        >
          {children}
        </Content>
      </AntLayout>
    </AntLayout>
  );
};
