import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import illustration from '../../images/illustration.png';

// export default function PostPreview(props) {
//   let date = new Date(props.date);
//   return (
//     <div className="flex flex-col pb-10 max-w-2xl">
//       <div className="">
//         <span className="text-gray-500">{date.toDateString()}</span>
//       </div>
//       <Link to={props.url}>
//         <h1 className="font-normal text-2xl pt-2 pb-3">{props.title}</h1>
//       </Link>
//       <p className="text-md font-medium text-gray-500">
//         <span className="text-sm">written by</span> {props.author}
//       </p>
//       <div className="pt-6 text-gray-700">
//         <p className="leading-loose font-thin">{props.fold}</p>
//       </div>
//       <Link to={props.url} className="pt-6 text-brand-primary font-medium">
//         Read more →
//       </Link>
//     </div>
//   );
// }

export default function PostPreview(props) {
  let date = new Date(props.date).toDateString();
  return (
    <Link to={props.url}>
      <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
        <div class="flex-shrink-0">
          {props.image && (
            <img
              class="h-48 w-full object-cover"
              src={props.image.publicURL}
              alt=""
            />
          )}
          {!props.image && (
            <img class="h-48 w-full object-cover" src={illustration} alt="" />
          )}
        </div>
        <div class="flex-1 bg-white p-6 flex flex-col justify-between">
          <div class="flex-1">
            <p class="text-sm font-medium text-indigo-600">
              <a href="#" class="hover:underline">
                Article
              </a>
            </p>
            <a href="#" class="block mt-2">
              <p class="text-md font-semibold text-gray-900">{props.title}</p>
              <p class="mt-3 text-sm text-gray-500">
                {props.excerpt}
                <Link
                  to={props.url}
                  className="pt-6 text-brand-primary font-medium"
                >
                  &nbsp; read more
                </Link>
              </p>
            </a>
          </div>
          <div class="mt-3 flex items-center">
            {/* <div class="flex-shrink-0">
            <a href="#">
              <span class="sr-only">{props.author}</span>
              <img
                class="h-10 w-10 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=YLXMe68Fft&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </a>
          </div> */}
            <div class="ml-3">
              <p class="text-sm font-medium text-gray-900">
                <a href="#" class="hover:underline">
                  {props.author}
                </a>
              </p>
              <div class="flex space-x-1 text-sm text-gray-500">
                <time datetime="2020-03-16">{date}</time>
                <span aria-hidden="true">&middot;</span>
                {/* <span>6 min read</span> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

PostPreview.propTypes = {
  tite: PropTypes.string,
  date: PropTypes.string,
  excerpt: PropTypes.string,
  url: PropTypes.string,
  image: PropTypes.Object,
};
