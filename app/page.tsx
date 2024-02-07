import Createpost from "./components/Createpost";
import CardPost from "./components/Cardpost/CardPost";
import { Divider, ScrollShadow } from "@nextui-org/react";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center px-14">
        <div className="container max-w-4xl my-5 p-4">
          <Createpost />
        </div>
        <Divider />
        <div className="container max-w-4xl  ">
          <ScrollShadow>
            <CardPost />
          </ScrollShadow>
        </div>
      </div>
    </>
  );
}
