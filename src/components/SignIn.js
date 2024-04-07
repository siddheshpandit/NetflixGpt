import React from 'react'
import { Link } from 'react-router-dom'

const SignIn = () => {
  return (
    <div className=''>
        <div className='bg-gradient-to-b from-black absolute'>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt=""
        />
        </div>
        <div>
        <form className="absolute w-8/12 mt-24 mx-auto right-0 left-0 top-0 bottom-0 p-8 opacity-85 text-white">
          <h1 className="font-bold text-5xl mb-4 pb-2">Unlimited movies, TV shows and more</h1>
          <h2 className='text-center text-2xl font-semibold p-2'>Watch anywhere. Cancel anytime.</h2>
          <h2 className='text-center text-2xl font-semibold p-2'>Ready to watch? Enter your email to create or restart your membership.</h2>
          <div>
          <input
            type="text"
            placeholder="Email or phone number"
            className="p-3.5 my-2 rounded-md bg-black border"
          />
          <button className="p-2 my-2 bg-red bg-[red] text-l rounded-md font-semibold">
            Sign In
          </button>
          </div>
          
          <p className="text-[rgba(255,255,255,0.7)]">New to Netflix? <Link className="text-white">Sign up now.</Link></p>
        </form>
      </div>
    </div>
  )
}

export default SignIn