import React from "react";
import { Avatar } from "../avatar/avatar";
import { Typography } from "antd";
const { Text } = Typography;

export const MessageSent = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        margin: 5,
      }}
      className="msg right-msg"
    >
      <div style={{ marginRight: 10 }} className="msg-bubble">
        <Text> Hello World</Text>
      </div>
      <Avatar />
    </div>
  );
};
