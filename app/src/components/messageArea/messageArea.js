import React from "react";

import { MessageInbox } from "../message/messageInbox";
import { MessageSent } from "../message/messageSent";
import { MessageAreaHeader } from "./messageAreaHeader";
import { MessageAreaFooter } from "./messageAreaFooter";
import { socketConnect } from "socket.io-react";
import Services from "../../services/API";
import { notification } from "antd";
class MessageArea extends React.Component {
  constructor(props) {
    super(props);
    let user = JSON.parse(localStorage.getItem("user"));

    this.state = {
      messages: [],
      senderId: user._id,
      senderName: user.user_name,
    };
    this.messagesEnd = React.createRef();
    this.getMessages = this.getMessages.bind(this);
  }

  componentDidMount() {
    this.getMessages(this.props?.user?._id);

    this.props.socket.on("sendChat", (payload) => {
      let newMessages = this.state.messages;
      newMessages.push(payload);
      this.setState({
        messages: newMessages,
      });
      this.scrollToBottom();
    });
    this.scrollToBottom();
  }

  UNSAFE_componentWillUpdate(newProps) {
    if (this.props?.user?._id !== newProps?.user?._id) {
      this.getMessages(newProps?.user?._id);
      this.scrollToBottom();
    }
  }

  getMessages = async (reciver_id) => {
    try {
      let result = await Services.getMessageByUsers({
        reciver_id,
        sender_id: this.state.senderId,
      });
      this.setState({
        messages: result.result,
      });
    } catch (error) {
      notification.error({
        message: "Something Went Wrong",
        description: error?.response?.message,
      });
    }
  };

  setSentMessage = (text) => {
    if (!!text) {
      let payload = {
        type: "sent",
        message: text,
        sender_id: this.state.senderId,
        reciver_id: this.props?.user?._id,
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
      this.scrollToBottom();
    }
  };

  scrollToBottom = () => {
    setTimeout(() => {
      this.messagesEnd.scrollIntoView({ behavior: "smooth" });
    }, 200);
  };

  render() {
    const { messages } = this.state;
    return (
      <>
        <MessageAreaHeader name={this.props?.user?.user_name} />
        <div
          style={{
            overflowY: "auto",
            height: "93%",
          }}
        >
          {Array.isArray(messages)
            ? messages.map((message, index) =>
                message?.reciver_id == this.state.senderId ? (
                  <MessageInbox
                    key={index}
                    message={message.message}
                    name={this.props?.user?.user_name}
                  />
                ) : message?.sender_id == this.state.senderId ? (
                  <MessageSent
                    key={index}
                    message={message.message}
                    name={this.state.senderName}
                  />
                ) : null
              )
            : null}
          <div
            ref={(el) => {
              this.messagesEnd = el;
            }}
          ></div>
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
