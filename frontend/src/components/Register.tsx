import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from "react-router";

import Input from './Input';
import useAuth from "../hooks/useAuth";

import { NAME_REG, PASSWORD_REG, EMAIL_REG } from '../constant/index';

type Props = {};

const Register = (props: Props) => {
  const navigate = useNavigate();
  const { auth, setAuth }: any = useAuth();
  const [regInfo, setRegInfo] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
  });

  const [regValidInfo, setRegValidInfo] = useState({
    email: true,
    firstName: true,
    lastName: true,
    password: true,
    confirmPassword: true,
  });

  const [isRegFailed, setIsRegFailed] = useState(false);

  useEffect (() => {
    if (auth?.accessToken) {
      navigate("/countries");
    }
  }, [auth]);

  const isRegInfoValid = () => {
    const validInfo = {
      email: EMAIL_REG.test(regInfo.email),
      firstName: NAME_REG.test(regInfo.firstName),
      lastName: NAME_REG.test(regInfo.lastName),
      password: PASSWORD_REG.test(regInfo.password),
      confirmPassword: PASSWORD_REG.test(regInfo.confirmPassword) && regInfo.password === regInfo.confirmPassword,
    }
    const isValid = Object.values(validInfo).every(value => !!value);
    setRegValidInfo(validInfo);
    return isValid;
  }

  const handleRegister = async () => {
    if (!isRegInfoValid()) {
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/register',
      JSON.stringify({
        email: regInfo.email,
        firstName: regInfo.firstName,
        lastName: regInfo.lastName,
        password: regInfo.password,
      }), 
      {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      });
      if (response.data) {
        const { accessToken } = response.data;
        setAuth({
          accessToken,
          email: regInfo.email
        });
      } else {
        throw "No server response";
      }
    } catch (err) {
      console.error('Registration Failed')
      console.error(err)
      setAuth({
        accessToken: null,
        email: regInfo.email,
      });
      setIsRegFailed(true);
    }
  } 

  const onChange = (e: React.ChangeEvent<HTMLInputElement>, reg: RegExp, shouldCheckPwdMatch: boolean = false) => {
    let isValid = reg.test(e.target.value);
    if (shouldCheckPwdMatch) {
      isValid &&= e.target.value === regInfo.password;
    }
    setRegInfo({
      ...regInfo,
      [e.target.name]: e.target.value,
    });
    setRegValidInfo({
      ...regValidInfo,
      [e.target.name]: isValid,
    });
  } 

  return (
    <div className="w-full md:w-1/2 p-6">
      <div className="md:max-w-md">
        <h2 className="mb-5 font-heading font-bold text-primary text-4xl sm:text-5xl">
          Register
        </h2>
        {
          isRegFailed ? (
            <p className="mb-2.5 py-2 font-medium text-base text-red-300">
                Register failed, please try again
            </p>
          ) : null
        }
        <div className="flex flex-wrap -m-2 mb-2">
          <Input
            isValid={regValidInfo.email}
            text="Email address"
            handleOnChange={(e) => onChange(e, EMAIL_REG)}
            placeholder="i.e. john@example.com"
            name="email"
            errorMessage="Please enter a valid Email address"
          />
           <Input
            isValid={regValidInfo.firstName}
            text="First Name"
            handleOnChange={(e) => onChange(e, NAME_REG)}
            placeholder="i.e. John"
            name="firstName"
            errorMessage="First name is required and can only be letters"
          />
          <Input
            isValid={regValidInfo.lastName}
            text="Last Name"
            handleOnChange={(e) => onChange(e, NAME_REG)}
            placeholder="i.e. Doe"
            name="lastName"
            errorMessage="Last name is required and can only be letters"
          />
          <Input
            isValid={regValidInfo.password}
            text="Password"
            handleOnChange={(e) => onChange(e, PASSWORD_REG)}
            placeholder="********"
            name="password"
            type="password"
            errorMessage="A valid password should be 6 to 16 digits long, contains letters, numbers and special characters '!@#$%^&*'"
          />
          <Input
            isValid={regValidInfo.confirmPassword}
            text="Confirm Password"
            handleOnChange={(e) => onChange(e, PASSWORD_REG, true)}
            placeholder="********"
            name="confirmPassword"
            type="password"
            errorMessage="Password does not required"
          />
        </div>

        <div className="group relative md:max-w-max mb-4">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-blue opacity-0 group-hover:opacity-50 rounded-full transition ease-out duration-300" />
          <button onClick={handleRegister} className="p-1 w-full font-heading font-semibold text-xs text-white  bg-black uppercase tracking-px overflow-hidden rounded-full mt-2">
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

export default Register;
