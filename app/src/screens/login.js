import React from "react";
import { Input, Button, Form, Row, Col, notification } from "antd";
import Services from "../services/API";
import { useHistory, Link } from "react-router-dom";
import { appController } from "../common/appController";
const { verifyToken } = appController;

const Login = () => {
  const [form] = Form.useForm();
  const history = useHistory();

  React.useEffect(() => {
    verifyToken(history);
  }, []);

  const onSubmit = React.useCallback(async () => {
    try {
      const result = await Services.login({
        user_email: form.getFieldValue("email"),
        user_password: form.getFieldValue("password"),
      });
      localStorage.setItem("user", JSON.stringify(result?.result?.user));
      localStorage.setItem("accessToken", result?.result?.accessToken);
      history.push("/");
    } catch (error) {
      console.log(error.response);
      notification.error({
        message: "Login failed",
        description: error?.response?.message,
      });
    }
  }, []);

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
          Sign in to your account
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
                name="email"
                label=""
                rules={[
                  {
                    type: "email",
                    message: " ",
                  },
                  {
                    required: true,
                    message: " ",
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
                  onSubmit();
                }}
                type="primary"
                size="large"
                block
                style={{
                  borderRadius: 4,
                  background: "linear-gradient(to right, #ef8564, #ea63a2)",
                }}
              >
                Log in
              </Button>
            </Col>
          </Row>
        </Form>
        <div
          style={{
            textAlign: "center",
            display: "block",
            marginTop: 25,
          }}
        >
          <a href="#">Forgot your password?</a>
        </div>
        <div
          style={{
            textAlign: "center",
            display: "block",
            marginTop: 25,
          }}
        >
          <Link to="/sign-up">Create New Account</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
