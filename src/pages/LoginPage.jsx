import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import httpReq from "../helpers/httpReq";
import Button from "../components/Button/Button";
import InputItem from "../components/InputItem/InputItem";
import { useAuthContext } from "../context/authContext";

function LoginPage() {
  const { setLoginUser } = useAuthContext();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const navigate = useNavigate();
  const onSubmit = async (data) => {
    const { email, password } = data;
    const user = {
      email,
      password,
    };
    try {
      const userRes = await httpReq.post("/login", user);
      console.log(userRes);
      const { status, data } = userRes;
      if (status === 200) {
        toast(data.meg);
        setLoginUser(data.token);
        localStorage.setItem("loginUser", JSON.stringify(data.token));
        navigate("/donation");
      }
    } catch (err) {
      toast(err.response.data.message);
    }
  };

  return (
    <div className="bg-sky-50 h-screen w-full">
      <div className="w-full sm:w-96 mx-auto p-4 pt-7">
        <h1 className="font-medium text-3xl">Login</h1>
        <div className="my-6">
          <span>Don’t have an account?</span>
          <Link to="/signup" className="underline ml-3">
            Sign Up
          </Link>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputItem
            name="email"
            type="email"
            label="email"
            placeholder="Enter Your Email"
            register={register("email", {
              required: { value: true, message: "email must be required" },
              pattern: {
                value:
                  /^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
                message: "Invalid email",
              },
            })}
          />
          {errors.email && (
            <small className="text-red-400 capitalize">
              {errors.email.message}
            </small>
          )}
          <InputItem
            className="mt-6"
            name="password"
            type="password"
            label="password"
            placeholder="Enter Your Password"
            register={register("password", {
              required: { value: true, message: "password must be required" },
            })}
          />
          {errors.password && (
            <small className="text-red-400 capitalize">
              {errors.password.message}
            </small>
          )}
          <Button>Login</Button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
