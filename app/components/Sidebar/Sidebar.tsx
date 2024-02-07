"use client";

import { Listbox, ListboxItem, ListboxSection } from "@nextui-org/react";
import React, { useMemo, useState } from "react";
import { ListboxWrapper } from "./ListboxWrapper";
import Feedicons from "@/app/icons/sidebar/feedicons";
import { PopularIcons } from "@/app/icons/sidebar/Popular";
import SearchIcon from "@/app/icons/sidebar/SearchIcon";
import { useRouter } from "next/navigation";
const Sidebar = () => {
  const items = [
    {
      key: "feed",
      label: "Your Feed",
    },
    {
      key: "popular",
      label: "Most Popular",
    },
    {
      key: "search",
      label: "Search",
    },
  ];

  const [selectedKeys, setSelectedKeys] = useState(new Set(["text"]));

  const selectedValue = useMemo(
    () => Array.from(selectedKeys).join(", "),
    [selectedKeys]
  );

  const rounter = useRouter();
  return (
    // <ListboxWrapper>
    <Listbox
      selectionMode="single"
      selectedKeys={selectedKeys}
      onSelectionChange={setSelectedKeys}
      items={items}
      aria-label="Dynamic Actions"
      className="text-[#a2aec9] min-w-[20%] max-w-[20%] bg-[#0e1217] border-r-[1px] border-[#2d323b]"
      color="secondary"
      variant="solid"
    >
      <ListboxSection showDivider>
        <ListboxItem
          startContent={<Feedicons />}
          key="feed"
          onClick={() => rounter.push("/")}
        >
          My Feed
        </ListboxItem>
      </ListboxSection>

      <ListboxSection showDivider title="Discover">
        <ListboxItem
          startContent={<PopularIcons />}
          key="popular"
          onClick={() => rounter.push("/popular")}
        >
          Popular
        </ListboxItem>
        <ListboxItem
          startContent={<SearchIcon />}
          key="search"
          onClick={() => rounter.push("/search")}
        >
          Search
        </ListboxItem>
      </ListboxSection>
    </Listbox>
    // </ListboxWrapper>
  );
};

export default Sidebar;
