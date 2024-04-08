import { signOut } from 'firebase/auth';
import React from 'react'
import { auth } from '../utils/firebase';
import {useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux'
const Header = () => {
  const navigate= useNavigate();
  const user= useSelector((state)=>state.user)
  const handleSignout=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/");
    }).catch((error) => {
      // An error happened.
    });
  }
  return (
    <div className='w-screen flex justify-between absolute px-8 py-2 bg-gradient-to-b from-black z-10'>
      <img src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="Logo" width={200} height={200} />
      {user && (
        <div className='flex p-2'>
        <img className='w-8 h-8' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAAV1BMVEUNfoD///8Ad3kAe30AdHby+PgagoSAsbLW5eX7/f06iIqlx8i00NHR4uIAcnXe6elUmZt1qqvo8vJspaYsiIqcwsM7jY9KkZONuLm/2NldnZ7H2tuUvb7KrWB7AAABbUlEQVRoge2X25KDIAyGIQGqBTzVs77/cy6j1XZ2Kxa2N53Jd6nJT0hM0jJGEARBEATxrSAgAwj3A1DgXP02xZRyqdWJ2Z+QlJY8nQpvVFDyhUoFasvV7+ZRx5rfsSJEHOzmVx9fGZrNiLcBicFud2uOQ8+S3eoSUFS47G6eG0eKY/mOOOjdqotLiz6O6VHQJLKgvlJt2ZOeqr8MSr6TTFEkrolMeBMZ10TJeHJfBHVlMe3PrvVZ+xMEQcQArI6YSm5aYnY2lQD7Kh1i1G2adMIjj0LNy0wvgyfjuv6GQrweqghiNOm6Lvpw8Wn1zPva6T+7oxPGQlfbmpNhv6YWiXHfwLkuO5ZlYiHD9jZPcn8pGxaxL7DL+QMpk8EYM9hK8ufHs4r6WBhmo+VebCnipBd5aLU8Uk769p8LFCFrG/v7gDQ3JQr8wG5G97+gu80u3Xme28noslDg+/6DD3An7HwiYoIgCIIgCIIgvpwffSQLvrwq4wUAAAAASUVORK5CYII=" alt="" />
        <h1 className='text-white'>{user.displayName}</h1>
        <button onClick={handleSignout} className='text-white'>Sign out</button>
      </div>
      )}
      
     </div>
  )
}

export default Header