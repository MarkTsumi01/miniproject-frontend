"use client";

import React from "react";
import { Button, Divider, Input, Textarea, Tabs, Tab } from "@nextui-org/react";

export const Editpost = () => {
  return (
    <>
      <div className="border-[1px] border-[#2d323b] w-full p-4 rounded-md flex  flex-col">
        <h1 className="p-4">Create Post</h1>
        <Divider />
        <Tabs
          aria-label="Options"
          className="p-4"
          variant="solid"
          size="md"
          color="secondary"
        >
          <Tab key="text" title="Text" className="h-full">
            <Textarea
              placeholder="type your text..."
              className="border-[1px] border-[#2d323b] h-full"
            />
          </Tab>
          <Tab key="image" title="Image">
            <Textarea
              placeholder="Insert your image..."
              className="border-[1px] border-[#2d323b] h-full"
            />
          </Tab>
        </Tabs>
        <div className="flex justify-end gap-2">
          <Button color="success">Save</Button>
          <Button color="danger">Cancel</Button>
        </div>
      </div>
    </>
  );
};
