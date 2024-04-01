import React from 'react';
import Logo from '../Header/Logo';

const Footer = () => {
    const getToKnow=["About Us","Contact","ElectroCity Science"];
    const connectWith=["Facebook","Instagram","Twitter"];
    const devices=["Mobiles","Laptops","Tv","Watches"];

    return (
        // Entire Footer Container
        <footer className='bg-slate-600 py-8'>

            {/* Footer Content Wrapper */}
            <div className='container mx-auto flex flex-col md:flex-row justify-center text-center text-white px-4'>

                {/* Get to Know Section */}
                <div className='md:mr-8 mb-8 md:mb-0'>
                    <h2 className='text-md font-semibold mb-4'>Get to Know Us</h2>
                    <ul className='text-sm font-normal'>
                        {getToKnow.map((item, index) => (
                            <li key={index} className='cursor-pointer hover:underline'>{item}</li>
                        ))}
                    </ul>
                </div>

                {/* Devices Section */}
                <div className='md:mr-8 mb-8 md:mb-0'>
                    <h2 className='text-md font-semibold mb-4'>Devices</h2>
                    <ul className='text-sm font-normal'>
                        {devices.map((item, index) => (
                            <li key={index} className='cursor-pointer hover:underline'>{item}</li>
                        ))}
                    </ul>
                </div>

                {/* Connect with Us Section */}
                <div>
                    <h2 className='text-md font-semibold mb-4'>Connect with Us</h2>
                    <ul className='text-sm font-normal'>
                        {connectWith.map((item, index) => (
                            <li key={index} className='cursor-pointer hover:underline'>{item}</li>
                        ))}
                    </ul>
                </div>

            </div>

            {/* Divider */}
            <hr className='w-full border-t border-gray-400 my-8'/>

            {/* Footer Bottom Section */}
            <div className='flex flex-col items-center justify-center text-white'>
                <Logo/>
                <p className='text-sm font-light'>© 2024, ElectroCity. All Rights Reserved</p>
            </div>
        </footer>
    );
};

export default Footer