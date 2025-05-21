import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Quiz = () => {
    const [quizData, setQuizData] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [score, setScore] = useState(0);
    const [quizFinished, setQuizFinished] = useState(false);
    const [coinsEarned, setCoinsEarned] = useState(0);

    const show = {
        title: '',
        mainimg: '',
        subject: '',
        ...JSON.parse(localStorage.getItem("quiz") || "{}")
    };

    useEffect(() => {
        const fetchQuizData = async () => {
            try {
                const res = await fetch("/data/queamdans.json");
                const data = await res.json();
                const matched = data.find(
                    (item) =>
                        item.hading?.toLowerCase().trim() === show.subject?.toLowerCase().trim()
                );
                if (matched) {
                    setQuizData(matched.que_ans || []);
                }
            } catch (error) {
                console.error("Error fetching quiz data:", error);
            }
        };
        fetchQuizData();
    }, [show.subject]);

    const handleOptionClick = (option) => {
        if (selectedOption !== null || quizFinished) return;

        setSelectedOption(option);

        const correct = quizData[currentQuestionIndex]?.answer;

        const isCorrect =
            option?.trim().toLowerCase() === correct?.trim().toLowerCase();

        if (isCorrect) {
            setScore((prev) => prev + 1);
        }

        setTimeout(() => {
            if (currentQuestionIndex + 1 < quizData.length) {
                setCurrentQuestionIndex((prev) => prev + 1);
                setSelectedOption(null);
            } else {
                const finalScore = score + (isCorrect ? 1 : 0);
                setCoinsEarned(finalScore >= 5 ? 400 : 0);
                setQuizFinished(true);
            }
        }, 500);
    };

    const restartQuiz = () => {
        setCurrentQuestionIndex(0);
        setSelectedOption(null);
        setScore(0);
        setCoinsEarned(0);
        setQuizFinished(false);
    };

    const currentQuestion = quizData[currentQuestionIndex];

    return (
        <div className='mt-5 p-4'>
            <div className='flex items-center gap-2'>
                <img src={show.mainimg} alt="quiz-logo" className="w-10 h-10 rounded" />
                <p className='text-white text-2xl font-normal'>{show.title}</p>
            </div>

            <div className='flex items-center justify-between text-white mt-10 font-normal text-[15px]'>
                <p>
                    <span>{currentQuestionIndex + 1}</span> / <span>{quizData.length}</span>
                </p>
                <p>Score: {score}</p>
            </div>

            {quizFinished ? (
                <div className='mt-10 text-white text-center'>
                    <h2 className='text-2xl font-bold mb-4'>🎉 Quiz Completed!</h2>
                    <p className='text-xl'>Your Score: {score} / {quizData.length}</p>
                    {coinsEarned > 0 ? (
                        <p className='text-green-400 text-lg mt-3'>
                            You earned {coinsEarned} coins!
                        </p>
                    ) : (
                        <p className='text-red-400 mt-3'>
                            You need at least 5 correct answers to earn coins.
                        </p>
                    )}
                    <div className='flex justify-center gap-4 mt-6'>
                        {coinsEarned > 0 && (
                            <button className='px-5 py-2 bg-green-500 rounded text-white font-semibold text-lg'>
                                Withdraw Coins
                            </button>
                        )}
                        <NavLink to={"/QuizLite"} className='px-5 py-2 bg-blue-500 rounded text-white font-semibold text-lg'>
                            Restart Quiz
                        </NavLink>
                    </div>
                </div>
            ) : (
                currentQuestion && (
                    <div className='mt-10'>
                        <p className='text-white text-2xl'>{currentQuestion.question}</p>
                        <div className='mt-8 grid gap-4'>
                            {currentQuestion.options?.map((option, idx) => {
                                let bgColor = 'bg-white text-black';
                                const isCorrect =
                                    option?.trim().toLowerCase() === currentQuestion?.answer?.trim().toLowerCase();
                                const isSelected =
                                    option?.trim().toLowerCase() === selectedOption?.trim().toLowerCase();

                                if (selectedOption !== null) {
                                    if (isCorrect) {
                                        bgColor = 'optionsth';
                                    } else if (isSelected) {
                                        bgColor = 'wrong';
                                    }
                                }

                                return (
                                    <div
                                        key={idx}
                                        onClick={() => handleOptionClick(option)}
                                        className={`cursor-pointer px-4 py-3 rounded-md border border-white font-semibold text-[18px] transition ${bgColor}`}
                                    >
                                        {option}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )
            )}
        </div>
    );
};

export default Quiz;
