import React from 'react'

const GradientBox = () => {
    return (
        <div className='border-2 border-[#16423C] bg-[#0000] rounded-xl backdrop-blur-[60px] p-10 relative z-10 m-[200px]'>
            <div className='h-[220px] w-[250px] bg-[#16423C] rounded-full absolute -top-5 -left-8 -z-10 filter blur-[90px]'></div>
            <div className='h-[220px] w-[250px] bg-[#16423C] rounded-full absolute -bottom-8 -right-8 -z-10 filter blur-[90px]'></div>
            {/* <h1 className='text-white'>hi</h1> */}
        </div>
    )
}

export default GradientBox