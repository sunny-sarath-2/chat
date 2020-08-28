import React from "react";
import { Search } from "../search/search";
import { Button } from "../button/button";
import { UserItem } from "../userItem/userItem";

export const UserList = () => {
  return (
    <>
      <div style={{ display: "flex", height: 40, alignItems: "center" }}>
        <Search />
        <Button />
      </div>
      <div
        style={{
          overflowY: "auto",
          height: "100%",
        }}
      >
        <UserItem />
        <UserItem />
        <UserItem />
        <UserItem />
        <UserItem />
        <UserItem />
        <UserItem />
        <UserItem />
        <UserItem />
        <UserItem />
        <UserItem />
        <UserItem />
        <UserItem />
        <UserItem />
      </div>
    </>
  );
};
