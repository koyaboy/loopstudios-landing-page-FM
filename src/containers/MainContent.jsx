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
                {/* <div className='mt-24 bg-yellow'>
                    <h2 className='heading uppercase text-center text-3xl mb-4'>Our creations</h2>
                    <Creation image={ } title="DEEP EARTH" />
                </div> */}
            </div>
        </>
    )
}

export default MainContent