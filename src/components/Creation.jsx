import React from 'react'

const Creation = ({ image, title, type }) => {
    return (
        <div className='relative mb-5 w-full'>
            <div className='creation-overlay'></div>
            <img src={image} alt={title} className='w-full' />
            {type === "mobile" && <div className='text-2xl leading-none text-white absolute top-[55%] w-[38%] left-[5%] heading sm:top-[60%] sm:w-[25%] min-[500px]:text-3xl z-20'>{title}</div>}
            {type === "desktop" && <div className='text-2xl leading-none text-white absolute top-[75%] w-[77%] left-[12%] heading lg:top-[80%] lg:w-[68%] min-[897px]:top-[82%] z-20 lg:text-3xl xl:w-[55%]'>{title}</div>}

        </div>
    )
}

export default Creation