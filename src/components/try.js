import React from 'react';
import Baby from './feature-icons/baby';
import Laptop from './feature-icons/laptop';

function SimpleCard(props) {
  const buttonColor = props.primary
    ? 'bg-brand-primary text-white'
    : 'text-black border';
  return (
    <div className="flex flex-col justify-between items-center h-64 lg:w-card px-16">
      <div className="w-16 h-16 text-brand-primary bg-brand-secondary flex justify-center items-center rounded-full inline-block">
        {props.icon}
      </div>
      <h3 className="text-2xl font-semibold">{props.title}</h3>
      <p className="text-center">{props.body}</p>
      <button
        onClick={props.onClick}
        className={`w-48 h-12 mr-4 rounded font-semibold ${buttonColor} transition duration-150 ease-in-out hover:shadow-md`}
      >
        {props.action}
      </button>
    </div>
  );
}

function Try() {
  const cards = [
    {
      title: 'Get Started',
      action: 'Get Started',
      primary: true,
      body: 'Try Kidgenius free for 30 days, no credit card required.',
      icon: <Baby />,
      onClick: () =>
        (window.location.href = 'https://kidgenius.daycareiq.com/account/new')
    },
    {
      title: 'See How It Works',
      action: 'Request Demo',
      primary: false,
      body:
        'Our team is happy to walk you through the product and answer questions.',
      icon: <Laptop />,
      onClick: () => window.chaport.open()
    }
  ];

  return (
    <div className="flex flex-col items-center lg:mt-16">
      <h1 className="font-brand-bold text-heading text-center">
        Try Kidgenius free for 30 days
      </h1>
      <div className="flex flex-col lg:flex-row items-center justify-start lg:justify-center mt-6">
        <SimpleCard
          title={cards[0].title}
          icon={cards[0].icon}
          body={cards[0].body}
          primary={cards[0].primary}
          action={cards[0].action}
          onClick={cards[0].onClick}
        />
        <div className="w-64 lg:w-0 lg:h-64 border mt-10 mb-10 lg:m0 lg:mr-32 lg:ml-32"></div>
        <SimpleCard
          title={cards[1].title}
          icon={cards[1].icon}
          body={cards[1].body}
          primary={cards[1].primary}
          action={cards[1].action}
          onClick={cards[1].onClick}
        />
      </div>
    </div>
  );
}

export default Try;
