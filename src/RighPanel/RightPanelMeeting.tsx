import React, {useState, useEffect} from 'react';

import meetingAPI, {Imeeting} from '../api/meetings';

function RightPannelMeeting() {
  const [data, setData] = useState<Imeeting>()

  useEffect(()=> {
    function fetcProgress() {
      const response: Imeeting = JSON.parse( /* await */ meetingAPI() );
      setData(response);
    }
    fetcProgress()

    // fetch every 10s
    const timer: number | NodeJS.Timer = setInterval(fetcProgress, 10000);

    // Cleanup
    return () => {
      clearInterval(timer);
    }
  }, [])

  return (
    <div className='w-56 bg-thbg rounded-xl drop-shadow-lg py-2 pr-3 pl-6 text-left'>
      {data ? (
        /* since React v16.2 fragments (<></>) are introduced to solve JSX parent problem */
        <> 
        {data.isActive ? (<div className='absolute top-8 left-2 w-2 h-2 rounded-xl bg-thpurp'></div>) : (<div className='absolute top-2 left-1 w-2 h-2 rounded-xl bg-gray-500'></div>)} 
        <h1 className='text-sm font-semibold'>{data.title}</h1>
        <p className='text-xs mb-2'>{data.date}</p>
        <p className='text-xs'>{data.body}</p>
        </>
      ) : (<span> Loading... </span>)}
    </div>
  );
}

export default RightPannelMeeting;
