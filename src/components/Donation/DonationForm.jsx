import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function DonationForm() {
  return (
    <form className="bg-white flex py-2.5 px-5 my-4 rounded-md shadow-sm">
      <input
        type="text"
        className="w-full focus:outline-none"
        placeholder="Write Your Task"
      />
      <button type="submit" className="w-7 ml-3">
        <FontAwesomeIcon icon={faPlus} size="lg" />
      </button>
    </form>
  );
}

export default DonationForm;
