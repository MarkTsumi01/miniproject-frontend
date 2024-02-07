"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  Input,
  Avatar,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  User,
} from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Nav() {
  const rounter = useRouter();
  return (
    <Navbar
      position="sticky"
      className=" bg-[#0e1217] border-b-[1px] border-[#2d323b]"
    >
      <NavbarBrand>
        <Link href={"/"}>
          {/* <AcmeLogo /> */}
          <p className="font-bold text-[#a2aec9]">Blackdit</p>
        </Link>
      </NavbarBrand>
      <NavbarContent
        className="hidden sm:flex gap-4"
        justify="center"
      ></NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Button
            onClick={() => rounter.push("/login")}
            className="border-[1px] border-[#a2aec9] text-foreground"
            variant="none"
          >
            Login
          </Button>
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <div className="flex items-center gap-4">
            <Dropdown
              placement="bottom-start"
              backdrop="blur"
              className="bg-[#1c1f26]"
            >
              <DropdownTrigger>
                <User
                  as="button"
                  avatarProps={{
                    // isBordered: true,
                    src: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
                  }}
                  className="transition-transform"
                  description="@marktsumi"
                  name="Kanravee"
                />
              </DropdownTrigger>
              <DropdownMenu
                aria-label="User Actions"
                variant="solid"
                color="secondary"
              >
                <DropdownItem key="profile" className="h-14 gap-2">
                  <p className="font-bold">Signed in as</p>
                  <p className="font-bold">@tonyreichert</p>
                </DropdownItem>
                <DropdownItem key="profile">Profile</DropdownItem>

                <DropdownItem key="logout" color="danger">
                  Log Out
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
