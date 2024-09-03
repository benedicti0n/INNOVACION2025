import React from 'react'
import StarryBackground from "../StarryBackground/StarryBackground"
import RegisterBtn from "../RegisterBtn/RegisterBtn"

const Homepage = () => {
    return (
        // Home page
        <div className="h-full flex justify-center items-center flex-col pb-36">
            {/* <StarryBackground /> */}
            <h1 className="text-8xl text-white font-[Quantum] pb-11">INNOVACIÓN</h1>
            <RegisterBtn />
        </div>

    )
}

export default Homepage