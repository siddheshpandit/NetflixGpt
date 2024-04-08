import React, { useEffect } from 'react'
import Browse from './Browse'
import Login from './login'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../utils/firebase'
import {useDispatch} from 'react-redux'
import { addUser, removeUser } from '../store/userSlice'

const Main = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              const {uid,displayName,email} = user;
              console.log(displayName);
              dispatch(addUser({uid,displayName,email}));
            } else {
                // Signed out
              dispatch(removeUser());
            }
          });
    }, [])
    const appRouter= createBrowserRouter([
        {
            path:'/',
            element:<Login/>
        },
        {
            path:'/browse',
            element:<Browse/>
        }
    ])
    
  return (
    <div>
        <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Main