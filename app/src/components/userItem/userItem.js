import React from "react";
import { Avatar } from "../avatar/avatar";
import { Typography, Badge } from "antd";
import { RightOutlined } from "@ant-design/icons";

const { Text, Title } = Typography;
export const UserItem = ({ name, lastSeen, user, ...props }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        padding: 5,
        cursor: "pointer",
      }}
      onClick={() => {
        props.setCurrentMessage(user);
      }}
    >
      <Avatar name={name} />
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
        {props.count ? <Badge count={props.count} /> : <RightOutlined />}
      </div>
    </div>
  );
};

UserItem.defaultProps = {
  name: "user name",
  lastSeen: "3:45 pm",
  count: 0,
};
