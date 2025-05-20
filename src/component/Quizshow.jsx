import React from 'react';
import { useNavigate } from 'react-router-dom';

const Quizshow = () => {
    const navigate = useNavigate();
    let show = JSON.parse(localStorage.getItem("quiz"))
    console.log(show)

    return (
        <button
            onClick={() => navigate(-1)}
            className="flex ">
            <span className='text-[45px] text-white h-[0]'> ←</span>
            <span className='text-[25px] text-white'>{show.title}</span>
        </button>
    );
};

export default Quizshow;
