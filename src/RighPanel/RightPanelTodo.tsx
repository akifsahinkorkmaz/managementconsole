import React, {useState, useEffect} from 'react';

import todoAPI, {Itodo} from '../api/todos';

function RightPannelTodo() {
  const [data, setData] = useState<Itodo[]>()

  useEffect(()=> {
    function fetcProgress() {
      const response: Itodo[] = JSON.parse( /* await */ todoAPI() );
      setData(response);
    }
    fetcProgress()

    // fetch every 10s
    const timer: number | NodeJS.Timer = setInterval(fetcProgress, 10000);

    // Cleanup
    return () => {
      clearInterval(timer);
    }
  }, []);

  function setTodo (key: number, title:string, date:string, src:string): JSX.Element {
      return (
        <a key={key} href="/" className="flex items-center justify-start my-3">
          <img src={src} alt={title}/>
          <div className='ml-4'>
            <h2 className='text-sm font-semibold text-left'>{title}</h2>
            <p className='text-xs text-left'>{date}</p>
          </div>
        </a>
      )
  }

  return (
    <div className='w-52'>
      <h1 className='font-semibold text-base text-left'>Your to-Do list</h1>
      {data ? (
        /* since React v16.2 fragments (<></>) are introduced to solve JSX parent problem */
        <> 
        {data.map((todo: Itodo) => {return setTodo(todo.key, todo.title, todo.date, todo.icon)})}
        </>
      ) : (<span> Loading... </span>)}
    </div>
  );
}

export default RightPannelTodo;
