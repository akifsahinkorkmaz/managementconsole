import React, {useState, useEffect} from 'react';

import progressAPI, {Iprogress} from '../api/progresses';

function RightPannelCard() {
  const [data, setData] = useState<Iprogress>()

  useEffect(()=> {
    function fetcProgress() {
      const response: Iprogress = JSON.parse( /* await */ progressAPI() );
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
    <div className='w-56 min-h-[10rem] bg-thwhite rounded-lg drop-shadow-lg p-3'>
      {data ? (
        /* since React v16.2 fragments (<></>) are introduced to solve JSX parent problem */
        <> 
        <h1 className='font-semibold text-base text-left'>{data.title}</h1>
        <p className='text-sm text-left'>{data.state}</p>
        <div className='h-3 my-4 w-full relative'>
          <hr className='h-3 w-full rounded-xl absolute top-0 left-0 bg-thlpurp'/>
          <hr className='h-3 w-0 rounded-xl absolute top-0 left-0 bg-thpurp' style={{width: (data.statex*100) + "%"}}/>
        </div> 
        <p className='text-sm' > <strong>Estimated processing</strong><br />{data.estimated}</p>
        <a href="/" className='bg-thpurp rounded-lg drop-shadow-sm transition-all hover:drop-shadow-none hover:bg-thdpurp mt-4 h-8 w-full flex items-center justify-center'><span className='text-sm text-thwhite'>View Status</span></a>
        </>
      ) : (<span> Loading... </span>)}
    </div>
  );
}

export default RightPannelCard;
