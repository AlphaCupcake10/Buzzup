import logo from '../../assets/LOGO.png';
import SideBarButton from './SideBarButton';
import User from './User';
import FormButton from '../Login/FormButton'
import { Link,NavLink } from "react-router-dom";

import { useAuth } from '../../Contexts/AuthContext';

export default function LeftSideBar()
{
    const auth = useAuth();

    let activeClass = 'text-xl'
    return(
        <div className="md:w-96 flex flex-col justify-between">
            <div className="card p-1 md:p-6 grow flex flex-col justify-between">
                <div>
                    <img src={logo} className='w-2/3 mb-10 p-4 hidden md:block' alt="" />
                    <NavLink to='/' className={({isActive}) => {return isActive?activeClass:""}}><SideBarButton icon='home' label='HOME'></SideBarButton></NavLink>
                    <NavLink to='/explore' className={({isActive}) => {return isActive?activeClass:""}}><SideBarButton icon='travel_explore' label='EXPLORE'></SideBarButton></NavLink>
                    <NavLink to='/user' className={({isActive}) => {return isActive?activeClass:""}}><SideBarButton icon='account_circle' label='PROFILE'></SideBarButton></NavLink>
                </div>
                <div>
                    <NavLink to='/settings' className={({isActive}) => {return isActive?activeClass:""}}><SideBarButton icon='settings' label='SETTINGS'></SideBarButton></NavLink>
                </div>
            </div>
            <div className="card hidden md:block">
                <h1 className='text-white/50 mb-2'>Buzzing As</h1>
                <div className=''>
                    
                    <User></User> {/* TODO change link to useNavigate to remove login creds*/}
                    <h1 className='mt-4 text-xs opacity-50'>Not You? <button onClick={auth.signOut} className='text-accent'>Sign Out</button>.</h1>
                </div>
            </div>
        </div>
    )
}