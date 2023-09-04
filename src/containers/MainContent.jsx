import React from 'react'
import Creation from '../components/Creation'

import * as images from "../assets/images/images.js"


const MainContent = () => {
    return (
        <>
            <div className='px-6 py-20'>
                <div>
                    <img
                        src={images.interactiveMobile}
                        alt="image-interactive-mobile"
                        className='w-full'
                    />
                    <div className='px-4 text-center'>
                        <h2 className='heading uppercase mt-10 text-3xl'>  The leader in interactive VR</h2>
                        <p className='mt-3 text-dark-gray font-alata'>Founded in 2011, Loopstudios has been producing world-class virtual reality
                            projects for some of the best companies around the globe. Our award-winning
                            creations have transformed businesses through digital experiences that bind
                            to their brand.
                        </p>
                    </div>
                </div>

                {/* OUR CREATIONS */}
                <div className='mt-24 flex flex-col items-center'>
                    <h2 className='heading uppercase text-3xl mb-4'>Our creations</h2>
                    <div className='w-full'>
                        <Creation image={images.deepEarthMobile} title="DEEP EARTH" />
                        <Creation image={images.nightArcadeMobile} title="NIGHT ARCADE" />
                        <Creation image={images.soccerTeamMobile} title="SOCCER TEAM VR" />
                        <Creation image={images.gridMobile} title="THE GRID" />
                        <Creation image={images.fromAboveMobile} title="FROM UP ABOVE VR" />
                        <Creation image={images.pocketBorealisMobile} title="POCKET BOREALIS" />
                        <Creation image={images.curiosityMobile} title="THE CURIOSITY" />
                        <Creation image={images.fishEyeMobile} title="MAKE IT FISHEYE" />
                    </div>
                    <button className='border border-black px-9 py-2 tracking-widest font-alata mt-4'>SEE ALL</button>
                </div>
            </div>
        </>
    )
}

export default MainContent