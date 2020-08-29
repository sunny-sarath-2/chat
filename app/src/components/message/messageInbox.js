import React from "react";
import { Avatar } from "../avatar/avatar";
import { Typography } from "antd";
const { Text } = Typography;

export const MessageInbox = ({ message, name }) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "row", margin: 5 }}
      className="msg"
    >
      <Avatar name={name} />
      <div style={{ marginLeft: 10 }} className="msg-bubble">
        <Text>{message}</Text>
      </div>
    </div>
  );
};
