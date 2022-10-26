import React from 'react';


// Components
import RightPannelNav from './RightPanelNav';
import RightPannelCard from './RightPanelCard';
import RightPannelTodo from './RightPanelTodo';
import RightPannelMeeting from './RightPanelMeeting';

function RightPannel() {
  return (
    <section className='bg-thlpurp rounded-3xl h-[96vh] w-64 fixed top-1/2 right-8 -translate-y-1/2 py-3 flex flex-col items-center justify-between'>
      <RightPannelNav></RightPannelNav>
      <RightPannelCard></RightPannelCard>
      <RightPannelTodo></RightPannelTodo>
      <RightPannelMeeting></RightPannelMeeting>
    </section>
  );
}

export default RightPannel;
