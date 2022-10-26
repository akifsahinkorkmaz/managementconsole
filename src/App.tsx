import React from 'react';
import './App.css';

// Panels
import LeftPannel from './LeftPanel/LeftPanel';
import RightPannel from './RighPanel/RightPanel';

// Pages
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className="App bg-thbg w-screen h-screen pl-28 pr-76 pr-[19rem] pt-12 pb-4 overflow-x-hidden">
        <LeftPannel></LeftPannel>
        <Home></Home>
        <RightPannel></RightPannel>
    </div>
  );
}

export default App;
