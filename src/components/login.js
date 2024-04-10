import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser } from "../store/userSlice";
import { useDispatch} from 'react-redux'
import { BACKGROUND_URL } from "../utils/constants";
const Login = () => {
  const dispatch= useDispatch();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const email = useRef(null);
  const password = useRef(null);
  const firstName = useRef(null);
  const lastName = useRef(null);
  const [errorMessage, setErrorMessage] = useState();
  const toggleForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  const handleFormValidation = () => {
    let message;
    if (isSignInForm) {
      message = checkValidData(email.current.value, password.current.value);
    } else {
      message = checkValidData(
        email.current.value,
        password.current.value,
        firstName.current.value,
      );
    }
    setErrorMessage(message);
    if (message) return;
    if (!isSignInForm) {
      // Signup
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: firstName.current.value
          }).then(() => {
            const {uid,displayName,email} = auth.currentUser;
            dispatch(addUser({uid,displayName,email}));
          }).catch((error) => {
            // An error occurred
            // ...
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + "-" + errorMessage);
          setErrorMessage(errorCode.split("/"))
        });
    } else {
      // sign in
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in
          // const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode.split("/"))
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="bg-gradient-to-b from-black absolute">
        <img
          src={BACKGROUND_URL}
          alt=""
        />
      </div>
      <div className="">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="absolute w-3/12 p-16 mt-24 mx-auto right-0 left-0 bg-black opacity-85 text-white"
        >
          <h1 className="font-bold text-3xl mb-4 pb-2">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <div>
              <input
                ref={firstName}
                type="text"
                placeholder="First Name"
                className="p-3.5 my-2 w-full rounded-md bg-black border"
              />
              <input
                ref={lastName}
                type="text"
                placeholder="Last Name"
                className="p-3.5 my-2 w-full rounded-md bg-black border"
              />
            </div>
          )}

          <input
            ref={email}
            type="text"
            placeholder="Email or phone number"
            className="p-3.5 my-2 w-full rounded-md bg-black border"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-3.5 my-2 w-full rounded-md bg-black font-semibold border"
          />
          <p className="text-red-500">{errorMessage}</p>
          <button
            type="submit"
            className="p-2 my-2 bg-red w-full bg-[red] text-l rounded-md font-semibold"
            onClick={handleFormValidation}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className="text-[rgba(255,255,255,0.7)]">
            {isSignInForm ? "New to Netflix?" : "Already have an account?"}{" "}
            <span onClick={toggleForm} className="text-white cursor-pointer">
              {isSignInForm ? "Sign up now." : "Sign In"}{" "}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
