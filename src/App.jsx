import React from 'react';
import QuizLite from './component/QuizLite.jsx';
import Intro from './component/Intro.jsx';
import { Route, Routes } from 'react-router-dom';
import Quizshow from './component/Quizshow.jsx';
import QuizRules from './component/QuizRules.jsx';
import Quiz from './component/quiz.jsx';
function App() {

  return (
    <div>
      <main className="max-w-[100%] md:max-w-[360px] px-2 py-3">
        <Routes>
          <Route path='QuizLite' element={<Intro />}></Route>
          <Route path='QuizLites' element={<QuizLite />}></Route>
          <Route path='Quizshow' element={<Quizshow />}></Route>
          <Route path='QuizRules' element={<QuizRules />}></Route>
          <Route path='Quiz' element={<Quiz />}></Route>

        </Routes>

      </main>

    </div>

  )
}

export default App
