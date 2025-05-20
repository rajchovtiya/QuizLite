import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const question_answer = [
    {
        question: "What is 15th August celebrated as?",
        options: ["Republic Day", "Independence Day", "Christmas Day"],
        answer: "Independence Day",
    },
    {
        question: "Identify the mythical creature.",
        options: ["Dragonfly", "Komodo dragon", "Dragon"],
        answer: "Dragon",
    },
];

const Intro = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [isQuizFinished, setIsQuizFinished] = useState(false);
    const [correctCount, setCorrectCount] = useState(0);

    const handleOptionClick = (option) => {
        if (selectedOption !== null) return;
        setSelectedOption(option);

        const currentAnswer = question_answer[currentQuestionIndex].answer;
        let newCorrectCount = correctCount;
        if (option === currentAnswer) {
            newCorrectCount += 1;
            setCorrectCount(newCorrectCount);
        }

        setTimeout(() => {
            setSelectedOption(null);
            if (currentQuestionIndex + 1 < question_answer.length) {
                setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
            } else {
                // Store coin reward in localStorage
                const coins = newCorrectCount === 2 ? 300 : newCorrectCount === 1 ? 150 : 100;
                localStorage.setItem('coinReward', coins);
                setIsQuizFinished(true);
            }
        }, 1000);
    };

    const getCoinReward = () => {
        const coins = localStorage.getItem('coinReward');
        return coins ? parseInt(coins, 10) : 0;
    };

    const currentQuestion = question_answer[currentQuestionIndex];

    return (
        <div>
            <div>
                {!isQuizFinished ? (
                    <div className="transition-all duration-300 ease-in-out">
                        <div id="AD_class" className='w-full h-[350px]'></div>

                        <p className='text-[#fcff07] font-semibold text-xl'>Let's get started,</p>
                        <p className='text-white text-[14px] mt-1'>
                            Answer 2 simple questions to get up to <span className='text-[#fcff07]'>300 coins</span> now:
                        </p>
                        <h3 className='text-white text-[20px] mt-2 leading-[28px] font-normal'>
                            <span>{currentQuestionIndex + 1}</span>/2 - <span>{currentQuestion.question}</span>
                        </h3>
                        <div className='mt-9 flex flex-col gap-4'>
                            {currentQuestion.options.map((option, index) => {
                                const isCorrect = option === currentQuestion.answer;
                                const isSelected = option === selectedOption;
                                const baseClass = 'cursor-pointer text-white px-4 py-3 rounded-md text-sm border border-white transition-colors duration-200';
                                const selectedClass = isSelected
                                    ? isCorrect
                                        ? 'bg-green-600'
                                        : 'bg-red-600'
                                    : 'bg-transparent hover:bg-white/10';
                                return (
                                    <div
                                        key={index}
                                        className={`${baseClass} ${selectedClass}`}
                                        onClick={() => handleOptionClick(option)}>
                                        {option}
                                    </div>
                                );
                            })}
                        </div>

                        <div className='mt-6'>
                            <div className='mt-4 flex items-center justify-between'>
                                <p className='text-[#fcff07] font-semibold'>Test your knowledge instantly!</p>
                                <img src="https://fetocdn.qureka.com/assets/newui_assets/newui/images/logo-opt.png" alt="" className='max-w-[60px]' />
                            </div>
                            <ul className='text-white text-[12px]'>
                                <li className='mt-[4px] flex items-center '>
                                    <div className='h-[7px] w-[7px] bg-[#fcff07] rounded-full mr-3'></div>
                                    <p>Play quizzes in over 25 categories like GK, sports, bollywood, geography, business, history, IPL & more</p>
                                </li>
                                <li className='mt-[4px] flex items-center '>
                                    <div className='h-[7px] w-[7px] bg-[#fcff07] rounded-full mr-3'></div>
                                    <p>Compete with thousands of other quiz enthusiasts</p>
                                </li>
                                <li className='mt-[4px] flex items-center '>
                                    <div className='h-[7px] w-[7px] bg-[#fcff07] rounded-full mr-3'></div>
                                    <p>Collect Qureka Lite coins in every quiz</p>
                                </li>
                                <li className='mt-[4px] flex items-center '>
                                    <div className='h-[7px] w-[7px] bg-[#fcff07] rounded-full mr-3'></div>
                                    <p>Played & trusted by over 20 million users</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                ) : (
                    <div className=''>
                        <div className='new-introsuccess-page'>
                            <h3 className='text-[#9015c5] text-[20px] font-bold'>Well Played!</h3>
                            <div className='bg-[#f8f8f8] py-[1px] flex items-center mt-2 gap-2'>
                                <div className='flex items-center justify-center flex-col h-[85px] w-[85px] rounded-[50%] bg-[#fff548] border-[6px] border-[#fecd4d] leading-[16px]'>
                                    <p className='font-bold text-[20px]'>{getCoinReward()}</p>
                                    <span className='font-bold text-[15px]'>Coins</span>
                                </div>
                                <h6 className='font-bold text-[#3a3045] text-[24px] max-w-[180px] leading-[23px]'>
                                    Your <span className='text-[#ffae00] font-bold'>{getCoinReward()}</span>
                                    <span className='text-[#ffae00] font-bold'> Coins</span> <small>are now ready!</small>
                                </h6>
                            </div>
                            <div className='relative z-20 mt-2'>
                                <NavLink to="/QuizLite" className='loginbtn'>
                                    <span className='font-bold text-[23px] animate-textflow'>Let's Start</span>
                                </NavLink>
                            </div>
                            <span className='bottom-text'>
                                Play more quizzes to test your knowledge and to continue earning more coins
                            </span>
                        </div>
                        <div className='mt-6'>
                            <ul className='text-white text-[12px]'>
                                <li className='mt-[4px] flex items-center '>
                                    <div className='h-[7px] w-[7px] bg-[#fcff07] rounded-full mr-3'></div>
                                    <p>Over 20 million quiz enthusiasts have played with us</p>
                                </li>
                                <li className='mt-[4px] flex items-center '>
                                    <div className='h-[7px] w-[7px] bg-[#fcff07] rounded-full mr-3'></div>
                                    <p>We are India’s favorite Quiz destination</p>
                                </li>
                                <li className='mt-[4px] flex items-center '>
                                    <div className='h-[7px] w-[7px] bg-[#fcff07] rounded-full mr-3'></div>
                                    <p>We offer quizzes in over 25 categories like GK, sports, bollywood, geography, business, history, IPL & more</p>
                                </li>
                                <li className='mt-[4px] flex items-center '>
                                    <div className='h-[7px] w-[7px] bg-[#fcff07] rounded-full mr-3'></div>
                                    <p>Played & trusted by over 20 milion users</p>
                                </li>
                            </ul>

                            <div className='flex items-center gap-2 justify-center w-full mt-16'>
                                <img src="https://fetocdn.qureka.com/assets/newui_assets/newui/images/flag.png" alt="" className='max-w-[30px]' />
                                <p className='text-white text-[13px]'>Proudly Made In India</p>
                            </div>
                        </div>

                    </div>
                )}
            </div>
        </div>
    );
};

export default Intro;
