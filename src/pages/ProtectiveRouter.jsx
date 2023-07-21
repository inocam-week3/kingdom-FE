import React from 'react'
import { Outlet } from 'react-router-dom';

export function ProtectiveRouter() {
  let token;
  // return token ? <Outlet/> : <div>모달</div>
  return <Outlet/>
}
