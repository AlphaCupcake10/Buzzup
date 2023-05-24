import LeftSideBar from "./MainApp/LeftSidebar/LeftSideBar";
import Home from "./MainApp/HomePage/Home";
import {FollowingFeed,ForYouFeed} from "./MainApp/HomePage/Feed";
import Explore from "./MainApp/ExplorePage/Explore";
import Profile from "./MainApp/ProfilePage/Profile";


function MainApp(props)
{
    return (
      <div className="text-light bg-darker flex justify-between w-screen h-screen overflow-hidden">
      <LeftSideBar className=""></LeftSideBar>
      <LeftSideBar className="hidden xl:block"></LeftSideBar>
      </div>
    );
}

export default MainApp;