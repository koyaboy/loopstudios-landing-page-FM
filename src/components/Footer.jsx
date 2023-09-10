import React from 'react'
import logo from "../assets/images/logo.svg"
import { iconFacebook, iconTwitter, iconPinterest, iconInstagram } from "../assets/images/images.js"

const Footer = () => {
    return (
        <div className='py-12 flex flex-col items-center bg-black gap-4 text-white font-alata md:px-10 lg:px-16 xl:px-24 md:flex-row md:justify-between md:items-start'
        >
            <div className='flex flex-col gap-4'

            >
                <img src={logo} alt="logo" className='w-32' />
                <nav className='text-center'>
                    <ul className='footer flex flex-col gap-4 md:flex-row'>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Events</a></li>
                        <li><a href="#">Products</a></li>
                        <li><a href="#">Support</a></li>
                    </ul>
                </nav>
            </div>

            <div className='flex flex-col gap-4'
            >
                <div className='icons flex gap-3 mt-6 justify-center items-center md:mt-0'>
                    <div className='cursor-pointer'><img src={iconFacebook} alt="facebook-icon" /></div>
                    <div className='cursor-pointer'><img src={iconTwitter} alt="twitter-icon" /></div>
                    <div className='cursor-pointer'><img src={iconPinterest} alt="pinterest-icon" /></div>
                    <div className='cursor-pointer'> <img src={iconInstagram} alt="instagram-icon" /></div>
                </div>
                <div className="text-dark-gray text-sm">© 2021 Loopstudios. All rights reserved.</div>
            </div>
        </div>
    )
}

export default Footer