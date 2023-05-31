import React, { useEffect, useState } from "react";
import LeftSideBar from "./MainApp/LeftSidebar/LeftSideBar";
import {Navigate, Route,Routes, useNavigate} from 'react-router-dom';

export const LoginContext = React.createContext()

export default function MainApp(props)
{
  const [loginStatus,setLoginStatus] = useState({});
  const navigate = useNavigate();

  

  useEffect(()=>{
    let user = JSON.parse(localStorage.getItem('currentUser'));
    console.log(user);
    if(!user)
    {
      setLoginStatus(user);
      navigate("/login",{replace: true});
    }
  },[]);
  
  return (
    <div className="text-light bg-darker flex justify-between w-screen h-screen overflow-hidden">
      <LeftSideBar className=""></LeftSideBar>
      <Routes>
        <Route path="/home" element={<h1>home</h1>}></Route>
        <Route path="/explore" element={<h1>explore</h1>}></Route>
        <Route path="/profile" element={<h1>profile</h1>}></Route>
        <Route path="*" element={<Navigate to='/app/home'></Navigate>}></Route>
      </Routes>
      <LeftSideBar className="hidden xl:block"></LeftSideBar>
    </div>
  );
}