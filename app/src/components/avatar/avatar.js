import React from "react";
import { Avatar as AntAvatar } from "antd";

export const Avatar = ({ name }) => {
  const [avatarName, setName] = React.useState("");
  const [avatarColorCode, setAvatarColorCode] = React.useState();
  const stringToHslColor = (str, s, l) => {
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }

    var h = hash % 360;
    return "hsl(" + h + ", " + s + "%, " + l + "%)";
  };
  React.useEffect(() => {
    setAvatarColorCode(stringToHslColor(name, 50, 80));
    let names = name.split(" ");
    let nameing = "";
    for (const iterator of names) {
      nameing += iterator[0];
      setName(nameing);
    }
  }, [name]);
  return (
    <AntAvatar
      size={42}
      style={{ color: "#fff", backgroundColor: avatarColorCode }}
    >
      {avatarName.toUpperCase()}
    </AntAvatar>
  );
};

Avatar.defaultProps = {
  name: "ui",
};
