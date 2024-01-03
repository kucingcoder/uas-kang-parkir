import React from "react";
import imgLogin from "../../assets/images/login.jpeg";
import { Button, Icon, Input, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import { FaIdCardClip } from "react-icons/fa6";

function Login() {
  return (
    <div className="w-full flex h-screen">
      <div className="w-1/2 bg-sky-600 flex justify-center items-center">
        <img
          src={imgLogin}
          alt="ilustrasi"
          className="w-full h-full bg-cover"
        />
      </div>
      <div className="w-1/2 bg-slate-200 flex justify-center items-center">
        <div className="w-80 p-5 shadow rounded-xl text-center bg-white black items-center flex flex-col">
          <div className="p-5 bg-slate-200 w-20 h-20 flex justify-center items-center rounded-full mb-5">
            <FaIdCardClip className="text-center text-5xl" />
          </div>

          <div className="input-form gap-2 flex flex-col">
            <TextField placeholder="Username" className="w-full" />
            <div className="mb-3 mt-3">
              <TextField
                placeholder="Password"
                className="mt-5 w-full"
                type="password"
              />
            </div>
          </div>
          <Link
            to={"/"}
            className="px-5 py-3 bg-blue-400 text-white rounded-lg mt-5 hover:bg-blue-500"
          >
            Login Sekarang
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
