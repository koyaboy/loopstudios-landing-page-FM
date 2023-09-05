import React from 'react'

const Creation = ({ image, title, type }) => {
    return (
        <div className='relative mb-5 w-full bg-red'>
            <img src={image} alt={title} className='w-full' />
            {type === "mobile" && <div className='text-2xl leading-none text-white absolute top-[55%] w-[38%] left-[5%] heading'>{title}</div>}
            {type === "desktop" && <div className='text-2xl leading-none text-white absolute top-[75%] w-[80%] left-[10%] heading'>{title}</div>}
        </div>
    )
}

export default Creation