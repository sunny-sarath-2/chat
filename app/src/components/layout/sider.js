import React from "react";
import { Layout } from "antd";

const { Sider: AntSider } = Layout;

const Sider = ({}) => {
  return (
    <AntSider
      collapsible
      collapsed={true}
      trigger={null}
      style={{
        position: "fixed",
        background: "linear-gradient(#ef8564, #ea63a2)",
        height: "100vh",
      }}
    >
      Sider
    </AntSider>
  );
};

export default Sider;
