import React from "react";

const Home = () => {
  return (
    <main className='home'>
      <div className='home-inner-container'>
        <p className='welcome'>Welcome to the</p>
        <h2>FrontEnd Quiz</h2>

        <p>Select quiz type</p>
      </div>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React Js</li>
      </ul>
    </main>
  );
};

export default Home;
