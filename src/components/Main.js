import React from 'react'
import Browse from './Browse'
import Login from './login'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const Main = () => {
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