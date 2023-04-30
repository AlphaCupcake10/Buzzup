import { useState,useEffect } from "react";
import { Navigate } from "react-router-dom";

function LoginPage()
{
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  
  async function login(event){
    try {
      event.preventDefault();
      console.log("hmm");
      let response = await fetch("http://localhost:4000/api/v1/signin", {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
        }),
        headers: { "Content-Type": "application/JSON" },
        credentials: "include",
      });
      response = await response.json();
      console.log(response);
      if (response.data.token) {
        localStorage.setItem("ResponseToken", response.data.token);
        window.location.href = "http://localhost:3000/app/dashboard";
      } else {
        alert("wrong credentials");
      }
    } catch (error) {
      console.log(error);
    }
  }

  function submitForm(e)
  {
    e.preventDefault();
    console.log(email,password);
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json));
  }

  return (
      <div className="p-16">
        <form action="" onSubmit={submitForm} className="flex flex-col">
          <input value={email} onChange={(e)=> setEmail(e.target.value)}
          type="text" className="border border-blue-300" name="email" id="email" />
          <input value={password} onChange={(e)=> setPassword(e.target.value)}
          type="password" className="border border-blue-300" name="password" id="password" />
          <button>LOGIN</button>
        </form>
      </div>
  );
}

export default LoginPage;