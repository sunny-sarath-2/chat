import React from "react";
import { Search } from "../search/search";
import { Button } from "../button/button";
import { UserItem } from "../userItem/userItem";

export const UserList = ({ users, ...props }) => {
  return (
    <>
      <div style={{ display: "flex", height: 40, alignItems: "center" }}>
        <Search setSearchString={props.setSearchString} />
        <Button />
      </div>
      <div
        style={{
          overflowY: "auto",
          height: "100%",
        }}
      >
        {users.map((user, index) => (
          <UserItem
            key={index}
            setCurrentMessage={props.setCurrentMessage}
            name={user.user_name}
            lastSeen={user.last_access_date}
            user={user}
          />
        ))}
      </div>
    </>
  );
};
