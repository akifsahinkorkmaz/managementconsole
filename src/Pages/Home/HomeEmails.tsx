import React, {useState, useEffect} from 'react';

import emailAPI, {Iemail} from '../../api/emails';

function HomeEmails() {

  const [data, setData] = useState<Iemail[]>()

  useEffect(()=> {
    function fetcProgress() {
      const response: Iemail[] = JSON.parse( /* await */ emailAPI() );
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

  function setEmail(email: Iemail) {
    return (
      <tr key={email.key} className='h-12 w-full border-x-[16px] border-transparent hover:bg-thwhite'>
        <td><img src={email.avatar} alt="" /></td>
        <td><p className='text-xs'>{email.from}</p></td>
        <td><p className='text-xs'>{email.topic}</p></td>
        <td><p className='text-xs text-right'>{(email.date.datePrefix ? email.date.datePrefix : email.date.date) + " " + email.date.time}</p></td>
      </tr>
    )
  }
  return (
    <section className='h-[40vh] w-full px-3 text-left'>
      <h1 className='font-bold text-xl mb-3'>Recent emails</h1>
      {data? (
      <table className='w-full'>
        <tbody>
        {data.map((email: Iemail) => {return setEmail(email)})}
        </tbody>
      </table>
      ) : (<span> Loading... </span>)}
    </section>
  );
}

export default HomeEmails;
