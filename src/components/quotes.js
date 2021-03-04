import React from 'react';
import PersonCard from '../components/person-card';

// images
import lucia from '../images/lucia.png';
import nicole from '../images/nicole.png';
import delaney from '../images/delaney.png';

const Avatar = ({ image }) => {
  return (
    <img
      className="inline-block mr-4 h-12 w-12 rounded-full"
      src={image}
      alt=""
    />
  );
};

const DefaultAvatar = () => {
  return (
    <div class="inline-block mr-4 h-12 w-12 rounded-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </div>
  );
};

function QuoteCard(props) {
  return (
    <div className="mb-8 flex flex-col lg:mb-0 lg:mx-2 justify-evenly items-start w-quotex h-quotey px-4 pt-4 pb-6 shadow-lg rounded-md">
      <p className="text-left text-md text-gray-800">{props.quote}</p>
      <PersonCard name={props.name} title={props.title} image={props.image} />
    </div>
  );
}

function Quotes() {
  const quotes = [
    {
      quote:
        'Easy way to communicate with families and staff. Allows us to be paperless for all communication. The team is always finding ways to add features to the app. They always ask for feedback and apply them',
      title: 'Supervisor',
      name: 'Karnit V',
      image: DefaultAvatar()
    },
    {
      quote:
        "It is an excellent way to keep in communication with the teachers and caregivers. I can receive daily reports of my child's school activities through a single channel",
      title: 'Parent',
      name: 'Lucía O',
      image: Avatar({ image: lucia }),
    },
    {
      quote:
        'The way that the menu and whole site is set up, I like how everything is easy to access and ready to use right away. Easy to train someone to use it as well which is always really helpful.',
      title: 'Childcare Worker',
      name: 'Nicole C',
      image: DefaultAvatar(),
    },
    {
      quote:
        'It is incredibly helpful for administration, especially for Alberta Child Care Claims. It also has helped with communication with families, which is paramount in our line of work.',
      title: 'Director',
      name: 'Delaney C',
      image: DefaultAvatar(),
    },
  ];
  return (
    <div className="flex flex-col justify-start items-center lg:mt-12">
      <h2 className="text-heading font-brand-bold text-center">
        Loved by both staff and parents
      </h2>
      <div className="mt-10 flex flex-col lg:flex-row justify-center items-center">
        {' '}
        {quotes.map((quote, idx) => (
          <QuoteCard
            key={idx}
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
