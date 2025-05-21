import React from 'react';
import { useNavigate } from 'react-router-dom';

const QuizRules = () => {
    const navigate = useNavigate();

    return (
        <>
            <button
                onClick={() => navigate(-1)}
                className="flex items-center gap-4">
                <i class="fa-solid fa-arrow-left text-white text-2xl"></i>
                <span className='text-[25px] text-white'>Quiz Rules</span>
            </button>
            <div className='bg-white w-full  mt-2 px-4 py-4'>
                <h1 className='font-bold text-[20px]'>Rules: Quiz</h1>
                <ul>
                    <li className='mt-5 text-[15px] opacity-80'>1. You get 40 seconds to answer as many questions as you can (max questions you can answer is 10).</li>
                    <li className='mt-5 text-[15px] opacity-80'>2. There are 3 options for each question, one of them is the answer for the question.</li>
                    <li className='mt-5 text-[15px] opacity-80'>3. You get 20 points for each right answer.</li>
                    <li className='mt-5 text-[15px] opacity-80'>4. You get (-)10 points for each wrong answer.</li>
                    <li className='mt-5 text-[15px] opacity-80'>5. You get 10 points as hattrick bonus if you answer 3 questions correctly in a row.</li>
                    <li className='mt-5 text-[15px] opacity-80'>6. The winners for the quiz is decided depending upon the scores of all the users that participated in the quiz.</li>
                    <li className='mt-5 text-[15px] opacity-80'>7. Winners for each quiz will be declared at a pre-defined time.</li>
                </ul>

            </div>
            <div className='text-center mt-4'>
                <p className='text-white text-[13px]'>For details, kindly refer to terms of use.</p>
            </div>

        </>
    );
}

export default QuizRules;
