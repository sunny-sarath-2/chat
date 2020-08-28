import React from "react";
import { Avatar } from "../avatar/avatar";
import { Typography } from "antd";
const { Text } = Typography;

export const MessageInbox = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "row", margin: 5 }}
      className="msg"
    >
      <Avatar />
      <div style={{ marginLeft: 10 }} className="msg-bubble">
        <Text> Hello World</Text>
      </div>
    </div>
  );
};
