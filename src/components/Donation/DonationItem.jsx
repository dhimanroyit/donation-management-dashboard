import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDot } from "@fortawesome/free-solid-svg-icons";

function DonationItem({ id, donarName, donarAmount, DonationPurpose }) {
  return (
    <div className="bg-white grid grid-cols-4 py-2.5 px-5 my-4 rounded-md shadow-md">
      {/* <div className="mr-3">
        <FontAwesomeIcon icon={faCircleDot} style={{ color: "#756E6E" }} />
      </div> */}
      <div className="grow">{id}</div>
      <div className="grow">{donarName}</div>
      <div className="grow">{DonationPurpose}</div>
      <div className="grow">{donarAmount}</div>
    </div>
  );
}

export default DonationItem;
