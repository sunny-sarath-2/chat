import React from "react";
import {
  Layout,
  UserList,
  Avatar,
  MessageSent,
  MessageInbox,
} from "../components";
import { Row, Col, Typography, Input } from "antd";
import { SendOutlined } from "@ant-design/icons";
import Services from "../services/API";

const { Title, Text } = Typography;
const Chat = () => {
  const test = async () => {
    await Services.test();
  };
  test();
  return (
    <Layout>
      <div style={{ height: "inherit" }}>
        <Row style={{ margin: "0px 10px" }}>
          <Col
            span={9}
            style={{
              height: "calc(100vh - 120px)",
            }}
          >
            <UserList />
          </Col>
          <Col
            span={15}
            style={{
              height: "calc(100vh - 145px)",
            }}
          >
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
                  user name
                </Title>
                <Text type={"secondary"}>online </Text>
              </div>
            </div>
            <div
              style={{
                overflowY: "auto",
                height: "93%",
              }}
            >
              <MessageInbox />
              <MessageSent />
              <MessageInbox />
              <MessageSent />
              <MessageInbox />
              <MessageSent />
              <MessageInbox />
              <MessageSent />
              <MessageInbox />
              <MessageSent />
              <MessageInbox />
              <MessageSent />
              <MessageInbox />
              <MessageSent />
              <MessageInbox />
              <MessageSent />
              <MessageInbox />
              <MessageSent />
              <MessageInbox />
              <MessageSent />
            </div>
            <div style={{ position: "relative" }}>
              <Input
                style={{
                  position: "absolute",
                  bottom: -35,
                  background: "#f9f9f9",
                }}
                suffix={<SendOutlined />}
              />
            </div>
          </Col>
        </Row>
      </div>
    </Layout>
  );
};

export default Chat;
