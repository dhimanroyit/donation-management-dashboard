import React, { useState, useEffect, useCallback } from "react";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDot, faPlus } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import httpReqWithToken from "../helpers/httpReqWithToken";
import SideBar from "../components/SideBar/SideBar";
import DonationItem from "../components/Donation/DonationItem";

function DonationPage() {
  const [tasks, setTasks] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);
  const {
    register,
    reset,
    formState: { errors },
    setFocus,
    handleSubmit,
  } = useForm();

  const toggleUpdate = () => {
    setIsUpdate((prevUpdate) => !prevUpdate);
  };

  const onSubmit = async (data) => {
    const task = { title: data.title };
    try {
      const taskRes = await httpReqWithToken.post("/tasks", task);
      const { statusCode, success, message } = taskRes.data;
      if (statusCode === 201 && success === true) {
        toast(message);
        reset();
        toggleUpdate();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const deleteTaskHandler = async (id) => {
    try {
      const taskRes = await httpReqWithToken.delete(`/tasks/${id}`);
      const { statusCode, success, message } = taskRes.data;
      if (statusCode === 200 && success === true) {
        toast(message);
        toggleUpdate();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const getTaskHandler = async () => {
    try {
      const data = await httpReqWithToken.get("/donations");
      setTasks(data.data);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  console.log(tasks);

  useEffect(() => {
    getTaskHandler();
  }, []);

  useEffect(() => {
    setFocus("title");
  }, []);

  return (
    <div className="flex">
      <SideBar />
      <div className="h-screen flex-1  bg-sky-50">
        <div className="overflow-y-scroll h-full p-7">
          <h1 className="text-2xl font-semibold ">Home Page</h1>
          <div className="bg-white grid grid-cols-4 py-2.5 px-5 my-4 rounded-md shadow-md">
            {/* <div className="mr-3">
              <FontAwesomeIcon
                icon={faCircleDot}
                style={{ color: "#756E6E" }}
              />
            </div> */}
            <div className="grow">Id</div>
            <div className="grow">Donar Name</div>
            <div className="grow">Purpose</div>
            <div className="grow">Amount</div>
          </div>
          {tasks?.length > 0 ? (
            tasks.map((donation) => (
              <DonationItem
                key={donation.ID}
                id={donation.ID}
                donarName={donation.DonarName}
                donarAmount={donation.DonationAmount}
                DonationPurpose={donation.DonationPurpose}
              />
            ))
          ) : (
            <h2 className="mt-7">Donation list Empty</h2>
          )}
        </div>
      </div>
    </div>
  );
}

export default DonationPage;
