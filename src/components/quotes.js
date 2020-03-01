import React from 'react';
import PersonCard from '../components/person-card';

import dog from '../images/thisisfine.jpg';

function QuoteCard(props) {
  return (
    <div className="mb-8 flex flex-col lg:mb-0 lg:mx-2 justify-evenly items-start w-quotex h-quotey px-4 pt-4 pb-6 shadow-lg rounded-md">
      <p className="text-left text-lg">{props.quote}</p>
      <PersonCard name={props.name} title={props.title} image={props.image} />
    </div>
  );
}

function Quotes() {
  const quotes = [
    {
      quote:
        "It is an excellent way to keep in communication with the teachers and caregivers. I can receive daily reports of my child's school activities through a single channel",
      title: 'Parent',
      name: 'Lucía O',
      image: dog
    },
    {
      quote:
        'The way that the menu and whole site is set up, I like how everything is easy to access and ready to use right away. Easy to train someone to use it as well which is always really helpful.',
      title: 'Childcare Worker',
      name: 'Nicole C',
      image: dog
    },
    {
      quote:
        'It is incredibly helpful for administration, especially for Alberta Child Care Claims. It also has helped with communication with families, which is paramount in our line of work.',
      title: 'Director',
      name: 'Delaney C',
      image: dog
    }
  ];
  return (
    <div className="flex flex-col justify-start items-center">
      <h2 className="text-4xl font-brand-bold text-center">
        Loved by both staff and parents
      </h2>
      <div className="mt-10 flex flex-col lg:flex-row justify-center items-center">
        {' '}
        {quotes.map(quote => (
          <QuoteCard
            title={quote.title}
            name={quote.name}
            quote={quote.quote}
            image={quote.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Quotes;
