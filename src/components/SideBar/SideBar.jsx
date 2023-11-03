import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faListCheck,
  faRightFromBracket,
  faAngleLeft,
  faCircleDollarToSlot,
} from "@fortawesome/free-solid-svg-icons";
import Avatar from "../Avatar/Avatar";
import SideBarNavItem from "./SideBarNavItem";
import { useAuthContext } from "../../context/authContext";

function SideBar() {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();
  const { loginUser, setLoginUser } = useAuthContext();

  const navToggle = () => {
    setIsOpen((prevOpen) => !prevOpen);
  };

  const logOut = () => {
    localStorage.removeItem("loginUser");
    setLoginUser(null);
  };

  const sideNav = [
    {
      id: "a1",
      title: "Donation List",
      icon: faListCheck,
      clicked: () => {
        navigate("/donation");
      },
    },
    {
      id: "a2",
      title: "Donate",
      icon: faCircleDollarToSlot,
      clicked: () => {
        navigate("/donate");
      },
    },
    {
      id: "a3",
      title: "Logout",
      icon: faRightFromBracket,
      clicked: () => {
        logOut();
      },
    },
  ];

  return (
    <div
      className={`${
        isOpen ? "w-20 sm:w-72 " : "w-20 "
      } bg-slate-900 h-screen p-5  pt-8 relative duration-300`}
    >
      <div
        onClick={navToggle}
        className="flex items-center justify-center absolute cursor-pointer bg-slate-900 -right-3 top-9 w-7 h-7 border-dark-purpleborder-2 rounded-full"
      >
        <FontAwesomeIcon icon={faAngleLeft} style={{ color: "ffffff" }} />
      </div>

      <div className="flex gap-x-4 items-center">
        <Avatar />
        <h1
          className={`text-white origin-left font-medium text-xl duration-200 hidden ${
            isOpen ? "sm:block" : ""
          }`}
        >
          {/* {loginUser.user.fullName} */}
        </h1>
      </div>

      <nav className="pt-12">
        {sideNav.map(({ id, title, icon, clicked }) => (
          <SideBarNavItem
            key={id}
            title={title}
            icon={icon}
            clicked={clicked}
            open={isOpen}
          />
        ))}
      </nav>
    </div>
  );
}

export default SideBar;
