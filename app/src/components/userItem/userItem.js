import React from "react";
import { Avatar } from "../avatar/avatar";
import { Typography, Badge } from "antd";
const { Text, Title } = Typography;
export const UserItem = ({ name, lastSeen }) => {
  return (
    <div style={{ display: "flex", flexDirection: "row", padding: 5 }}>
      <Avatar />
      <div style={{ marginLeft: 10 }}>
        <Title
          level={5}
          style={{
            marginBottom: 0,
          }}
        >
          {name}
        </Title>
        <Text type={"secondary"}>{lastSeen} </Text>
      </div>
      <div
        style={{
          display: "flex",
          flex: 1,
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <Badge count={5} />
      </div>
    </div>
  );
};

UserItem.defaultProps = {
  name: "user name",
  lastSeen: "3:45 pm",
};
