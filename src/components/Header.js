import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import {useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux'
import { addUser, removeUser } from '../store/userSlice';
import { useDispatch } from 'react-redux'
import { AVATAR_URL, LOGO_URL } from '../utils/constants';
const Header = () => {
  const navigate= useNavigate();
  const dispatch = useDispatch();
  const user= useSelector((state)=>state.user)
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

  return (
    <div className='w-screen flex justify-between absolute px-8 py-2 bg-gradient-to-b from-black z-10'>
      <img src={LOGO_URL} alt="Logo" width={200} height={200} />
      {user && (
        <div className='flex p-2'>
        <img className='w-8 h-8' src={AVATAR_URL} alt="" />
        <h1 className='text-white'>{user.displayName}</h1>
        <button onClick={handleSignout} className='text-white'>Sign out</button>
      </div>
      )}
      
     </div>
  )
}

export default Header