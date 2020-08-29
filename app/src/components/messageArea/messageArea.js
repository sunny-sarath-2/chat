import React from "react";

import { MessageInbox } from "../message/messageInbox";
import { MessageSent } from "../message/messageSent";
import { MessageAreaHeader } from "./messageAreaHeader";
import { MessageAreaFooter } from "./messageAreaFooter";
import { socketConnect } from "socket.io-react";
import { Avatar } from "../avatar/avatar";
import { Typography } from "antd";
const { Text } = Typography;

class MessageArea extends React.Component {
  constructor(props) {
    super(props);
    let user = JSON.parse(localStorage.getItem("user"));

    this.state = {
      messages: [],
      senderId: user._id,
    };
  }

  componentDidMount() {
    this.props.socket.on("sendChat", (payload) => {
      payload.type = "received";
      let newMessages = this.state.messages;
      newMessages.push(payload);
      console.log(payload, this.state.senderId);
      this.setState({
        messages: newMessages,
      });
    });
  }
  setSentMessage = (text) => {
    if (!!text) {
      console.log("called", text);
      let payload = {
        type: "sent",
        message: text,
        sender: this.state.senderId,
        reciver: this.props?.user?._id,
      };
      this.props.socket.emit("chat", {
        to_id: this.props?.user?._id,
        payload,
      });
      let newMessages = this.state.messages;
      newMessages.push(payload);
      this.setState({
        messages: newMessages,
      });
    }
  };

  render() {
    const { messages } = this.state;
    return (
      <>
        <MessageAreaHeader />
        <div
          style={{
            overflowY: "auto",
            height: "93%",
          }}
        >
          {Array.isArray(messages)
            ? messages.map((message, index) =>
                message?.type == "received" ? (
                  <MessageInbox key={index} message={message.message} />
                ) : message?.type == "sent" ? (
                  <MessageSent key={index} message={message.message} />
                ) : null
              )
            : null}
        </div>
        <MessageAreaFooter
          onSubmit={(text) => {
            this.setSentMessage(text);
          }}
        />
      </>
    );
  }
}

export default socketConnect(MessageArea);
