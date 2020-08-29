import React from "react";
import { Avatar } from "../avatar/avatar";

import { Typography } from "antd";

const { Title, Text } = Typography;

export const MessageAreaHeader = ({ name }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        height: "65px",
        background: "#f9f9f9",
      }}
    >
      <Avatar />
      <div style={{ marginLeft: 10 }}>
        <Title level={4} style={{ marginBottom: 0 }}>
          {name}
        </Title>
        <Text type={"secondary"}>online </Text>
      </div>
    </div>
  );
};
