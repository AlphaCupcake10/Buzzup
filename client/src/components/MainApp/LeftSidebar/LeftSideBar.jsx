import CardContainer from "../../Common/CardContainer";
import logo from "../../../assets/LOGO.png";
import { Link } from "react-router-dom";

function LeftSideBar(props)
{
    return (
        <CardContainer className={`w-16 md:w-80 md:p-6 ${props.className}`}>
            <img className="p-6 mb-4 hidden md:block" src={logo} alt="" />
            <div>
                <Link to='/home/following'><LeftSidebarButton icon='home' label='HOME'/></Link>
                <Link to='/explore'><LeftSidebarButton icon='search' label='EXPLORE'/></Link>
                <Link to='/profile'><LeftSidebarButton icon='account_circle' label='PROFILE'/></Link>
            </div>
        </CardContainer>
    )
}

function LeftSidebarButton(props)
{
    return(
        // <div className="p-4 flex items-center 
        // hover:font-bold hover:bg-accent grow hover:grow-[8]
        // cursor-pointer select-none transition-all duration-300">
        <div className="p-4 flex items-center justify-center md:justify-start
        hover:font-bold hover:bg-accent grow hover:grow-[8]
        cursor-pointer select-none transition-all duration-300">
          <span className="material-symbols-outlined">{props.icon}</span>
          <h1 className="ml-6 hidden md:block">{props.label}</h1>
        </div>
    );
}

export default LeftSideBar;