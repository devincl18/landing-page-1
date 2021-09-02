import React from 'react';

const DesignPhase = (): JSX.Element => (
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
      <g strokeLinecap='square' strokeWidth='2'>
        <path
          className='stroke-current text-white'
          d='M20.571 20.571h13.714v17.143H20.571z'
        ></path>
        <path
          className='stroke-current text-blue-300'
          d='M38.858 26.993l6.397 1.73-4.473 16.549-13.24-3.58'
        ></path>
      </g>
    </g>
  </svg>
);

export default DesignPhase;
