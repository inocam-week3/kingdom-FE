import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectToken } from '../redux/modules/tokenSlice';

export function ProtectiveRouter() {
  let {decodeToken} = useSelector(selectToken)
  console.log(JSON.stringify(!decodeToken));
  return !decodeToken ? <Outlet/> : <Navigate to={"/login"}/>
}
