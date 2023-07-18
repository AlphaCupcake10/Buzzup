import logo from '../../assets/LOGO.png'
import FormInput from './FormInput';
import FormButton from './FormButton';
import { Link } from "react-router-dom";
import { useState } from 'react';
import { useAuth } from '../../Contexts/AuthContext';

export default function SignInPage()
{
    const auth = useAuth();

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');


    async function submitForm(e)
    {
        e.preventDefault();
        console.log(email,password);

        try
        {
            let response = await fetch("http://localhost:3000/api/v1/signin",{
                method: "POST",
                body: JSON.stringify({email: email,password: password}),
                headers: { "Content-Type": "application/JSON" },
                credentials: "include"
            });

            response = await response.json();

            if(response?.error || Object.keys(response).length === 0)
            {
                alert("Invalid Credentials");
            }
            if (response?.data?.token) 
            {
                const userdata = 
                {
                    username:response.data.username,
                    token:response.data.token
                }
                auth.signIn(userdata);
            }
        }
        catch(e)
        {
            alert(e);
        }
    }


    return(
        <div className="w-full h-full flex justify-between">
            <div className="pattern grow rounded-r-3xl hidden md:block">
                
            </div>
            <div className="card flex flex-col justify-between p-5 md:p-10 w-full md:w-3/5 lg:w-2/5">
                <div>
                <img src={logo} className='w-24' alt="" />
                    <form onSubmit={submitForm} action='' className="pt-24 form flex-col flex">
                        <h1 className='font-black text-4xl mb-10'>SIGN IN</h1>
                        <FormInput value={email} onChange={(e)=>setEmail(e.target.value)} id='email' type='text' autoComplete="off" label='Email Address'/>
                        <FormInput value={password} onChange={(e)=>setPassword(e.target.value)} id='password' type='password' label='Password'/>
                        <FormButton className='mt-10'>SIGN IN</FormButton>
                    </form>
                    <p className='text-light/50 text-xs mt-5 md:mt-0 md:text-base flex justify-center'>Don't Have an Account? <Link to='/signup' className='ml-1 text-accent/50'>Sign Up Here</Link></p>
                </div>
                <div>
                    FOOTER
                </div>
            </div>
        </div>
    )
}