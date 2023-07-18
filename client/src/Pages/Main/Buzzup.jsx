import LeftSideBar from './LeftSideBar';
import Home from './Home';
import ProfilePage from './ProfilePage';
import BuzzPage from './BuzzPage';
import NotFound404 from './NotFound404';
import {Navigate, Route,Routes} from 'react-router-dom';
import { useAuth } from '../../Contexts/AuthContext';

const feeddata =
{
    date:"15/07/23",
    text:"Yoda You can call me",
    hasLiked:true,
    likeCount:100,
    commentCount:100,
    shareCount:100,
    user:
    {
        name : "Lakshman",
        username : "@notlxm"
    }
}

export default function Buzzup()
{
    const auth = useAuth();

    return(
        <div className="w-full h-full flex justify-between">
            <LeftSideBar></LeftSideBar>
            <Routes>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='/user/' element={<Navigate to={`${auth.userdata.username}`}/>}></Route>
                <Route path='/user/:id' element={<ProfilePage></ProfilePage>}></Route>
                <Route path='/buzz/:id' element={<BuzzPage></BuzzPage>}></Route>
                <Route path='/*' element={<NotFound404></NotFound404>}></Route>
            </Routes>
            <div className="w-96 hidden xl:flex flex-col justify-between">
                <div className="card grow">
                    
                </div>
            </div>
        </div>
    )
}