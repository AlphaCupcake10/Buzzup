import logo from "../assets/LOGO.png"
import InputField from "./Common/InputField";
import CardContainer from "./Common/CardContainer";
import Button from "./Common/Button";
import { useState } from "react";

function LoginPage()
{
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  
  function submitForm(e)
  {
    e.preventDefault();
    console.log(email,password);
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json));
  }

  return (
      <div className="text-light bg-darker flex flex-col items-center justify-center w-screen h-screen overflow-hidden">
        <div className="p-12">
          <img src={logo} className="w-full sm:w-64" alt="" />
          <p className="font-bold text-light/50 mt-1">LET'S BUZZ TOGETHER.</p>
        </div>
        <CardContainer className='w-11/12 sm:w-1/2 h-fit p-8 sm:p-12'>
          <form action="" onSubmit={submitForm}>
            <div className="mb-12">
              <h1 className="text-5xl font-extrabold">LOGIN</h1>
              <InputField label='USERNAME' id='username' type='text' value={email} onChange={(e)=> setEmail(e.target.value)}/>
              <InputField label='PASSWORD' id='password' type='password' value={password} onChange={(e)=> setPassword(e.target.value)}/>
            </div>
            <Button label='LOGIN'></Button>
          </form>
          </CardContainer>
      </div>
  );
}

export default LoginPage;
  
  // async function login(event){
  //   try {
  //     event.preventDefault();
  //     console.log("hmm");
  //     let response = await fetch("http://localhost:4000/api/v1/signin", {
  //       method: "POST",
  //       body: JSON.stringify({
  //         email: email,
  //         password: password,
  //       }),
  //       headers: { "Content-Type": "application/JSON" },
  //       credentials: "include",
  //     });
  //     response = await response.json();
  //     console.log(response);
  //     if (response.data.token) {
  //       localStorage.setItem("ResponseToken", response.data.token);
  //       window.location.href = "http://localhost:3000/app/dashboard";
  //     } else {
  //       alert("wrong credentials");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }