import CardContainer from "../../Common/CardContainer";
import logo from "../../../assets/LOGO.png";
import ProfileDisp from "../../Common/ProfileDisp";
import { Link } from "react-router-dom";

function LeftSideBar(props)
{
    return (
       <div className="flex flex-col">
       <CardContainer className={`w-16 md:w-80 md:p-6 ${props.className}`}>
            <ProfileDisp></ProfileDisp>
        </CardContainer>
        <CardContainer className={`w-16 md:w-80 md:p-6 flex-grow ${props.className}`}>
            <img className="p-6 mb-4 hidden md:block" src={logo} alt="" />
            <div>
                <Link to='/app/home'><LeftSidebarButton icon='home' label='HOME'/></Link>
                <Link to='/app/explore'><LeftSidebarButton icon='search' label='EXPLORE'/></Link>
                <Link to='/app/profile'><LeftSidebarButton icon='account_circle' label='PROFILE'/></Link>
            </div>
        </CardContainer>
        </div>
    )
}

function LeftSidebarButton(props)
{
    return(
        // <div className="p-4 flex items-center 
        // hover:font-bold hover:bg-accent grow hover:grow-[8]
        // cursor-pointer select-none transition-all duration-300">
        <div className="p-4 flex items-center justify-center md:justify-start
        hover:text-accent grow hover:grow-[8]
        cursor-pointer select-none">
          <span className="material-symbols-outlined">{props.icon}</span>
          <h1 className="ml-6 hidden md:block">{props.label}</h1>
        </div>
    );
}

export default LeftSideBar;