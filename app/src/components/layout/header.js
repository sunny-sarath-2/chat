import React from "react";
import { Layout } from "antd";
const { Header: AntHeader } = Layout;
const Header = ({}) => {
  return (
    <AntHeader
      style={{
        width: "calc(100% - 80px)",
        position: "fixed",
        background: "#fff",
      }}
    >
      Header
    </AntHeader>
  );
};

export default Header;
