import React from 'react';
import IntialContact from '../images/initial-contact';
import DiscoverySession from '../images/discovery-session';
import Contracting from '../images/contracting';
import FastPrototyping from '../images/fast-prototyping';
import DesignPhase from '../images/design-phase';
import Develop from '../images/develop';

interface WorksItemProps {
  children: React.ReactNode;
  title: string;
}
const WorksItem: React.FC<WorksItemProps> = ({
  title,
  children,
}): JSX.Element => (
  <div className='col-span-1 p-3 rounded shadow-xl bg-white'>
    <div className='flex flex-col items-center'>
      <div className='flex justify-between items-center w-16 h-16'>
        {children}
      </div>
      <h1 className='text-2xl mb-2 font-bold'>{title}</h1>
      <p className='text-md text-gray-500 font-light text-center'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </div>
  </div>
);

const Works = (): JSX.Element => {
  return (
    <div className='relative py-16'>
      <div className='absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900'></div>
      <div className='relative'>
        <div className='text-center max-w-3xl mx-auto mb-16'>
          <h1 className='text-4xl mb-4 font-bold'>How Simple works</h1>
          <p className='text-lg text-gray-500 font-light'>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur excepteur sint occaecat
            cupidatat.
          </p>
        </div>
        <div className='max-w-6xl mx-auto'>
          <div className='md:grid md:grid-cols-3 md:gap-6'>
            <WorksItem title='Initial Contact'>
              <IntialContact />
            </WorksItem>
            <WorksItem title='Discovery Session'>
              <DiscoverySession />
            </WorksItem>
            <WorksItem title='Contracting'>
              <Contracting />
            </WorksItem>
            <WorksItem title='Fast Prototyping'>
              <FastPrototyping />
            </WorksItem>
            <WorksItem title='Design Phase'>
              <DesignPhase />
            </WorksItem>
            <WorksItem title='Develop & Launch'>
              <Develop />
            </WorksItem>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
