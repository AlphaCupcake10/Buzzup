import React, { useEffect, useState } from "react";
import {Navigate, Route,Routes, useNavigate} from 'react-router-dom';
import LeftSideBar from "./MainApp/LeftSidebar/LeftSideBar";
import Home from "./MainApp/HomePage/Home";
import Explore from "./MainApp/ExplorePage/Explore";
import Profile from "./MainApp/ProfilePage/Profile";

export default function MainApp(props)
{
  const navigate = useNavigate();

  
  useEffect(()=>{
    let user = JSON.parse(localStorage.getItem('currentUser'));
    if(!user)
    {
      navigate("/login",{replace: true});
    }
  },[]);
  
  return (
    <div className="text-light bg-darker flex justify-between w-screen h-screen overflow-hidden">
      <LeftSideBar></LeftSideBar>
      <Routes>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/explore" element={<Explore></Explore>}></Route>
        <Route path="/profile" element={<Profile></Profile>}></Route>
        <Route path="*" element={<Navigate to='/app/home'></Navigate>}></Route>
      </Routes>
      <LeftSideBar className="hidden xl:block"></LeftSideBar>
    </div>
  );
}