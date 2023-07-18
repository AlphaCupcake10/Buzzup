import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export function useAuth()
{
    return useContext(AuthContext);
}

export function AuthProvider(props)
{
    let navigator = useNavigate();
    const [userdata,setUserdata] = useState(null);

    useEffect(()=>{
        setUserdata(JSON.parse(localStorage.getItem("userdata")));
    },[])

    function signIn(userdata)
    {
        console.log("Signed In as");
        setUserdata(userdata);
        localStorage.setItem("userdata",JSON.stringify(userdata));
        console.log(userdata);
        navigator('/',{replace:true});
    }
    function signOut()
    {
        console.log("Signed Out as");
        setUserdata(null);
        localStorage.removeItem("userdata");
        navigator('/signin',{replace:true});
    }

    const value = {
        userdata,
        signIn,
        signOut
    }

    return(
        <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
    )
    
}