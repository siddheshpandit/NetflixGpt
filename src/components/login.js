import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleForm=()=>{
    setIsSignInForm(!isSignInForm);
  }
  return (
    <div>
      <Header />
      <div className="bg-gradient-to-b from-black absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt=""
        />
      </div>
      <div>
        <form className="absolute w-3/12 mt-24 mx-auto right-0 left-0 p-8 bg-black opacity-85 text-white">
          <h1 className="font-bold text-3xl mb-4 pb-2">{isSignInForm?'Sign In':'Sign Up'}</h1>
          {isSignInForm &&(<><input
            type="text"
            placeholder="First Name"
            className="p-3.5 my-2 w-full rounded-md bg-black border"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="p-3.5 my-2 w-full rounded-md bg-black border"
          /></>)}
          
          <input
            type="text"
            placeholder="Email or phone number"
            className="p-3.5 my-2 w-full rounded-md bg-black border"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3.5 my-2 w-full rounded-md bg-black font-semibold border"
          />
          <button className="p-2 my-2 bg-red w-full bg-[red] text-l rounded-md font-semibold">
          {isSignInForm?'Sign In':'Sign Up'}
          </button>
          <p className="text-[rgba(255,255,255,0.7)]">{isSignInForm?'New to Netflix?':'Already have an account?'} <span onClick={toggleForm} className="text-white cursor-pointer">{isSignInForm?'Sign up now.':'Sign In'} </span></p>
        </form>
      </div>
    </div>
  );
};

export default Login;
