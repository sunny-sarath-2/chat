import React from "react";
import { Input } from "antd";
const { Search: AntSearch } = Input;

export const Search = (props) => {
  return (
    <AntSearch
      placeholder="search user"
      style={{
        borderRadius: 5,
        background: "#f9f9f9",
      }}
      size="middle"
      onSearch={(value) => props.setSearchString(value)}
      onChange={(e) => props.setSearchString(e.target.value)}
    />
  );
};
