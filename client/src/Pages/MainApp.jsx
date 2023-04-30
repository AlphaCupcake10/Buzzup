import LeftSideBar from "../components/LeftSidebar/LeftSideBar";
import Home from "../components/Home/Home";
import {FollowingFeed,ForYouFeed} from "../components/Home/Feed";
import Explore from "../components/Explore/Explore";
import Profile from "../components/Profile/Profile";
import NotFound from "../components/NotFound";

import {Route,Routes} from 'react-router-dom';

function MainApp()
{
    return (
        <div className="text-light bg-darker flex justify-between w-screen h-screen overflow-hidden">
      <LeftSideBar className=""></LeftSideBar>
      <Routes>
        <Route path="/home/following" element={<Home className='grow'><FollowingFeed/></Home>}/>
        <Route path="/home/foryou" element={<Home className='grow'><ForYouFeed/></Home>}/>
        <Route path="/explore" element={<Explore className='grow'></Explore>}/>
        <Route path="/profile" element={<Profile className='grow'></Profile>}/>
        <Route path="*" element={<NotFound className='grow'></NotFound>}/>
      </Routes>
      <LeftSideBar className="hidden xl:block"></LeftSideBar>
      </div>
    );
}

export default MainApp;