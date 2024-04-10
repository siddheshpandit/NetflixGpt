import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { auth } from '../utils/firebase';
import {useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux'
import { addUser, removeUser } from '../store/userSlice';
import { useDispatch } from 'react-redux'
import { AVATAR_URL, LOGO_URL, SUPPORTED_LANGUAGES } from '../utils/constants';
import { toggleGptSearch } from '../store/gptSlice';
import { setLanguage } from '../store/configSlice';
const Header = ({toggleGPTSearch}) => {
  const navigate= useNavigate();
  const dispatch = useDispatch();
  const user= useSelector((state)=>state.user)
  const showGptSearch= useSelector((state)=>state?.gpt?.showGptSearch);
  const handleSignout=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/");
    }).catch((error) => {
      // An error happened.
    });
  }

  useEffect(() => {
    const unsubscribe= onAuthStateChanged(auth, (user) => {
        if (user) {
          const {uid,displayName,email} = user;
          dispatch(addUser({uid,displayName,email}));
          navigate('/browse')
        } else {
            // Signed out
          dispatch(removeUser());
          navigate('/')
        }
      });
      return () => unsubscribe();
}, [])

  const toggle=()=>{
    toggleGPTSearch(); // using state variables and props
    dispatch(toggleGptSearch()); // using redux store
  }

  const handleLanguageChange=(event)=>{
    dispatch(setLanguage(event.target.value))
  }

  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between'>
      <img src={LOGO_URL} alt="Logo" width={200} height={200} />
      {user && (
        <div className='flex items-center p-2 gap-4'>
          {showGptSearch && 
          <select name="" id="" onChange={handleLanguageChange}>
            {SUPPORTED_LANGUAGES.map((lang)=>(
              <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>
            ))}
          </select>
}
        <button onClick={toggle} className='bg-red-600 p-2 rounded-md'>{showGptSearch?'Browse':'Gpt Search'}</button>
        <h1 className='text-white'>{user.displayName}</h1>
        <img className='w-8 h-8' src={AVATAR_URL} alt="" />
        <button onClick={handleSignout} className='text-white'>Sign out</button>
      </div>
      )}
      
     </div>
  )
}

export default Header