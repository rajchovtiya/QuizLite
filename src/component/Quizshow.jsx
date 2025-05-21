import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Quizshow = () => {

    const [chake, setChake] = useState(false)
    const navigate = useNavigate();
    let show = JSON.parse(localStorage.getItem("quiz"))

    return (
        <>
            <button
                onClick={() => navigate(-1)}
                className="flex items-center gap-4">
                <i class="fa-solid fa-arrow-left text-white text-2xl"></i>
                <span className='text-[25px] text-white'>{show.title}</span>
            </button>
            <div className='h-[280px] w-full rounded-xl bg-white mt-6 px-2 py-2'>
                <div className='flex items-center justify-evenly gap-2'>
                    <div>
                        <img src={show.mainimg} alt="" className='w-[120px]' />
                    </div>
                    <div>
                        <h1 className='font-bold text-xl'>{show.title}</h1>
                        <h2 className='flex items-center  text-[30px] text-[#9014c5] font-semibold gap-2'>
                            <img src="https://fetocdn.qureka.com/assets/newui_assets/newui/images/coinstack.png" alt="" className='max-w-[35px]' />
                            {show.Winner}
                        </h2>
                        <a href="#" className='text-[#999] underline text-[12px]' onClick={() => { setChake(true) }}>View Rank Breakup</a>
                    </div>
                </div>
                <div>
                    <p className='flex items-center gap-2 mt-3'><i class="fa-solid fa-circle-check text-[#c1c1c1]"></i><span className='font-semibold text-[#333] text-[16px]'>You got 40 seconds</span></p>
                    <p className='flex items-center gap-2 mt-3'><i class="fa-solid fa-circle-check text-[#c1c1c1]"></i><span className='font-semibold text-[#333] text-[16px]'>Answer as many questions as you can</span></p>

                </div>
                <div className='flex items-center justify-center'>
                    <NavLink to={"/Quiz"} href="#" className='font-semibold border border-[#9014c5] py-[11px] px-[9px] text-[17px] w-[50%] text-center mt-4 rounded-xl text-[#9014c5]' >Play Quiz</NavLink>
                </div>
            </div>
            <div className='mt-6'>
                <ul className='text-white text-[12px]'>
                    <li className=' flex items-center  mt-3'>
                        <div className='h-[7px] w-[7px] bg-[#fcff07] rounded-full mr-3'></div>
                        <p className='max-w-[90%]'>24x7 Quiz Madness: Take the quiz-tastic rollercoaster that never stops! Jump into quizzes every hour.</p>
                    </li>
                    <li className=' flex items-center mt-3 '>
                        <div className='h-[7px] w-[7px] bg-[#fcff07] rounded-full mr-3'></div>
                        <p className='max-w-[90%]'>From brainy business to techy wonders, sports showdowns to movies, choose your flavor and dive in!</p>
                    </li>
                    <li className=' flex items-center  mt-3'>
                        <div className='h-[7px] w-[7px] bg-[#fcff07] rounded-full mr-3'></div>
                        <p className='max-w-[90%]'>Nail quiz questions with style and take away those shiny coins.</p>
                    </li>
                </ul>

                <div className='flex items-center gap-2 justify-center w-full mt-16'>
                    <NavLink to={"/QuizRules"} className='text-white text-[17px] cursor-pointer underline '>Quiz Rules</NavLink>
                </div>
            </div>
            {chake == true && <div className=''>
                <div className='modal-backdrop  '></div>
                <div className='w-full absolute top-[40%] z-50 left-0 '>
                    <div className='w-[350px] h-[261px] bg-white rounded-xl'>
                        <div className='flex items-center justify-center px-3 py-4'>
                            <h1 className='text-[#000] text-[20px] font-medium'>Rank Breakup</h1>
                            <button className='cursor-pointer absolute top-[2%] right-[10%]'>
                                <i class="fa-solid fa-xmark text-black text-[25px]" onClick={() => { setChake(false) }}></i>
                            </button>
                        </div>
                        <div>
                            <div className='flex items-center justify-between bg-[#efefef] h-[30px] w-full px-3 py-3'>
                                <h1 className='font-semibold text-[15px]'>Rank 1</h1>
                                <div className='flex items-center gap-1 '>
                                    <img src="https://fetocdn.qureka.com/assets/newui_assets/newui/images/coinstack.png" alt="" className='max-w-[25px]' />
                                    <h2 className='font-semibold text-[15px]'>25</h2>
                                </div>
                            </div>
                            <div className='flex items-center justify-between bg-white h-[30px] w-full px-3 py-3'>
                                <h1 className='font-semibold text-[15px]'>Rank 2 - 5</h1>
                                <div className='flex items-center gap-1 '>
                                    <img src="https://fetocdn.qureka.com/assets/newui_assets/newui/images/coinstack.png" alt="" className='max-w-[25px]' />
                                    <h2 className='font-semibold text-[15px]'>20</h2>
                                </div>
                            </div>
                            <div className='flex items-center justify-between bg-[#efefef] h-[30px] w-full px-3 py-3'>
                                <h1 className='font-semibold text-[15px]'>Rank 6 - 100</h1>
                                <div className='flex items-center gap-1 '>
                                    <img src="https://fetocdn.qureka.com/assets/newui_assets/newui/images/coinstack.png" alt="" className='max-w-[25px]' />
                                    <h2 className='font-semibold text-[15px]'>15</h2>
                                </div>
                            </div>
                            <div className='flex items-center justify-between bg-white h-[30px] w-full px-3 py-3'>
                                <h1 className='font-semibold text-[15px]'>Rank 101 - 200</h1>
                                <div className='flex items-center gap-1 '>
                                    <img src="https://fetocdn.qureka.com/assets/newui_assets/newui/images/coinstack.png" alt="" className='max-w-[25px]' />
                                    <h2 className='font-semibold text-[15px]'>10</h2>
                                </div>
                            </div>
                            <div className='flex items-center justify-between bg-[#efefef] h-[30px] w-full px-3 py-3'>
                                <h1 className='font-semibold text-[15px]'>Rank 201 - 400</h1>
                                <div className='flex items-center gap-1 '>
                                    <img src="https://fetocdn.qureka.com/assets/newui_assets/newui/images/coinstack.png" alt="" className='max-w-[25px]' />
                                    <h2 className='font-semibold text-[15px]'>5</h2>
                                </div>
                            </div>
                            <div className='flex items-center justify-between bg-white h-[30px] w-full px-3 py-3'>
                                <h1 className='font-semibold text-[15px]'>Rank 401 - 1135</h1>
                                <div className='flex items-center gap-1 '>
                                    <img src="https://fetocdn.qureka.com/assets/newui_assets/newui/images/coinstack.png" alt="" className='max-w-[25px]' />
                                    <h2 className='font-semibold text-[15px]'>2</h2>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            }
        </>
    );
};

export default Quizshow;
