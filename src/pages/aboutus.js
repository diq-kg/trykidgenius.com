import React from 'react';
import Layout from '../components/layout';
import Pad from '../components/pad';

export default function AboutUs() {
  return (
    <Layout>
      <Pad>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl font-brand-bold">About Us</h1>
          <div className="w-2/3 sm:w-3/4">
            <p className="pb-4 pt-6">
              We heard over and over again that child care operators really
              wanted a way to connect with parents! We heard this loud and clear
              and decided to undertake a large task. We have spent the last 5
              months building an entirely new tool that we call KidGenius!
              KidGenius is a tool that helps child care staff connect with
              parents on a daily basis. It will bring the staff and parent
              together like never before!
            </p>
            <p className="py-4">KidGenius will allow child care staff to:</p>
            <ul className="list-disc pl-8">
              <li>keep track of naps, meals, activities, and diaper changes</li>
              <li>snap and share photos of kids playing</li>
              <li>
                request items from the parents such as diapers or winter
                clothing
              </li>
              <li>log attendance of both children and staff members</li>
              <li>write daily notes about the childs progress and mood</li>
            </ul>
            <p className="py-4">
              One of the coolest features is that everyday the parent will
              automatically receive an email with the daily report card with
              information about their childs day. This report card allows the
              parents to get an inside look to what is happening at child care!
            </p>
            <p className="py-4">
              We understand that attendance is an important part of a great
              child care centre. Not only is it important for some provincial
              regulations, but it also helps the staff and parent keep track of
              care utilization. At the end of the month, staff get an email with
              each child’s attendance including daily hours and monthly hours.
            </p>
            <p className="font-bold">
              All of these features are included with KidGenius!
            </p>
          </div>
        </div>
      </Pad>
    </Layout>
  );
}
