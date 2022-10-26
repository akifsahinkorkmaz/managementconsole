import React, {useEffect, useState} from 'react';

import homeCardAPI, {IhomeCard} from '../../api/homeCards';

// components
import HomeHighCards from './HomeHighCard';
import HomeLowCards from './HomeLowCards';
import HomeGraph from './HomeGraph';

function HomeCards() {

  const [data, setData] = useState<IhomeCard>()

  useEffect(()=> {
    function fetcProgress() {
      const response: IhomeCard = JSON.parse( /* await */ homeCardAPI() );
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
    data ? (
      <section>

      <HomeHighCards 
        bankBalance={data.bankBalance}
        jobRemainig={data.jobRemainig}
        employees={data.employees}
        spendings={data.spendings}
      ></HomeHighCards>
      
      <div className='flex items-center justify-between my-8 relative'>
        <HomeLowCards
          newClients={data.newClients}
          Invoices={data.invoicesOverdue}
        ></HomeLowCards>

        <HomeGraph title={data.revenue.title} data={data.revenue.data}></HomeGraph>
      </div>
    
      </section>
    ) : (<span>Loading...</span>)
  );
}

export default HomeCards;
