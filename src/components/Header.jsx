import React from 'react'
import logo from "../assets/images/logo.svg"

import { iconClose, iconHamburger } from '../assets/images/images'
// import imageHeroMobile from "../assets/images/mobile/image-hero.jpg"

const Header = ({ toggleMenu, setToggleMenu }) => {
    const isMobile = window.innerWidth < 768;
    return (
        <>
            {toggleMenu ?
                (
                    <div className='bg-black w-screen h-screen px-5 py-5'>
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
                (<>

                    <div className="bg-[url('./assets/images/mobile/image-hero.jpg')] md:bg-[url('./assets/images/desktop/image-hero.jpg')] bg-no-repeat bg-cover bg-center h-[650px] md:h-[400px] px-3 py-8 md:px-10 lg:px-16 relative">
                        <div className='header-overlay'></div>
                        <div className='flex justify-between items-center'>
                            <img src={logo} alt="logo" className='z-20' />
                            <img
                                src={iconHamburger}
                                alt="icon-hamburger"
                                onClick={() => setToggleMenu(true)}
                                className='md:hidden z-20'
                            />
                            <nav className='text-white font-josefin hidden md:block z-20'>
                                <ul className='flex gap-4 font-alata'>
                                    <li><a href="#">About</a></li>
                                    <li><a href="#">Careers</a></li>
                                    <li><a href="#">Events</a></li>
                                    <li><a href="#">Products</a></li>
                                    <li><a href="#">Support</a></li>
                                </ul>
                            </nav>
                        </div>

                        <div className='border border-white pl-4 py-4 relative top-44 md:w-[55%] lg:w-[45%] xl:w-[35%] md:top-1/4 z-20'>
                            <div className='heading uppercase text-white text-5xl '> Immersive experiences that deliver</div>
                        </div>
                    </div>
                </>
                )
            }
        </>

    )
}

export default Header