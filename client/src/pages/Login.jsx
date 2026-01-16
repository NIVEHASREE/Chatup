import React from 'react'
import images from '../assets/images'

function Login() {
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

        <div className="backdrop-blur-xl rounded-3xl border border-white/20 shadow-xl">
          <div className="p-5 flex items-center gap-4">
            <img
              src={images.icon}
              alt="icon"
              className="h-20 w-20 rounded-full"
            />
            <h1 className="text-white text-5xl font-extrabold">ChatUp</h1>
          </div>
          <h1 className='text-white pl-8 text-2xl'>Do signup</h1>
          <form className="p-6 flex flex-col gap-4">
            <input
              type="text"
              placeholder="Enter name"
              className="p-3 rounded-xl bg-white/20 text-white placeholder-gray-300 outline-none"
            />
            <input
              type="number"
              placeholder="Enter mobile no"
              className="p-3 rounded-xl bg-white/20 text-white placeholder-gray-300 outline-none"
            />
          </form>

        </div>
      </div>
    </div>
  )
}

export default Login