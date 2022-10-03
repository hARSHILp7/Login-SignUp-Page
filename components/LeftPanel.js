import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState } from 'react'

const LeftPanel = () => {
    const [signUp, setSignUpState] = useState(true);

    return (
        <div>
            {/* Sign Up */}
            {signUp && (
                <div className='font-mono text-[#293241] w-[60%] h-screen mx-auto flex flex-col justify-center'>
                    {/* Heading */}
                    <div className='text-[40px] font-bold mb-0'>Sign Up</div>
                    <div className='text-[20px] mb-10'>Lorem Ipsum Phasellus Vestibulum Sed!</div>
                    {/* Google Button */}
                    <button className='rounded-full px-14 py-3 border-[#999999] border-[1px] w-[100%] mb-6 bg-white hover:drop-shadow-md'>
                        <div className='flex justify-center'>
                            <img src='google.png' className='mr-4'/>
                            <div className='font-semibold'>Sign in with Google</div>
                        </div>
                    </button>
                    {/* or Sign Up with mail */}
                    <div className='flex justify-center mb-6 text-center'>
                        <img src='Horizontal-Line.png' />
                        <span className='px-3 text-[#000000] text-[14px] font-semibold'>or Sign in with Email</span>
                        <img src='Horizontal-Line.png' />
                    </div>
                    {/* Name */}
                    <div className='mb-4 font-semibold'>
                        <div className='mb-2 text-[20px]'>Name*</div>
                        <input type='text' placeholder='Your Name' className='py-3 rounded-full px-6 w-[100%] bg-transparent border-[1px] border-[#999999] text-[16px]' />
                    </div>
                    {/* Email */}
                    <div className='mb-4 font-semibold'>
                        <div className='mb-2 text-[20px]'>Email*</div>
                        <input type='email' placeholder='mail@website.com' className='py-3 rounded-full px-6 w-[100%] bg-transparent border-[1px] border-[#999999] text-[16px]' />
                    </div>
                    {/* Password */}
                    <div className='mb-3 font-semibold'>
                        <div className='mb-2 text-[20px]'>Password*</div>
                        <input type='password' placeholder='Min. 8 characters' className='py-3 rounded-full px-6 w-[100%] bg-transparent border-[1px] border-[#999999] text-[16px]' />
                    </div>
                    {/* Terms & Conditions */}
                    <div className='mb-4 font-semibold text-[14px]'>
                        <input type='checkbox' id='termsAndConditions' className='mr-2' />
                        <label for='termsAndConditions' className=''>I agree to the <text className='text-[#EE6C4D]'>Terms & Conditions</text></label>
                    </div>
                    <button className='py-3 rounded-full px-6 w-[100%] bg-transparent border-[1px] border-[#999999] text-[16px] mb-4 font-semibold bg-[#EE6C4D] text-[#ffffff] hover:drop-shadow-md'>Sign Up</button>
                    <div>
                        <span className='font-semibold'>Already have an Account? </span><span onClick={() => setSignUpState(false)} className='font-semibold cursor-pointer text-[#EE6C4D]'>Sign in</span>
                    </div>
                </div>
            )}
            {/* Login */}
            {!signUp && (
                <div className='font-mono text-[#293241] w-[60%] h-screen mx-auto flex flex-col justify-center'>
                {/* Heading */}
                <div className='text-[40px] font-bold mb-0'>Login</div>
                <div className='text-[20px] mb-10'>Lorem Ipsum Diam Quam Nulla!</div>
                {/* Google Button */}
                <button className='rounded-full px-14 py-3 border-[#999999] border-[1px] w-[100%] mb-6 bg-white hover:drop-shadow-md'>
                    <div className='flex justify-center'>
                        <img src='google.png' className='mr-4'/>
                        <div className='font-semibold'>Login with Google</div>
                    </div>
                </button>
                {/* or Login with mail */}
                <div className='flex justify-center mb-6 text-center'>
                        <img src='Horizontal-Line.png' />
                        <span className='px-3 text-[#000000] text-[14px] font-semibold'>or Login with Email</span>
                        <img src='Horizontal-Line.png' />
                    </div>
                {/* Email */}
                <div className='mb-4 font-semibold'>
                    <div className='mb-2 text-[20px]'>Email*</div>
                    <input type='email' placeholder='mail@website.com' className='py-3 rounded-full px-6 w-[100%] bg-transparent border-[1px] border-[#999999] text-[16px]' />
                </div>
                {/* Password */}
                <div className='mb-3 font-semibold'>
                    <div className='mb-2 text-[20px]'>Password*</div>
                    <input type='password' placeholder='Min. 8 characters' className='py-3 rounded-full px-6 w-[100%] bg-transparent border-[1px] border-[#999999] text-[16px]' />
                </div>
                {/* Forgot Password */}
                <div className='text-[#EE6C4D] text-right font-semibold cursor-pointer mb-2'>Forgot Password?</div>
                {/* Remember Me */}
                <div className='mb-4 font-semibold text-[16px]'>
                    <input type='checkbox' id='termsAndConditions' className='mr-2' />
                    <label for='termsAndConditions'>Remember me</label>
                </div>
                <button className='py-3 rounded-full px-6 w-[100%] bg-transparent border-[1px] border-[#999999] text-[16px] mb-4 font-semibold bg-[#EE6C4D] text-[#ffffff] hover:drop-shadow-md'>Login</button>
                <div>
                    <span className='font-semibold'>Not registered yet? </span><span onClick={() => setSignUpState(true)} className='font-semibold cursor-pointer text-[#EE6C4D]'>Create an Account</span>
                </div>
            </div>
            )}
        </div>
    )
};

export default LeftPanel;