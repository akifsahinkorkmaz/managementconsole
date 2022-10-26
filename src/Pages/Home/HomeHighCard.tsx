import React from 'react';

interface Icard {
  title: string,
  value: string,
  icon: string,
  moreToRight?: boolean,
}

interface IHomeHighCards {
  bankBalance: string,
  jobRemainig: string,
  employees: string,
  spendings: string,
}

function HomeHighCards(props: IHomeHighCards) {

  let cards: Icard[] = [
    {
      title: "Your bank balance",
      value: props.bankBalance,
      icon: "https://akifsahinkorkmaz.github.io/managementconsole/media/home/cards/bank.png",
    },
    {
      title: "Tickets remaining",
      value: props.jobRemainig,
      icon: "https://akifsahinkorkmaz.github.io/managementconsole/media/home/cards/stats.png",
    },
    {
      title: "Employees working today",
      value: props.employees,
      icon: "https://akifsahinkorkmaz.github.io/managementconsole/media/home/cards/employees.png",
    },
    {
      title: "This week's card spending",
      value: props.spendings,
      icon: "https://akifsahinkorkmaz.github.io/managementconsole/media/home/cards/spending.png",
    },
  ]

  function setCard(card: Icard) {
    if (card.moreToRight === undefined || card.moreToRight ) {
      return (
        <div key={card.title} className='w-full bg-thwhite mx-2 p-3 shadow-lg rounded-xl text-left'>
          <div className='flex items-center justify-between'>
            <img src={card.icon} alt={card.title} />
              <div className='w-6 h-6 rounded-full hover:bg-thbg group/more pb-[3px] pt-[4px] px-2.5 transition-all cursor-pointer relative'>
                <div className='w-1 h-1 rounded-full bg-black my-[1px]'></div>
                <div className='w-1 h-1 rounded-full bg-black my-[1px]'></div>
                <div className='w-1 h-1 rounded-full bg-black my-[1px]'></div>

                <nav className='absolute top-4 left-3 w-64 rounded-lg shadow-lg bg-white hidden group-hover/more:block group-focus-within/more:block'>
                  <ul className=' list-none'>
                    <li className='even:bg-thlpurp p-2 hover:underline'><a href="/" className='flex items-center justify-start'><img src="https://akifsahinkorkmaz.github.io/managementconsole/media/home/cards/bankPayment.png" alt="Payment"/><p className='ml-4'>Make payment</p></a></li>
                    <li className='even:bg-thlpurp p-2 hover:underline'><a href="/" className='flex items-center justify-start'><img src="https://akifsahinkorkmaz.github.io/managementconsole/media/home/cards/bankBalance.png" alt="Balance"/><p className='ml-4'>View balance details</p></a></li>
                    <li className='even:bg-thlpurp p-2 hover:underline'><a href="/" className='flex items-center justify-start'><img src="https://akifsahinkorkmaz.github.io/managementconsole/media/home/cards/bankAccount.png" alt="Account"/><p className='ml-4'>View account details</p></a></li>
                  </ul>
                </nav>
              </div>
          </div>
          <p className='text-2xl font-bold my-4'>{card.value}</p>
          <h2 className='text-base'>{card.title}</h2>
        </div>
      )
    } else {
      return (
        <div key={card.title} className='w-full bg-thwhite mx-2 p-3 shadow-lg rounded-xl text-left'>
          <div className='flex items-center justify-between'>
            <img src={card.icon} alt={card.title} />
              <div className='w-6 h-6 rounded-full hover:bg-thbg group/more pb-[3px] pt-[4px] px-2.5 transition-all cursor-pointer relative'>
                <div className='w-1 h-1 rounded-full bg-black my-[1px]'></div>
                <div className='w-1 h-1 rounded-full bg-black my-[1px]'></div>
                <div className='w-1 h-1 rounded-full bg-black my-[1px]'></div>

                <nav className='absolute top-4 right-3 w-64 rounded-lg shadow-lg bg-white hidden group-hover/more:block group-focus-within/more:block'>
                  <ul className=' list-none'>
                    <li className='even:bg-thlpurp p-2 hover:underline'><a href="/" className='flex items-center justify-start'><img src="https://akifsahinkorkmaz.github.io/managementconsole/media/home/cards/bankPayment.png" alt="Payment"/><p className='ml-4'>Make payment</p></a></li>
                    <li className='even:bg-thlpurp p-2 hover:underline'><a href="/" className='flex items-center justify-start'><img src="https://akifsahinkorkmaz.github.io/managementconsole/media/home/cards/bankBalance.png" alt="Balance"/><p className='ml-4'>View balance details</p></a></li>
                    <li className='even:bg-thlpurp p-2 hover:underline'><a href="/" className='flex items-center justify-start'><img src="https://akifsahinkorkmaz.github.io/managementconsole/media/home/cards/bankAccount.png" alt="Account"/><p className='ml-4'>View account details</p></a></li>
                  </ul>
                </nav>
              </div>
          </div>
          <p className='text-2xl font-bold my-4'>{card.value}</p>
          <p className='text-base'>{card.title}</p>
        </div>
      )
    }
  }


  return (
    <div className='flex items-center justify-spacebetween'>
      {cards.map((card: Icard, ind) => {
        card.moreToRight = (ind < cards.length/2) ? true : false;
        return setCard(card)
      })}
    </div>
  );
}

export default HomeHighCards;
