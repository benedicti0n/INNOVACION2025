import React from 'react'
import RegisterBtn from '../RegisterBtn/RegisterBtn'

import IemLogo from "../../assets/Logo/iemLogo.webp"
import InnovacionLogo from "../../assets/Logo/innovacionLogo.webp"

const Navbar = () => {
    return (
        <div className='h-[4.5rem] w-full flex justify-between rounded-[10px] border-[#6A9C89] border-2 p-2 backdrop-blur-sm'>
            <div className='text-md text-white flex items-center font-[Tasa-SemiBold]'>
                <span className='lg:mr-5 lg:ml-5'>Home</span>
                <span className='lg:mr-5'>Event</span>
                <span className='lg:mr-5'>Gallery</span>
                <span className='lg:mr-5'>Partners</span>
                <span>Contact Us</span>
            </div>

            <div className='flex'>
                <img src={IemLogo} alt="iemLogo" className='lg:mr-7' />
                <img src={InnovacionLogo} alt="InnovacionLogo" />
            </div>

            <RegisterBtn />
        </div>
    )
}

export default Navbar