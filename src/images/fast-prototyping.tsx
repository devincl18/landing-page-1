import React from 'react';

const FastPrototyping = (): JSX.Element => (
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
      <g transform='translate(22.857 19.429)' strokeWidth='2'>
        <path
          className='stroke-current text-white'
          strokeLinecap='square'
          d='M12.571 4.571V0H0v25.143h12.571V20.57'
        ></path>
        <path className='stroke-current text-white' d='M16 12.571h8'></path>
        <path
          className='stroke-current text-white'
          strokeLinecap='square'
          d='M19.429 8L24 12.571l-4.571 4.572'
        ></path>
        <circle
          className='stroke-current text-blue-300'
          strokeLinecap='square'
          cx='12.571'
          cy='12.571'
          r='3.429'
        ></circle>
      </g>
    </g>
  </svg>
);

export default FastPrototyping;
