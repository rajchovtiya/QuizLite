import React from 'react';
import Navber from "./component/Navbar.jsx";
import Header from './component/header.jsx';
import QuizLite from './component/QuizLite.jsx';
function App() {

  return (
    <div>
      <main className="max-w-[100%] md:max-w-[360px] px-2 py-3">
        <Navber />
        <Header />
        <QuizLite />

      </main>

    </div>

  )
}

export default App
