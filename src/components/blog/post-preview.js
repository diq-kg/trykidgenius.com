import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

export default function PostPreview(props) {
  let date = new Date(props.date);
  return (
    <div className="flex flex-col pb-10">
      <div className="pb-1">
        <span className="font-mono">{date.toDateString()}</span>
      </div>
      <Link to={props.url}>
        <h1 className="font-brand-bold text-2xl">{props.title}</h1>
      </Link>
      <div className="pt-2 text-xl">{props.fold}</div>
    </div>
  );
}

PostPreview.propTypes = {
  tite: PropTypes.string,
  date: PropTypes.string,
  fold: PropTypes.string,
  url: PropTypes.string
};
