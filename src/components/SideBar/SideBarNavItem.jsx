import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SideBarNavItem({ title, icon, clicked, open }) {
  return (
    <div
      onClick={clicked}
      className="flex rounded-md p-2 pt-4 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4"
    >
      <FontAwesomeIcon icon={icon} size="lg" style={{ color: "white" }} />
      <span className={`hidden ${open ? "sm:block" : ""}`}>{title}</span>
    </div>
  );
}

export default SideBarNavItem;
