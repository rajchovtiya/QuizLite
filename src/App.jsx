import React from 'react';
import QuizLite from './component/QuizLite.jsx';
import Intro from './component/Intro.jsx';
import { Route, Routes } from 'react-router-dom';
function App() {

  return (
    <div>
      <main className="max-w-[100%] md:max-w-[360px] px-2 py-3">
        <Routes>
          <Route path='/' element={<Intro />}></Route>
          <Route path='QuizLite' element={<QuizLite />}></Route>

        </Routes>

      </main>

    </div>

  )
}

export default App
