import React from 'react'
// import { useSelector } from 'react-redux';
// import { Navigate, Outlet } from 'react-router-dom';
// import { selectToken } from '../redux/modules/tokenSlice';

import { Outlet } from 'react-router-dom';

export function ProtectiveRouter() {
  // let {decodeToken} = useSelector(selectToken)
  // return !!decodeToken ? <Outlet/> : <Navigate to={"/login"}/>
  return  <Outlet/>
}
