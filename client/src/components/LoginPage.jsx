import logo from "../assets/LOGO.png"
import InputField from "./Common/InputField";
import CardContainer from "./Common/CardContainer";
import Button from "./Common/Button";
import { useState } from "react";
import {useNavigate,Link} from 'react-router-dom';

function LoginPage()
{
  const navigate = useNavigate();
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  
  async function submitForm(e)
  {
    try{
      e.preventDefault();

      console.log(email,password);

      let response = await fetch("http://localhost:3000/api/v1/signin",{
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password
        }),
        headers: { "Content-Type": "application/JSON" },
        credentials: "include",
      });

      response = await response.json();

      console.log(response);
      
      if(response?.error || Object.keys(response).length === 0)
      {
        alert("Invalid Credentials");
      }
      if (response?.data?.token) 
      {
        alert("Successfully Logged In");
        //store token to local storage
        // localStorage.setItem("currentUser",);
        localStorage.setItem("currentUser",JSON.stringify({username:response.data.username,token:response.data.token}));
        navigate("/home",{replace:true});
      }
    }
    catch(e)
    {
      console.log("Error:" + e);
    }
  }

  return (
      <div className="text-light bg-darker flex flex-col items-center w-screen h-screen overflow-hidden">
        <div className="p-12">
          <img src={logo} className="w-full sm:w-64" alt="" />
          <p className="font-bold text-light/50 mt-1">LET'S BUZZ TOGETHER.</p>
        </div>
        <CardContainer className='sm:w-1/2 lg:w-3/5/8 xl:w-4/12 h-fit p-8 sm:p-12'>
          <form action="" onSubmit={submitForm}>
            <div className="mb-12">
              <h1 className="text-2xl md:text-5xl font-extrabold">LOGIN</h1>
              <InputField label='EMAIL' id='email' type='text' value={email} onChange={(e)=> setEmail(e.target.value)}/>
              <InputField label='PASSWORD' id='password' type='password' value={password} onChange={(e)=> setPassword(e.target.value)}/>
            </div>
            <Button label='LOGIN'></Button>
          </form>
          <br />
          <p>Don't have an account?
            <Link className="opacity-40 hover:opacity-100 hover:text-accent mx-1" to='/signup'>Sign Up here.</Link>
          </p>
        </CardContainer>
      </div>
  );
}

export default LoginPage;