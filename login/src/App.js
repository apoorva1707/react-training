import React from 'react'

export default function login(){


return(
<div className="min-h-screen bg-lightBrown p-16">
      <div className="w-96 bg-white shadow-xl mx-auto p-8 ">
        <div className="">
          <img src='https:///d3ki9tyy5l5ruj.cloudfront.net/obj/6c76122a923c696febd26d2a843aa6daf960a3df/logo.png' className="w-32 mx-auto" />
          <h3 className="text-3xl text-center mt-8">Log In To Asana</h3>

        </div>
        <button className="w-full my-8 border border-1 p-4 rounded-md hover:bg-slate-100 hover:text-red-400">
          Contine With Google
        </button>
        <hr></hr>
        <p className="text-center -mt-3 w-2 mx-auto bg-white" >or</p>
        <label className="block text-xs mt-4 text-gray-400">Email Address</label>
        <input className="border w-full px-3 py-2 rounded-md mt-2 focus:outline-violet-400" type="text" placeholder="name@company.com"></input>
        <button className="w-full bg-violet-500 mt-4 py-2 text-white rounded-md hover:bg-violet-700">Continue</button>
        <p className="mt-4 text-sm text-gray-400 text-center">Don't have an account ?<span className="text-blue-500 hover:underline">Sign up</span></p>
        <p className="text-xs text-gray-400 mt-12 text-center">This site is protected by reCAPTCHA and the Google <span className="underline">Privacy</span> Policy and Terms of Service apply.</p>
      </div>
    </div>
    );
}