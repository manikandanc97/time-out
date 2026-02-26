"use client";

import { usePathname } from "next/navigation";
import React from "react";
import Button from "../ui/Button";
import { Bell, Moon, Settings, User } from "lucide-react";

const Topbar = () => {
  const pathname = usePathname();

  const getTitle = () => {
    if (pathname === "/dashboard") {
      return "Dashboard";
    }
    if (pathname === "/leaves") {
      return "My Leaves";
    }
    if (pathname === "/apply") {
      return "Apply Leave";
    }
    if (pathname === "/policy") {
      return "Leave Policy";
    }
    return "Dashboard";
  };

  return (
    <div className="flex justify-between items-center bg-white shadow-md p-4">
      <div>
        <h1 className="font-bold text-2xl">{getTitle()}</h1>
      </div>
      <div className="flex gap-2">
        <Button className="bg-transparent! hover:bg-gray-200 p-2 rounded-full">
          <Moon size={20} color="gray" />
        </Button>
        <Button className="bg-transparent! hover:bg-gray-200 ml-2 p-2 rounded-full">
          <Bell size={20} color="gray" />
        </Button>
        <Button className="bg-transparent! hover:bg-gray-200 ml-2 p-2 rounded-full">
          <Settings size={20} color="gray" />
        </Button>
        <Button className="hover:bg-gray-200 ml-2 p-2 rounded-full">
          <User size={20} />
        </Button>
      </div>
    </div>
  );
};

export default Topbar;
