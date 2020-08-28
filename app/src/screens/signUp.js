import React from "react";
import { Input, Button, Form, Row, Col } from "antd";

const SignUp = () => {
  const [form] = Form.useForm();

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        background: "#F0F2F5",
        padding: "50px 0",
      }}
    >
      <div
        style={{
          minWidth: 300,
          maxWidth: 600,
          width: "100%",
          backgroundColor: "#fff",
          borderRadius: 0,
          padding: "90px 70px",
        }}
      >
        <h2
          style={{
            fontSize: 33,
            color: "rgba(0,0,0,0.85)",
            fontWeight: 400,
            textAlign: "center",
            marginBottom: 40,
          }}
        >
          Create your account
        </h2>
        <Form
          style={{
            width: 370,
            margin: "0 auto",
          }}
          layout="vertical"
          hideRequiredMark
          form={form}
        >
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="userName"
                label=""
                rules={[
                  {
                    type: "string",
                    message: " ",
                    required: true,
                  },
                ]}
              >
                <Input
                  autoFocus={true}
                  placeholder={"Username"}
                  size={"large"}
                  // suffix={<BreezeIcon name='UserOutlined' />}
                  style={{
                    padding: "7px 20px",
                    borderRadius: 4,
                  }}
                />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                name="email"
                label=""
                rules={[
                  {
                    type: "email",
                    message: " ",
                    required: true,
                  },
                ]}
              >
                <Input
                  autoFocus={true}
                  placeholder={"Email"}
                  size={"large"}
                  // suffix={<BreezeIcon name='UserOutlined' />}
                  style={{
                    padding: "7px 20px",
                    borderRadius: 4,
                  }}
                />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                name="password"
                label=""
                rules={[
                  {
                    required: true,
                    message: " ",
                  },
                ]}
              >
                <Input.Password
                  size={"large"}
                  placeholder={"Password"}
                  style={{
                    padding: "7px 20px",
                    borderRadius: 4,
                  }}
                />
              </Form.Item>
            </Col>

            <Col span={24}>
              <Button
                htmlType="submit"
                onClick={(e) => {
                  e.preventDefault();
                }}
                type="primary"
                size="large"
                block
                style={{
                  borderRadius: 4,
                  background: "linear-gradient(to right, #ef8564, #ea63a2)",
                }}
              >
                Sign Up
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
};

export default SignUp;
