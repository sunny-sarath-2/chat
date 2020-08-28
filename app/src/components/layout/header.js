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
        borderBottom: "1px solid #000",
      }}
    >
      Header
    </AntHeader>
  );
};

export default Header;
