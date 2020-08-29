import React from "react";
import { SendOutlined } from "@ant-design/icons";
import { Input } from "antd";
export const MessageAreaFooter = (props) => {
  const [text, setText] = React.useState("");
  return (
    <div style={{ position: "relative" }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.onSubmit(text);
          setText("");
        }}
      >
        <Input
          style={{
            position: "absolute",
            bottom: -35,
            background: "#f9f9f9",
          }}
          suffix={
            <SendOutlined
              onClick={() => {
                props.onSubmit(text);
                setText("");
              }}
            />
          }
          onChange={(e) => {
            setText(e.target.value);
          }}
          value={text}
        />
      </form>
    </div>
  );
};
