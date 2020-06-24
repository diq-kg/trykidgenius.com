import React from 'react';
import PropTypes from 'prop-types':

export default function PostPreview(props) {
  return (
    <div className="flex flex-col">
      <div className="pb-1">
        <span className="font-mono">{props.date}</span>
      </div>
      <h1 className="font-brand-bold text-2xl">{props.title}</h1>
      <div className="pt-2 text-xl">{props.fold}</div>
    </div>
  );
}

PostPreview.propTypes = {
  tite: PropTypes.string,
  date: PropTypes.date,
  fold: PropTypes.string
};
