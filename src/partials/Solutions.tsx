import React, { ReactNode } from 'react';

interface SolutionsItemsProp {
  children: ReactNode;
}
const SolutionsItem: React.FC<SolutionsItemsProp> = ({
  children,
}): JSX.Element => (
  <div className='flex items-center bg-white p-4 border shadow-md rounded mb-4'>
    <div className=''>
      <h1 className='text-2xl font-bold mb-1'>Building the Simple ecosystem</h1>
      <p className='font-light text-gray-500'>
        Take collaboration to the next level with security and administrative
        features built for teams.
      </p>
    </div>
    <div className='border rounded-full p-3 shadow-lg'>{children}</div>
  </div>
);
const Solutions = (): JSX.Element => {
  return (
    <div className='relative'>
      <div className='absolute inset-0 bg-gray-100 mb-16'></div>
      <div className='relative pt-16'>
        <div className='text-center max-w-3xl mx-auto my-4'>
          <h1 className='text-4xl mb-4 font-bold'>Explore the solutions</h1>
          <p className='text-xl text-gray-500 font-light'>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur excepteur sint occaecat
            cupidatat.
          </p>
        </div>
        <div className='max-w-6xl mx-auto'>
          <div className='md:grid md:grid-cols-12 md:gap-6'>
            <div className='md:col-span-7 lg:col-span-6'>
              <div className='my-4'>
                <h1 className='text-3xl font-bold mb-4'>
                  Powerful suite of tools
                </h1>
                <p className='text-xl font-light text-gray-500'>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore pariatur. Excepteur sint occaecat cupidatat non
                  proident, sunt in culpa.
                </p>
              </div>
              <div className=''>
                <SolutionsItem>
                  <svg
                    className='w-3 h-3 fill-current'
                    viewBox='0 0 12 12'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z'></path>
                  </svg>
                </SolutionsItem>
                <SolutionsItem>
                  <svg
                    className='w-3 h-3 fill-current'
                    viewBox='0 0 12 12'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M11.854.146a.5.5 0 00-.525-.116l-11 4a.5.5 0 00-.015.934l4.8 1.921 1.921 4.8A.5.5 0 007.5 12h.008a.5.5 0 00.462-.329l4-11a.5.5 0 00-.116-.525z'></path>
                  </svg>
                </SolutionsItem>
                <SolutionsItem>
                  <svg
                    className='w-3 h-3 fill-current'
                    viewBox='0 0 12 12'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M11.334 8.06a.5.5 0 00-.421-.237 6.023 6.023 0 01-5.905-6c0-.41.042-.82.125-1.221a.5.5 0 00-.614-.586 6 6 0 106.832 8.529.5.5 0 00-.017-.485z'
                      fill='#191919'
                    ></path>
                  </svg>
                </SolutionsItem>
              </div>
            </div>
            <div className='md:col-span-5 lg:col-span-6'>
              <div className='relative'>
                <img
                  src='https://simple.cruip.com/static/media/features-bg.69c5091d.png'
                  alt=''
                />
                <img
                  className='absolute top-1/3 left-0 transform animate-float'
                  src='data:image/png;base64,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'
                  alt=''
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
