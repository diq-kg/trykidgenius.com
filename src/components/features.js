import React from 'react';
import FeatureCard from './feature-card';
import Checklist from './feature-icons/checklist';
import Report from './feature-icons/report';
import Board from './feature-icons/board';
import Paper from './feature-icons/paper';
import Message from './feature-icons/message';
import Lock from './feature-icons/lock';
import Enrollments from './feature-icons/enrollments';
import Filter from './feature-icons/filter';
import Location from './feature-icons/location';

function Features(props) {
  const features = [
    {
      title: 'Multiple Locations',
      desc:
        'Manage multiple locations from single application without the hazzle',
      icon: <Location />,
    },
    {
      title: 'Enrollments & Waitlist',
      desc: 'Manage and build your enrollment lifecycle and waitlists',
      icon: <Enrollments />,
    },
    {
      title: 'Daily Report Cards',
      desc:
        'Keep track of meals, naps, activities, notes and more! All information is automatically emailed to parents in daily report.',
      icon: <Paper />,
    },
    {
      title: 'Attendance',
      desc:
        'Track attendance at your child care center and generate monthly reports in one go. Available for both kids and staff.',
      icon: <Checklist />,
    },
    {
      title: 'Report Generation',
      desc:
        'Generate custom reports based on age, attendance hours, or subsidy status. Export to Excel for advanced editing and daycare management.',
      icon: <Report />,
    },
    {
      title: 'In-App Messaging',
      desc:
        'The built-in messaging system makes communicating with parents quick and easy.',
      icon: <Message />,
    },
    {
      title: 'Role based permissions',
      desc: 'Manage role based access control for staff in all locations',
      icon: <Filter />,
    },
    {
      title: 'Bulletin Board',
      desc:
        'Meal schedules, annoucements, activties, and forms for parents to read.',
      icon: <Board />,
    },
    {
      title: 'Security',
      desc:
        'We take privacy seriously and ensure additional steps are taken to make your data private and secured.',
      icon: <Lock />,
    },
  ];

  return (
    <div id={props.id} className="flex flex-wrap pt-5 m:p-0">
      <div className="w-full">
        <h2 className="text-heading text-center font-brand-bold mb-4">
          Everything you need to manage in one place
        </h2>
      </div>
      <div className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
        {features.map((feature) => {
          return (
            <div className="flex justify-center pt-5 px-5 w-full sm:justify-end sm:p-0 sm:px-5 sm:pt-5">
              <FeatureCard
                title={feature.title}
                desc={feature.desc}
                icon={feature.icon}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Features;
