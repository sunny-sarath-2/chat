import React from "react";
import { Input } from "antd";
const { Search: AntSearch } = Input;

export const Search = () => {
  return (
    <AntSearch
      placeholder="search user"
      style={{
        borderRadius: 5,
        background: "#f9f9f9",
      }}
      size="middle"
      onSearch={(value) => console.log(value)}
    />
  );
};
