import React from "react";
import CardPost from "../components/Cardpost/CardPost";
import { Divider } from "@nextui-org/react";
import SearchPost from "../components/Searchpost";

const page = () => {
  return (
    <div className="flex flex-col justify-center items-center px-14">
      <div className="container max-w-4xl my-5 p-4">
        <SearchPost />
      </div>
      <Divider />
      <div className="container max-w-4xl  ">
        <CardPost />
      </div>
    </div>
  );
};

export default page;
