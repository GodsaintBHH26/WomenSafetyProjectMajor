import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFirebase } from "../contexts/firebase";

function Login() {
  const firebase = useFirebase();
  const navigate = useNavigate();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  useEffect(()=>{
    if(firebase.user){
      navigate('/');
    }
  })
  
  return (
    <>
      <div className="bg-gradient-to-r from-[#AA00FF] to-[#7200F5] w-full h-[37rem] p-5 flex justify-center items-center">
        <div className="flex flex-col w-96 p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800">
          <div className="mb-8 text-center">
            <h1 className="my-3 text-4xl font-bold">Login</h1>
            <p className="text-sm dark:text-gray-600">
              Sign in to access your account
            </p>
          </div>
          <form className="space-y-12">
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block mb-2 text-sm">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  onChange={e=> setEmail(e.target.value)}
                  value={email}
                  placeholder="Enter your Email here"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <label htmlFor="password" className="text-sm">
                    Password
                  </label>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="text-xs hover:underline dark:text-gray-600"
                  >
                    Forgot password?
                  </a>
                </div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  onChange={e=>setPassword(e.target.value)}
                  value={password}
                  placeholder="Enter your Password here"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                />
              </div>
            </div>
            <div className="space-y-2">
              <div>
                <button
                  type="button"
                  onClick={()=>{
                    firebase.loginwithEmailAndPassword({email, password})
                  }}
                  className="w-full px-8 py-3 font-semibold rounded-md  btn-fill-hollow dark:text-gray-50 hover:outline-3 hover:text-black"
                >
                  Login
                </button>
              </div>
              <p className="px-6 text-sm text-center dark:text-gray-600">
                Don't have an account yet?
                <Link
                  to='/signup'
                  className="hover:bg-amber-600 hover:text-white dark:text-violet-600"
                >
                  Sign up
                </Link>
                .
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
