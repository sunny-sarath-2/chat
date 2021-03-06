import React from "react";
import { Layout, UserList, MessageArea } from "../components";
import { Row, Col, notification } from "antd";
import Services from "../services/API";
import { appController } from "../common/appController";
import { useHistory } from "react-router-dom";
import { socketConnect } from "socket.io-react";

const { verifyToken } = appController;

const Chat = (props) => {
  const history = useHistory();
  const [users, setUsers] = React.useState([]);
  const [currentUser, setCurrentUser] = React.useState(null);
  const [searchString, setSearchString] = React.useState("");

  React.useEffect(() => {
    let user = JSON.parse(localStorage.getItem("user"));
    props.socket.emit("setUser", user?._id);
  }, []);

  React.useEffect(() => {
    verifyToken(history);
  }, []);

  React.useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = React.useCallback(async () => {
    try {
      let result = await Services.getAllUsers();
      setUsers(result.result);
    } catch (error) {
      notification.error({
        message: "Something Went Wrong",
        description: error?.response?.message,
      });
    }
  }, [users]);

  React.useEffect(() => {
    if (searchString != "") {
      searchUser();
    } else {
      getAllUsers();
    }
  }, [searchString]);

  const searchUser = async () => {
    try {
      let result = await Services.searchUser(searchString);
      if (!!result?.result?.length) {
        setUsers(result.result);
      }
    } catch (error) {
      notification.error({
        message: "Something Went Wrong",
        description: error?.response?.message,
      });
    }
  };

  const deleteChat = React.useCallback(async () => {
    try {
      let user = JSON.parse(localStorage.getItem("user"));
      let result = await Services.deleteMessageByUser({ sender_id: user._id });
      if (result.status == 200) {
        setCurrentUser(null);
        notification.success({
          message: "Chat Deleted Successfully",
          description: `${result.result.n} conversations deleted`,
        });
      }
    } catch (error) {
      notification.error({
        message: "Something Went Wrong",
        description: error?.response?.message,
      });
    }
  }, []);

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
            <UserList
              users={users}
              setCurrentMessage={(user) => {
                setCurrentUser(user);
              }}
              setSearchString={(search) => {
                setSearchString(search);
              }}
              deleteChat={deleteChat}
            />
          </Col>
          <Col
            span={15}
            style={{
              height: "calc(100vh - 145px)",
            }}
          >
            {currentUser ? <MessageArea user={currentUser} /> : null}
          </Col>
        </Row>
      </div>
    </Layout>
  );
};

export default socketConnect(Chat);
