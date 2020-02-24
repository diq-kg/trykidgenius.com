import React from 'react';
import FeatureCard from './feature-card';
import Checklist from './feature-icons/checklist';
import Report from './feature-icons/report';
import Board from './feature-icons/board';
import Paper from './feature-icons/paper';
import Message from './feature-icons/message';
import Lock from './feature-icons/lock';

function Features() {
  const features = [
    {
      title: 'Attendance',
      desc:
        'Track attendance and generate monthly reports in one go - available for both kids and staff.',
      icon: <Checklist />
    },
    {
      title: 'Report Generation',
      desc:
        'Generate custom reports based on age, attendance hours, or subsidy status. Export to excel for advanced editing.',
      icon: <Report />
    },
    {
      title: 'Bulletin Bord',
      desc:
        'Meal schedules, annoucements, activties, and forms for parents to read.',
      icon: <Board />
    },
    {
      title: 'Daily Report Cards',
      desc:
        'Keep track of meals, naps, activities, notes and more! All information is automatically emailed to parents in daily report.',
      icon: <Paper />
    },
    {
      title: 'In-App Messaging',
      desc:
        'Built in messaging system makes communicating with parents quick and easy.',
      icon: <Message />
    },
    {
      title: 'Security',
      desc:
        'We take privacy seriously and ensure additional steps are taken to make your data private and secured.',
      icon: <Lock />
    }
  ];

  return (
    <div className="flex flex-wrap pt-5 m:p-0">
      <div className="w-full">
        <h2 className="text-3xl text-center font-brand-bold mb-4">
          Everything you need to manage in one place
        </h2>
      </div>
      <div className="flex justify-center pt-5 px-5 w-full sm:w-1/2 sm:justify-end sm:p-0 sm:px-5 sm:pt-5">
        <FeatureCard
          title={features[0].title}
          desc={features[0].desc}
          icon={features[0].icon}
        />
      </div>
      <div className="flex justify-center w-full py-5 px-5 sm:w-1/2 sm:justify-start sm:p-0 sm:px-5 sm:pt-5">
        <FeatureCard
          title={features[1].title}
          desc={features[1].desc}
          icon={features[1].icon}
        />
      </div>
      <div className="flex justify-center px-5 py-5 w-full sm:w-1/2 sm:justify-end sm:p-0 sm:px-5">
        <FeatureCard
          title={features[2].title}
          desc={features[2].desc}
          icon={features[2].icon}
        />
      </div>
      <div className="flex justify-center w-full py-5 px-5 sm:w-1/2 sm:justify-start sm:p-0 sm:px-5">
        <FeatureCard
          title={features[3].title}
          desc={features[3].desc}
          icon={features[3].icon}
        />
      </div>
      <div className="flex justify-center px-5 py-5 w-full sm:w-1/2 sm:justify-end sm:p-0 sm:px-5">
        <FeatureCard
          title={features[4].title}
          desc={features[4].desc}
          icon={features[4].icon}
        />
      </div>
      <div className="flex justify-center w-full pt-5 px-5 sm:w-1/2 sm:justify-start sm:p-0 sm:px-5">
        <FeatureCard
          title={features[5].title}
          desc={features[5].desc}
          icon={features[5].icon}
        />
      </div>
    </div>
  );
}

export default Features;
