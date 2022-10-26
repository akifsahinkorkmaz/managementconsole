import React from 'react';

// Panels
import HomeCards from './HomeCards';
import HomeEmails from './HomeEmails';

function Home() {
  return (
    <main>
      <div className='flex items-end justify-between mb-4 ml-3'>
        <h1 className='text-left text-2xl font-bold'>Good morning, James!</h1>
        <div className='flex items-center justify-end'>
          <a href="/"><img className='m-1' src="/media/home/nav/left.png" alt="toLeft" /></a>
          <a href="/"><img className='m-1' src="/media/home/nav/right.png" alt="toRight" /></a>
        </div>
      </div>
      <HomeCards></HomeCards>
      <HomeEmails></HomeEmails>
    </main>
  );
}

export default Home;
