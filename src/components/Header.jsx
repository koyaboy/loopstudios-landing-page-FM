import React from 'react'
import logo from "../assets/images/logo.svg"

import { iconClose, iconHamburger } from '../assets/images/images'


const Header = ({ toggleMenu, setToggleMenu }) => {
    return (
        <>
            {toggleMenu ?
                (
                    <div className='bg-black w-screen h-screen px-5'>
                        <div className='flex justify-between items-center'>
                            <img src={logo} alt="logo" />
                            <img src={iconClose} alt="close-icon" onClick={() => setToggleMenu(false)} />
                        </div>
                        <nav className='text-white mt-[35%] font-josefin'>
                            <ul className='flex flex-col gap-4'>
                                <li><a href="#">ABOUT</a></li>
                                <li><a href="#">CAREERS</a></li>
                                <li><a href="#">EVENTS</a></li>
                                <li><a href="#">PRODUCTS</a></li>
                                <li><a href="#">SUPPORT</a></li>
                            </ul>
                        </nav>
                    </div>
                )
                :
                (
                    <div className='header-mobile px-6 py-8'>
                        <div className='flex justify-between items-center'>
                            <img src={logo} alt="logo" />
                            <img src={iconHamburger} alt="icon-hamburger" onClick={() => setToggleMenu(true)} />
                        </div>

                        <div className='border border-white pl-4 py-4 relative top-44'>
                            <div className='heading uppercase text-white text-4xl w-4/5'> Immersive experiences that deliver</div>
                        </div>
                    </div>
                )
            }
        </>

    )
}

export default Header