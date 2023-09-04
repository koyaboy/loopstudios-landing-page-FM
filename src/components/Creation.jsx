import React from 'react'

const Creation = ({ image, title }) => {
    return (
        <div className='relative mb-5 w-full bg-red'>
            <img src={image} alt={title} className='w-full' />
            <div className='text-2xl leading-none text-white absolute top-[55%] w-[38%] left-[5%] heading'>{title}</div>
        </div>
    )
}

export default Creation