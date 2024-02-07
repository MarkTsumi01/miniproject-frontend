import React from "react";
import { Input } from "@nextui-org/react";
import Link from "next/link";
import SearchIcon from "../icons/sidebar/SearchIcon";

const SearchPost = () => {
  return (
    <Input
      isClearable
      className="bg-[#1c1f26] rounded-2xl px-4 hover:outline hover:outline-white text-[#a2aec9]"
      startContent={<SearchIcon />}
      type="text"
      placeholder="search post"
    />
  );
};

export default SearchPost;
