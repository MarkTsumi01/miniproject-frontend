"use client";
import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  Divider,
  Avatar,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
import { useDisclosure } from "@nextui-org/react";
import Readpost from "../../icons/Readpost";
import { Skeleton } from "@nextui-org/react";

const postdata = [
  {
    post_id: 1,
    name: "john",
    role: "Developer",
    title: "Basic Typescript",
    img: "https://miro.medium.com/v2/resize:fit:1358/1*moJeTvW97yShLB7URRj5Kg.png",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque inventore nam earum commodi error pariatur est, eveniet dolores fugit reiciendis corporis qui exercitationem labore molestiae iure quia. Eum, dolorum aspernatur",
  },
  {
    post_id: 2,
    name: "thomas",
    role: "Software engineer",
    title: "How to use git",
    img: "https://www.malwarebytes.com/wp-content/uploads/sites/2/2023/01/asset_upload_file97293_255583.jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque inventore nam earum commodi error pariatur est, eveniet dolores fugit reiciendis corporis qui exercitationem labore molestiae iure quia. Eum, dolorum aspernatur",
  },
  {
    post_id: 3,
    name: "karl",
    role: "UX/UI Designer",
    title: "Figma in 10 minutes",
    img: "https://i0.wp.com/wordpress.org/news/files/2021/04/image8.png?resize=678%2C318&ssl=1",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque inventore nam earum commodi error pariatur est, eveniet dolores fugit reiciendis corporis qui exercitationem labore molestiae iure quia. Eum, dolorum aspernatur",
  },
  {
    post_id: 4,
    name: "marktsumi",
    role: "Intern fullstack",
    title: "NextJS (14)",
    img: "https://miro.medium.com/v2/resize:fit:1000/1*KDMx1YspSrBcFJG-NDZgDg.png",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque inventore nam earum commodi error pariatur est, eveniet dolores fugit reiciendis corporis qui exercitationem labore molestiae iure quia. Eum, dolorum aspernatur",
  },
  {
    post_id: 5,
    name: "George",
    role: "Senior Developer",
    title: "Basic TailwindCSS",
    img: "data:image/png;base64,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",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque inventore nam earum commodi error pariatur est, eveniet dolores fugit reiciendis corporis qui exercitationem labore molestiae iure quia. Eum, dolorum aspernatur",
  },
  {
    post_id: 6,
    name: "Alex",
    role: "Blockchain Developer",
    title: "Rainbowkit",
    img: "https://blog.spruceid.com/content/images/size/w1200/2023/05/SSXRainbowkit.png",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque inventore nam earum commodi error pariatur est, eveniet dolores fugit reiciendis corporis qui exercitationem labore molestiae iure quia. Eum, dolorum aspernatur",
  },
  {
    post_id: 1,
    name: "john",
    role: "Developer",
    title: "Basic Typescript",
    img: "https://miro.medium.com/v2/resize:fit:1358/1*moJeTvW97yShLB7URRj5Kg.png",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque inventore nam earum commodi error pariatur est, eveniet dolores fugit reiciendis corporis qui exercitationem labore molestiae iure quia. Eum, dolorum aspernatur",
  },
  {
    post_id: 2,
    name: "thomas",
    role: "Software engineer",
    title: "How to use git",
    img: "https://www.malwarebytes.com/wp-content/uploads/sites/2/2023/01/asset_upload_file97293_255583.jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque inventore nam earum commodi error pariatur est, eveniet dolores fugit reiciendis corporis qui exercitationem labore molestiae iure quia. Eum, dolorum aspernatur",
  },
  {
    post_id: 3,
    name: "karl",
    role: "UX/UI Designer",
    title: "Figma in 10 minutes",
    img: "https://i0.wp.com/wordpress.org/news/files/2021/04/image8.png?resize=678%2C318&ssl=1",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque inventore nam earum commodi error pariatur est, eveniet dolores fugit reiciendis corporis qui exercitationem labore molestiae iure quia. Eum, dolorum aspernatur",
  },
  {
    post_id: 4,
    name: "marktsumi",
    role: "Intern fullstack",
    title: "NextJS (14)",
    img: "https://miro.medium.com/v2/resize:fit:1000/1*KDMx1YspSrBcFJG-NDZgDg.png",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque inventore nam earum commodi error pariatur est, eveniet dolores fugit reiciendis corporis qui exercitationem labore molestiae iure quia. Eum, dolorum aspernatur",
  },
  {
    post_id: 5,
    name: "George",
    role: "Senior Developer",
    title: "Basic TailwindCSS",
    img: "data:image/png;base64,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",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque inventore nam earum commodi error pariatur est, eveniet dolores fugit reiciendis corporis qui exercitationem labore molestiae iure quia. Eum, dolorum aspernatur",
  },
  {
    post_id: 6,
    name: "Alex",
    role: "Blockchain Developer",
    title: "Rainbowkit",
    img: "https://blog.spruceid.com/content/images/size/w1200/2023/05/SSXRainbowkit.png",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque inventore nam earum commodi error pariatur est, eveniet dolores fugit reiciendis corporis qui exercitationem labore molestiae iure quia. Eum, dolorum aspernatur",
  },
];

const CardPost = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [loading, Setloading] = useState(true);

  return (
    <div className="grid grid-cols-3 p-10 rounded-md gap-16 text-white">
      {postdata.map((post, index) => (
        <>
          <Card
            isPressable
            className="bg-[#1c1f26] rounded-md border-[1px] shadow-sm border-[#2d323b] text-white"
            key={index}
            onPress={onOpen}
          >
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <Skeleton className="rounded-lg" isLoaded={loading}>
                <div className="flex gap-4 justify-center items-center parent">
                  <Avatar
                    color="primary"
                    src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                  />
                  <div className="flex flex-col text-left">
                    <strong className="uppercase text-tiny text-foreground">
                      {post.name}
                    </strong>
                    <span className="text-tiny text-foreground">
                      {post.role}
                    </span>
                  </div>
                </div>
              </Skeleton>

              {/* <small className="text-default-500">{post.time}</small> */}
              <Divider className="my-2 " />
              <Skeleton className="rounded-lg" isLoaded={loading}>
                <h4 className="font-bold text-large">{post.title}</h4>
              </Skeleton>

              {/* <Divider className="my-2 " /> */}
            </CardHeader>
            <CardBody className="overflow-visible">
              <Skeleton className="rounded-lg" isLoaded={loading}>
                <Image
                  isZoomed
                  alt="Card background"
                  className="object-cover rounded-xl"
                  src={post.img}
                  width={270}
                  height={300}
                />
              </Skeleton>
            </CardBody>
          </Card>

          {/* <Modal
            key={index}
            backdrop="blur"
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            className="bg-[#1c1f26]"
          >
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1">
                    {post.title}
                  </ModalHeader>
                  <ModalBody>
                    <p>{post.content}</p>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="danger" variant="light" onPress={onClose}>
                      Close
                    </Button>
                    <Button color="primary" onPress={onClose}>
                      Read Fullpost
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal> */}
        </>
      ))}
    </div>
  );
};

export default CardPost;
