import React from "react";
import { Layout, Tooltip } from "antd";
import { Link } from "react-router-dom";
import { WechatOutlined } from "@ant-design/icons";
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
      <Link
        to="/"
        style={{
          width: "100%",
          display: "block",
          padding: "20px 5px",
          overflow: "hidden",
        }}
      >
        <p
          alt="logo1"
          style={{
            height: 24,
            margin: "0 auto",
            display: "block",
            width: "100%",
            color: "#fff",
            fontSize: "1.3vw",
            fontWeight: 800,
            textAlign: "center",
          }}
        >
          ChatBox
        </p>
      </Link>

      <Link to="/chat">
        <Tooltip placement="right" title={"Chat"}>
          <WechatOutlined
            style={{
              display: "flex",
              justifyContent: "center",
              fontSize: "3.3vw",
              color: "#fff",
              cursor: "pointer",
            }}
          />
        </Tooltip>
      </Link>
    </AntSider>
  );
};

export default Sider;
