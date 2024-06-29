import React from "react";
import Header from "./Header";
import { useState } from "react";

const Login = () => {

const [isSignInForm, setIsSignInForm] = useState(true);

const toggleSignInForm = () =>{
    setIsSignInForm(!isSignInForm);
}

  return (
    <div>
      <Header />
      <div className="absolute">
        <img className="brightness-50"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/335ddde7-3955-499c-b4cc-ca2eb7e1ae71/a7d20bc1-831c-4f9d-8153-11bdf7a08d23/IN-en-20240624-POP_SIGNUP_TWO_WEEKS-perspective_WEB_13cda806-d858-493e-b4aa-f2792ff965dc_small.jpg"
          alt="bg-img"
        />
      </div>

      <form className="w-3/12 absolute p-12 bg-black mt-24 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-75">
        <h1 className="text-3xl font-bold pt-3 pb-2 ">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && <input
          className="w-full p-4 my-2 bg-black rounded-lg bg-opacity-75 border border-gray-400"
          type="text"
          placeholder="Full Name"
        />}

        <input
          className="w-full p-4 my-2 bg-black rounded-lg bg-opacity-75 border border-gray-400"
          type="email"
          placeholder="Email or mobile number"
        />{" "}
        <input
          className="w-full p-4 my-2 bg-black rounded-lg bg-opacity-75 border border-gray-400"
          type="password"
          placeholder="Password"
        />
        <button className="w-full p-4 my-2 bg-red-700 rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-center text-gray-500">OR</p>
        <p className="text-center font-bold p-3">Forgot Password?</p>
        {isSignInForm && <input type="checkbox" name="remember" className="bg-white" /> }
        {isSignInForm && <label for="remember" className="mx-2">
          Remember Me
        </label> }
        <p className="text-gray-400 font-medium my-2">
          {isSignInForm ? "New to Netfilx?" : "Already a User : "}{" "}
          <span className="text-white font-bold cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? " Sign up now" : "Sign In"}</span>
        </p>
        <p className=" text-xs mt-3 text-gray-400">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
        </p>
      </form>
    </div>
  );
};

export default Login;
