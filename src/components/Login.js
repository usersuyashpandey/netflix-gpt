import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
      const [isSignInForm, setIsSignInForm] = useState(true)

      const toggleSignInForm = () => {
            setIsSignInForm(!isSignInForm)
      }
      return (
            <div className='min-h-screen'>
                  <Header />
                  <div className='absolute'>

                        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/fa4630b1-ca1e-4788-94a9-eccef9f7af86/web_tall_panel/IN-en-20250407-TRIFECTA-perspective_8be2cd93-f2e6-4e34-acba-05b716385704_medium.jpg"
                              alt='hero bgImage'
                        />
                  </div>
                  <form className='absolute w-4/12 p-12 bg-black my-36 mx-auto right-0 left-0  text-white rounded-lg bg-opacity-80'>
                        <h1 className='font-bold text-white text-3xl py-4'>{isSignInForm ? 'Sign In' : 'Sign Up'}</h1>
                        {isSignInForm && <input placeholder='Full Name' type='text' className='p-4 my-2 w-full bg-gray-700 rounded-lg' />}
                        <input placeholder='Email Address' type='text' className='p-4 my-2 w-full bg-gray-700 rounded-lg' />
                        <input placeholder='Password' type='password' className='p-4 my-2 w-full bg-gray-700 rounded-lg' />
                        <button className='p-4 my-2 bg-red-700 w-full rounded-lg'>{isSignInForm ? 'Sign In' : 'Sign Up'}</button>
                        <p className='cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? 'Are you new to Netflix? Sign Up now' : 'Already registered? Sign In now'}</p>
                  </form>
            </div>
      )
}

export default Login