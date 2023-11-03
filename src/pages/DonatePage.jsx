import React, { useState, useEffect, useCallback } from "react";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDot, faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import httpReqWithToken from "../helpers/httpReqWithToken";
import SideBar from "../components/SideBar/SideBar";
import Button from "../components/Button/Button";
import InputItem from "../components/InputItem/InputItem";

function DonatePage() {
  const {
    register,
    reset,
    formState: { errors },
    setFocus,
    handleSubmit,
  } = useForm();
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    console.log("hello d");
    console.log(data);
    const donate = {
      donarName: data.donarName,
      donationPurpose: data.donatePurpose,
      donationAmount: data.amount,
    };
    try {
      const donateRes = await httpReqWithToken.post("/donations", donate);

      if (donateRes.status === 200) {
        toast(donateRes.data.meg);
        reset();
        navigate("/donation");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    setFocus("donarName");
  }, []);

  return (
    <div className="flex">
      <SideBar />
      <div className="h-screen flex-1  bg-sky-50">
        <div className="overflow-y-scroll h-full p-7">
          <h1 className="text-2xl font-semibold ">Donate Page</h1>
          <div className=" grid grid-cols-1 py-2.5 px-5 my-4">
            <form onSubmit={handleSubmit(onSubmit)}>
              <InputItem
                name="donarName"
                type="text"
                label="Donar Name"
                placeholder="Enter Your Donar Name"
                register={register("donarName", {
                  required: {
                    value: true,
                    message: "Donar Name must be required",
                  },
                })}
              />
              {errors.donarName && (
                <small className="text-red-400 capitalize">
                  {errors.donarName.message}
                </small>
              )}
              <InputItem
                className="mt-6"
                name="donatePurpose"
                type="text"
                label="Donate Purpose"
                placeholder="Enter Your Purpose"
                register={register("donatePurpose", {
                  required: {
                    value: true,
                    message: "purpose must be required",
                  },
                })}
              />
              {errors.donatePurpose && (
                <small className="text-red-400 capitalize">
                  {errors.donatePurpose.message}
                </small>
              )}
              <InputItem
                className="mt-6"
                name="amount"
                type="number"
                label="Amount"
                placeholder="Enter Your amount"
                register={register("amount", {
                  required: {
                    value: true,
                    message: "amount must be required",
                  },
                })}
              />
              {errors.amount && (
                <small className="text-red-400 capitalize">
                  {errors.amount.message}
                </small>
              )}
              <Button type="submit">Donate</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DonatePage;
