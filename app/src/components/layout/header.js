import React from "react";
import { Layout, Tooltip } from "antd";
import { useHistory } from "react-router-dom";
import { LogoutOutlined } from "@ant-design/icons";

const { Header: AntHeader } = Layout;
const Header = () => {
  const history = useHistory();
  return (
    <AntHeader
      style={{
        width: "calc(100% - 80px)",
        position: "fixed",
        background: "#fff",
        borderBottom: "1px solid #000",
      }}
    >
      <div style={{ float: "right" }}>
        <Tooltip placement="bottom" title={"Logout"}>
          <LogoutOutlined
            style={{ fontSize: 25, cursor: "pointer" }}
            onClick={() => {
              localStorage.clear();
              history.push("/login");
            }}
          />
        </Tooltip>
      </div>
    </AntHeader>
  );
};

export default Header;
