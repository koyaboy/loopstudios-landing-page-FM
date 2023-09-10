import React from 'react'
import Creation from '../components/Creation'

import * as images from "../assets/images/images.js"


const MainContent = () => {
    return (
        <>
            <div className='px-3 py-20 md:px-10 lg:px-16 xl:px-24 '>
                <div className='lg:grid lg:grid-cols-8 lg:grid-rows-5'>

                    <img
                        src={images.interactiveMobile}
                        alt="image-interactive-mobile"
                        className='w-full md:hidden object-cover'
                        data-aos="zoom-in"
                        data-aos-duration="800"
                    />
                    <div className='hidden md:block lg:col-start-1 lg:col-end-6 lg:row-start-1 lg:row-end-6 z-0'>
                        <img
                            src={images.interactiveDesktop}
                            alt="image-interactive-desktop"
                            className='w-full h-full z-0 object-cover'
                            data-aos="zoom-in"
                        />
                    </div>

                    <div className='px-4 text-center lg:text-left lg:col-start-5 lg:col-end-9 lg:row-start-3 lg:row-end-6 lg:z-20 lg:bg-white lg:pl-24 lg:pt-16 lg:flex lg:flex-col lg:justify-end '
                        data-aos="fade-up"
                        data-aos-duration="1200"
                    >
                        <h2 className='w-full heading uppercase mt-10 text-3xl lg:mt-0 md:text-4xl lg:text-5xl z-20'>  The leader in interactive VR</h2>
                        <p className='w-full mt-3 text-dark-gray font-alata z-30 lg:mt-6 md:text-lg'>Founded in 2011, Loopstudios has been producing world-class virtual reality
                            projects for some of the best companies around the globe. Our award-winning
                            creations have transformed businesses through digital experiences that bind
                            to their brand.
                        </p>
                    </div>
                </div>

                {/* OUR CREATIONS */}
                <div className='mt-24 flex flex-col items-center md:flex-row md:flex-wrap md:justify-between md:items-center'
                    data-aos="fade-right"
                    data-aos-duration="2000"
                >
                    <h2 className='heading uppercase text-3xl mb-4 md:order-1 md:mb-0'>Our creations</h2>
                    <div className='w-full md:hidden'>
                        <Creation image={images.deepEarthMobile} title="DEEP EARTH" type="mobile" />
                        <Creation image={images.nightArcadeMobile} title="NIGHT ARCADE" type="mobile" />
                        <Creation image={images.soccerTeamMobile} title="SOCCER TEAM VR" type="mobile" />
                        <Creation image={images.gridMobile} title="THE GRID" type="mobile" />
                        <Creation image={images.fromAboveMobile} title="FROM UP ABOVE VR" type="mobile" />
                        <Creation image={images.pocketBorealisMobile} title="POCKET BOREALIS" type="mobile" />
                        <Creation image={images.curiosityMobile} title="THE CURIOSITY" type="mobile" />
                        <Creation image={images.fishEyeMobile} title="MAKE IT FISHEYE" type="mobile" />
                    </div>

                    <div className='hidden md:grid md:grid-cols-4 md:gap-4 md:order-3 md:mt-14 w-full'>
                        <Creation image={images.deepEarthDesktop} title="DEEP EARTH" type="desktop" />
                        <Creation image={images.nightArcadeDesktop} title="NIGHT ARCADE" type="desktop" />
                        <Creation image={images.soccerTeamDesktop} title="SOCCER TEAM VR" type="desktop" />
                        <Creation image={images.gridDesktop} title="THE GRID" type="desktop" />
                        <Creation image={images.fromAboveDesktop} title="FROM UP ABOVE VR" type="desktop" />
                        <Creation image={images.pocketBorealisDesktop} title="POCKET BOREALIS" type="desktop" />
                        <Creation image={images.curiosityDesktop} title="THE CURIOSITY" type="desktop" />
                        <Creation image={images.fishEyeDesktop} title="MAKE IT FISHEYE" type="desktop" />
                    </div>
                    <button className='border border-black px-9 py-2 tracking-widest font-alata mt-4 hover:bg-black hover:text-white md:order-2 md:mt-0'>SEE ALL</button>
                </div>
            </div >
        </>
    )
}

export default MainContent