import React, { useState } from 'react'
import images from '../assets/images'
import {useNavigate} from 'react-router-dom';

function Login() {
  const[currState,setCurrState]=useState("Sign up")
  const[name,setName]=useState("");
  const[email,setEmail] =useState("");
  const[password,setPassword]=useState("");
  const[bio,setBio]=useState("");
  const[submittedData,setSubmittedData]=useState(false);
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <img
        src={images.signup}
        alt="signup-background"
        className="absolute w-full h-full object-cover"
      />

      <div className="relative z-10 grid md:grid-cols-[3fr_1.5fr] h-full px-[5%] py-[5%]">
        <div className='pt-10'>
          <h1 className='text-white font-extrabold text-5xl py-2'>Let's</h1>
          <h1 className='text-white font-extrabold text-5xl py-2'>Connect With </h1>
          <h1 className='text-white font-extrabold text-5xl py-2'>Your Friends...</h1>
        </div>

        <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-xl h-fit self-center p-3">
          <div className="p-5 flex items-center gap-4">
            <img
              src={images.icon}
              alt="icon"
              className="h-20 w-20 rounded-full"
            />
            <h1 className="text-white text-5xl font-extrabold">ChatUp</h1>
          </div>

          {/*form*/}
          <form className="p-6 flex flex-col justify-center gap-4">
            <h1 className='text-white pl-2 text-2xl'>{currState}</h1>
            {currState==="Sign up" && !submittedData &&(
            <input
              type="text"
              placeholder="Enter name" required
              className="p-3 rounded-xl bg-white/20 text-white placeholder-gray-300 outline-none"
            />
            )}
            
            
            {!submittedData && (
              <>
                <input
                type="email"
                placeholder="Enter email" required
                className="p-3 rounded-xl bg-white/20 text-white placeholder-gray-300 outline-none"
                />

                <input
                  type="password" required
                  placeholder="Enter password"
                  className="p-3 rounded-xl bg-white/20 text-white placeholder-gray-300 outline-none"
                />
              </>
            )}

            {currState==="Sign up" && submittedData &&(
              <textarea rows={4} 
              className="p-3 rounded-xl bg-white/20 text-white placeholder-gray-300 outline-none"
              placeholder='Enter bio'
              />
            )}

            <button type='submit' 
            className='py-3 bg-linear-to-r from-cyan-600 to-sky-700 text-white p-3 rounded-2xl'
            onClick={()=>{navigate('/')}}>
              {currState=== "Sign up"?"Create account":"Login"}
            </button>

            {currState==="Sign up"?(
              <p className='text-white text-center'>Already have an account ?
                <span onClick={()=>{
                  setCurrState("Login");
                  setSubmittedData(false);}}
                className='ml-1 text-cyan-300 cursor-pointer hover:underline hover:text-cyan-500'>
                Login 
                </span>
              </p>
            ):(
              <p className='text-white text-center'>Create an account 
                <span onClick={()=>{
                  setCurrState("Sign up");
                  setSubmittedData(false);}}
                  className='ml-1 text-cyan-300 cursor-pointer hover:underline hover:text-cyan-500'>
                  Click here
                </span>
              </p>
            )} 

          </form>
          
        </div>
      </div>
    </div>
  )
}

export default Login