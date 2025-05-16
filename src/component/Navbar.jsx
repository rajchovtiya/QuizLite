import React from 'react';

const Navbar = () => {
    return (
        <nav className='h-[60px] w-full flex items-center justify-between'>
            <h1 className='text-white text-[20px] font-medium'>Qureka Lite</h1>
            <div>
                <a href="#" className='header_button'>Recent Winners</a>
            </div>
           
        </nav>
    );
}

export default Navbar;
