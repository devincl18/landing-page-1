import React from 'react';

const Develop = (): JSX.Element => (
  <svg
    className='w-16 h-16 p-1 -mt-1 mb-2'
    viewBox='0 0 64 64'
    xmlns='http://www.w3.org/2000/svg'
  >
    <g fill='none' fillRule='evenodd'>
      <rect
        className='fill-current text-blue-600'
        width='64'
        height='64'
        rx='32'
      ></rect>
      <g strokeWidth='2'>
        <path
          className='stroke-current text-white'
          d='M32 37.714A5.714 5.714 0 0037.714 32a5.714 5.714 0 005.715 5.714'
        ></path>
        <path
          className='stroke-current text-white'
          d='M32 37.714a5.714 5.714 0 015.714 5.715 5.714 5.714 0 015.715-5.715M20.571 26.286a5.714 5.714 0 005.715-5.715A5.714 5.714 0 0032 26.286'
        ></path>
        <path
          className='stroke-current text-white'
          d='M20.571 26.286A5.714 5.714 0 0126.286 32 5.714 5.714 0 0132 26.286'
        ></path>
        <path
          className='stroke-current text-blue-300'
          d='M21.714 40h4.572M24 37.714v4.572M37.714 24h4.572M40 21.714v4.572'
          strokeLinecap='square'
        ></path>
      </g>
    </g>
  </svg>
);

export default Develop;
