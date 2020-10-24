import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

export default function PostPreview(props) {
  let date = new Date(props.date);
  return (
    <div className="flex flex-col pb-10 max-w-2xl">
      <div className="">
        <span className="text-gray-500">{date.toDateString()}</span>
      </div>
      <Link to={props.url}>
        <h1 className="font-normal text-2xl pt-2">{props.title}</h1>
      </Link>
      <div className="pt-6 text-gray-700">
        <p className="leading-loose font-thin">{props.fold}</p>
      </div>
      <Link to={props.url} className="pt-6 text-brand-primary font-medium">
        Read more →
      </Link>
    </div>
  );
}

PostPreview.propTypes = {
  tite: PropTypes.string,
  date: PropTypes.string,
  fold: PropTypes.string,
  url: PropTypes.string,
};
