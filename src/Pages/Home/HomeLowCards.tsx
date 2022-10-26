import React from 'react';

interface Icard {
  title?: string
  value: string,
  percent: string,
  derivative: boolean,
}

interface IHomeLowCards {
  newClients: Icard,
  Invoices: Icard,
}

function HomeLowCards(props: IHomeLowCards) {

  let cards: Icard[] = [
    {
      title: "New clients",
      value: props.newClients.value,
      percent: props.newClients.percent,
      derivative: props.newClients.derivative
    },
    {
      title: "Invoices overdue",
      value: props.Invoices.value,
      percent: props.Invoices.percent,
      derivative: props.Invoices.derivative
    }, 
  ]


  function setCard(card: Icard) {
    if (card.derivative) {
      return (
        <div key={card.title} className='w-60 bg-thwhite mx-2 my-2 py-4 px-6 shadow-lg rounded-xl text-left'>
          <h2 className='font-bold mb-2'>{card.title}</h2>
          <div className='flex items-center justify-between'>
            <p className='font-semibold text-5xl'>{card.value}</p>
            <p className='py-1 px-3 rounded bg-thlgreen text-thgreen text-xs font-semibold'>{card.percent}</p>
          </div>
        </div>
      )
    } else {
      return (
        <div key={card.title} className='w-60 bg-thwhite mx-2 my-4 py-4 px-6 shadow-lg rounded-xl text-left'>
          <h2 className='font-bold mb-2'>{card.title}</h2>
          <div className='flex items-center justify-between'>
            <p className='font-semibold text-5xl'>{card.value}</p>
            <p className='py-1 px-3 rounded bg-thlred text-thred text-xs font-semibold'>{card.percent}</p>
          </div>
        </div>
      )
    }
  }


  return (
    <div className=''>
      {cards.map((card: Icard, ind) => {
        return setCard(card)
      })}
    </div>
  );
}

export default HomeLowCards;
