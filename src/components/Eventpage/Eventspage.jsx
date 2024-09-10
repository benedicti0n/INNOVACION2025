import React from 'react'
import StarryBackground from '../StarryBackground/StarryBackground'
import GradientBox from '../GradientBox/GradientBox'

const Eventspage = () => {
    return (
        //  About us and events section 
        <div className="h-screen w-full bg-[#000] rounded-t-[40px] relative -top-[40px] border-2 border-[#16423C]" >
            <StarryBackground extraClass={"z-10"} />
            <div className='h-full lg:mx-40 lg:py-5 z-10'>
                <GradientBox extraClass="h-max-full w-full flex flex-col items-center justify-center">
                    <h1 className='text-4xl font-bold text-white'>About us</h1>
                    <p className='text-lg text-white'>We are a team of developers who are passionate about creating beautiful and functional websites.</p>
                </GradientBox>
            </div>
        </div>
    )
}

export default Eventspage