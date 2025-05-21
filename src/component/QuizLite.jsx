import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Header from "./Header";
import { NavLink } from 'react-router-dom';

const QuizLite = () => {
    const [activeTab, setActiveTab] = useState('tab1');
    const [stor, setStor] = useState([]);
    const [timers, setTimers] = useState({});
    const [durations, setDurations] = useState({});

    const coins = localStorage.getItem('coinReward');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/data/quizlist.json');
                const data = await response.json();
                setStor(data);

                const initialTimers = {};
                const quizDurations = {};

                data.forEach((item) => {
                    item.tab1.forEach((quiz) => {
                        quizDurations[quiz.id] = quiz.duration;

                        const storedEndTime = localStorage.getItem(`quiz_${quiz.id}_endTime`);
                        const currentTime = Math.floor(Date.now() / 1000);
                        if (storedEndTime) {
                            const remainingTime = parseInt(storedEndTime, 10) - currentTime;
                            initialTimers[quiz.id] = remainingTime > 0 ? remainingTime : 0;
                        } else {
                            const endTime = currentTime + quiz.duration;
                            localStorage.setItem(`quiz_${quiz.id}_endTime`, endTime);
                            initialTimers[quiz.id] = quiz.duration;
                        }
                    });
                });

                setTimers(initialTimers);
                setDurations(quizDurations);
            } catch (error) {
                console.error('Error fetching quiz data:', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimers((prevTimers) => {
                const updatedTimers = { ...prevTimers };
                const currentTime = Math.floor(Date.now() / 1000);

                Object.keys(updatedTimers).forEach((id) => {
                    if (updatedTimers[id] > 0) {
                        updatedTimers[id] -= 1;
                    } else {
                        const resetDuration = durations[id] || 0;
                        updatedTimers[id] = resetDuration;
                        const newEndTime = currentTime + resetDuration;
                        localStorage.setItem(`quiz_${id}_endTime`, newEndTime);
                    }
                });

                return updatedTimers;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [durations]);

    const formatTime = (val) => val.toString().padStart(2, '0');

    const data_item = (quiz) => {
        localStorage.setItem("quiz", JSON.stringify(quiz));
    };

    const coinschange = (entry) => {
        const previousCoins = parseInt(localStorage.getItem('coinReward') || '0', 10);
        const entryCost = parseInt(entry, 10);

        if (entryCost > 0 && previousCoins >= entryCost) {
            const updatedCoins = previousCoins - entryCost;
            localStorage.setItem('coinReward', updatedCoins);
        }
    };

    return (
        <>
            <Navbar />
            <Header Stors={coins} />

            <div>
                <ul className='border-b w-full border-gray-500 h-10 mt-4 text-white flex items-end justify-around'>
                    <li
                        onClick={() => setActiveTab('tab1')}
                        className={`text-xl font-normal w-[50%] text-center cursor-pointer pb-2 ${activeTab === 'tab1' ? 'border-b-4 border-white' : ''}`}
                    >
                        Quiz
                    </li>
                    <li
                        onClick={() => setActiveTab('tab2')}
                        className={`text-xl font-normal w-[50%] text-center cursor-pointer pb-2 ${activeTab === 'tab2' ? 'border-b-4 border-white' : ''}`}
                    >
                        IPL / Cricket
                    </li>
                </ul>
            </div>

            <div>
                {stor
                    .filter((item) => item.hading === activeTab)
                    .flatMap((item) =>
                        item.tab1.map((quiz) => {
                            const timeLeft = timers[quiz.id] || 0;
                            const hours = formatTime(Math.floor(timeLeft / 3600));
                            const minutes = formatTime(Math.floor((timeLeft % 3600) / 60));
                            const seconds = formatTime(timeLeft % 60);

                            return (
                                <div
                                    key={quiz.id}
                                    className='bg-white min-h-[125px] w-full rounded-xl py-[10px] px-[20px] mt-2'
                                >
                                    <div className='flex items-center gap-4'>
                                        <div className='icon'>
                                            <img src={quiz.mainimg} className='max-w-[55px]' alt="quiz-icon" />
                                        </div>
                                        <div className='ml-4'>
                                            <p className='text-[13px] font-semibold mb-[4px]'>{quiz.title}</p>
                                            <div className='flex items-center gap-1 flex-wrap'>
                                                <h1 className='font-bold text-[18px]'>{quiz.subject}</h1>
                                                <img
                                                    src='https://fetocdn.qureka.com/assets/newui_assets/newui/images/coinstack.png'
                                                    alt='coins'
                                                    className='max-w-[20px]'
                                                />
                                                <span className='font-bold text-[18px]'>{quiz.Winner}</span>
                                            </div>
                                            <p className='text-[#999] text-[12px]'>
                                                Winner announcement: {hours}:{minutes}:{seconds}
                                            </p>
                                        </div>
                                    </div>
                                    <div className='flex items-center justify-between mt-2'>
                                        <div className='flex items-center gap-1 text-green-500 text-[14px]'>
                                            <span className='h-[7px] w-[7px] rounded-full bg-green-500'></span>
                                            Live
                                        </div>
                                        <div className='flex items-center gap-1'>
                                            <p>Entry:</p>
                                            {quiz.img && <img src={quiz.img} className='max-w-[25px]' alt="entry-icon" />}
                                            <span className='text-[14px] font-semibold'>{quiz.entry}</span>
                                        </div>

                                        <NavLink
                                            to={
                                                quiz.entry === "FREE" || parseInt(quiz.entry, 10) === 0 || parseInt(coins, 10) >= parseInt(quiz.entry, 10)
                                                    ? "/Quizshow"
                                                    : ""
                                            }
                                            className='text-black text-center font-semibold text-[10px] rounded-[7px] py-[7px] px-[18px] border border-[#9015c5]'
                                            onClick={() => {
                                                data_item(quiz);
                                                if (quiz.entry !== "FREE" && parseInt(quiz.entry, 10) > 0) {
                                                    coinschange(quiz.entry);
                                                }
                                            }}
                                        >
                                            Play Now
                                        </NavLink>
                                    </div>
                                </div>
                            );
                        })
                    )}
            </div>
        </>
    );
};

export default QuizLite;
