import React from "react";
import { Input } from "@nextui-org/react";
import Plusicon from "../icons/Plusicon";
import Link from "next/link";

const Createpost = () => {
  return (
    <Link href={"/create-post"}>
      <Input
        isClearable
        className="bg-[#1c1f26] rounded-2xl px-4 hover:outline hover:outline-white text-[#a2aec9]"
        startContent={<Plusicon />}
        type="text"
        placeholder="create post"
      />
    </Link>
  );
};

export default Createpost;
