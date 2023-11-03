import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie } from "@fortawesome/free-solid-svg-icons";

export default function Avatar() {
  return (
    <div className="bg-white w-8 h-8 ml-1 rounded-full flex items-center justify-center">
      <FontAwesomeIcon icon={faUserTie} />
    </div>
  );
}
