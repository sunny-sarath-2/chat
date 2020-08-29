import React from "react";
import { Button as AntButton } from "antd";

export const Button = ({ text, onClick }) => {
  return (
    <AntButton
      style={{
        marginLeft: 5,
        background: "linear-gradient(to right,#ef8564, #ea63a2)",
        color: "#fff",
      }}
      onClick={onClick}
    >
      {text}
    </AntButton>
  );
};

Button.defaultProps = {
  text: "Invite user",
};
