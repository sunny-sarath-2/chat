import React from "react";
import { Layout as AntLayout } from "antd";
import Sider from "./sider";
import Header from "./header";
const { Content } = AntLayout;

export const Layout = () => {
  return (
    <AntLayout>
      <Sider />
      <AntLayout
        style={{
          marginLeft: "80px",
        }}
      >
        <Header />
        <Content style={{ height: "calc(100vh - 80px)", marginTop: 80 }}>
          Content
        </Content>
      </AntLayout>
    </AntLayout>
  );
};
