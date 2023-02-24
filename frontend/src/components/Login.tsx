import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import Input from "./Input";
import axios from "../api/axios";
import { PASSWORD_REG, EMAIL_REG } from "../constant/index";
import useAuth from "../hooks/useAuth";

type Props = {};

const Login = (props: Props) => {
  const navigate = useNavigate();
  const { auth, setAuth }: any = useAuth();
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const [loginValidInfo, setLoginValidInfo] = useState({
    email: true,
    password: true,
  });

  const [isLoginFailed, setIsLoginFailed] = useState(false);

  useEffect (() => {
    if (auth?.accessToken) {
      navigate("/countries");
    }
  }, [auth]);

  const isLoginInfoValid = () => {
    const validInfo = {
      email: EMAIL_REG.test(loginInfo.email),
      password: PASSWORD_REG.test(loginInfo.password),
    }
    const isValid = Object.values(validInfo).every(value => !!value);
    setLoginValidInfo(validInfo);
    return isValid;
  }

  const handleLogin = async () => {
    if (!isLoginInfoValid()) {
      return;
    }

    try {
      const response = await axios.post("/login",
        JSON.stringify({
          email: loginInfo.email,
          password: loginInfo.password,
        }),
      );
      if (response.data) {
        const { accessToken } = response.data;
        setAuth({
          accessToken,
          email: loginInfo.email
        });
      } else {
        throw "No server response";
      }
    } catch (err) {
      console.error("Registration Failed")
      console.error(err);
      setAuth({
        accessToken: null,
        email: loginInfo.email
      });
      setIsLoginFailed(true);
    }
  } 

  const onChange = (e: React.ChangeEvent<HTMLInputElement>, reg: RegExp) => {
    setLoginInfo({
      ...loginInfo,
      [e.target.name]: e.target.value,
    });
    setLoginValidInfo({
      ...loginValidInfo,
      [e.target.name]: reg.test(e.target.value),
    });
  } 

  return (
    <div className="w-full md:w-1/2 p-6">
      <div className="md:max-w-md">
        <h2 className="mb-5 font-heading font-bold text-primary text-4xl sm:text-5xl">
          Login
        </h2>
        {
          isLoginFailed ? (
            <p className="mb-2.5 py-2 font-medium text-base text-red-300">
                Login failed, please try again
            </p>
          ) : null
        }
        <div className="flex flex-wrap -m-2 mb-2">
          <Input
            isValid={loginValidInfo.email}
            text="Email address"
            handleOnChange={(e) => onChange(e, EMAIL_REG)}
            placeholder="i.e. john@example.com"
            name="email"
            errorMessage="Please enter a valid Email address"
          />
          <Input
            isValid={loginValidInfo.password}
            text="Password"
            handleOnChange={(e) => onChange(e, PASSWORD_REG)}
            placeholder="********"
            name="password"
            type="password"
            errorMessage="A valid password should be 6 to 16 digits long, contains letters, numbers and special characters '!@#$%^&*'"
          />
        </div>

        <div className="group relative md:max-w-max mb-4">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-blue opacity-0 group-hover:opacity-50 rounded-full transition ease-out duration-300" />
          <button onClick={handleLogin} className="p-1 w-full font-heading font-semibold text-xs text-white  bg-black uppercase tracking-px overflow-hidden rounded-full mt-2">
            <div className="relative py-5 px-14 bg-gradient-blue overflow-hidden rounded-full">
              <div className="absolute top-0 left-0 transform -translate-y-full group-hover:-translate-y-0 h-full w-full bg-gray-700 transition ease-in-out duration-500" />
              <p className="relative z-10 group-hover:text-gray-100">Login</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
