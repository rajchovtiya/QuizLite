import React from 'react';

const Header = () => {
    return (
        <div className='w-full flex items-center flex-col justify-center mt-8'>
            <div>
                <img src="https://fetocdn.qureka.com/assets/newui_assets/newui/images/coinstack.png" alt="" />
                <span id='availableBalance'></span>
            </div>
            <div>
                <img src="https://fetocdn.qureka.com/assets/newui_assets/newui/images/qlite-gif-opt.gif" alt="" className='w-[150px] h-[40px] mt-4' />
            </div>
        </div>
    );
}

export default Header;
