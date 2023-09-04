import React from 'react'
import logo from "../assets/images/logo.svg"
import { iconFacebook, iconTwitter, iconPinterest, iconInstagram } from "../assets/images/images.js"

const Footer = () => {
    return (
        <div className='py-12 flex flex-col items-center bg-black gap-4 text-white font-alata'>
            <img src={logo} alt="logo" />
            <nav className='text-center'>
                <ul className='flex flex-col gap-4'>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Events</a></li>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">Support</a></li>
                </ul>
            </nav>
            <div className='flex gap-3 mt-6'>
                <img src={iconFacebook} alt="facebook-icon" />
                <img src={iconTwitter} alt="twitter-icon" />
                <img src={iconPinterest} alt="pinterest-icon" />
                <img src={iconInstagram} alt="instagram-icon" />
            </div>
            <div className="text-dark-gray text-sm">© 2021 Loopstudios. All rights reserved.</div>
        </div>
    )
}

export default Footer