import React from 'react'
import logo from "../assets/images/logo.svg"

import { iconClose, iconHamburger } from '../assets/images/images'


const Header = () => {
    return (
        <>
            <div className='header-mobile px-6 py-8'>
                <div className='flex justify-between items-center'>
                    <img src={logo} alt="logo" />
                    <img src={iconHamburger} alt="icon-hamburger" />
                </div>

                <div className='border border-white pl-4 py-4 relative top-44'>
                    <div className='heading uppercase text-white text-4xl w-4/5'> Immersive experiences that deliver</div>
                </div>
            </div>
        </>

    )
}

export default Header