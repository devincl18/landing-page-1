import React from 'react';

const Footer = (): JSX.Element => {
  return (
    <div className='mb-16'>
      <div className='max-w-6xl mx-auto border-t-2 border-b-2 py-16 '>
        <div className='flex justify-between'>
          <div className=''>
            <a href='#0' className='mb-3'>
              <svg
                className='w-8 h-8'
                viewBox='0 0 32 32'
                xmlns='http://www.w3.org/2000/svg'
              >
                <defs>
                  <radialGradient
                    cx='21.152%'
                    cy='86.063%'
                    fx='21.152%'
                    fy='86.063%'
                    r='79.941%'
                    id='footer-logo'
                  >
                    <stop stopColor='#4FD1C5' offset='0%'></stop>
                    <stop stopColor='#81E6D9' offset='25.871%'></stop>
                    <stop stopColor='#338CF5' offset='100%'></stop>
                  </radialGradient>
                </defs>
                <rect
                  width='32'
                  height='32'
                  rx='16'
                  fill='url(#footer-logo)'
                  fillRule='nonzero'
                ></rect>
              </svg>
            </a>
            <p>Terms · Privacy Policy</p>
          </div>
          <div className='flex ml-auto text-gray-500 leading-8'>
            <div className='w-1/5 px-2'>
              <ul>
                <li className='text-gray-900 font-medium'>Products</li>
                <li>Web Studio</li>
                <li>DynamicBox Flex</li>
                <li>Programming Forms</li>
                <li>Integrations</li>
                <li>Command-line</li>
              </ul>
            </div>
            <div className='w-1/5 px-2'>
              <ul>
                <li className='text-gray-900 font-medium'>Resources</li>
                <li>Documentation</li>
                <li>Tutorials & Guides</li>
                <li>Blog</li>
                <li>Support Center</li>
                <li>Partners</li>
              </ul>
            </div>
            <div className='w-1/5 px-2'>
              <ul>
                <li className='text-gray-900 font-medium'>Company</li>
                <li>Home</li>
                <li>About us</li>
                <li>Company values</li>
                <li>Pricing</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            <div className='w-2/5 px-2'>
              <h3 className='text-gray-900 font-medium'>Subscribe</h3>
              <p>Get the latest news and articles to your inbox every month.</p>
              <div className='relative flex items-center max-w-xs'>
                <input
                  id='newsletter'
                  type='email'
                  className='form-input w-full text-gray-800 px-3 py-2 pr-12 text-sm rounded border-gray-300'
                  placeholder='Your email'
                />
                <button
                  type='submit'
                  className='absolute inset-0 left-auto'
                  aria-label='Subscribe'
                >
                  <span
                    className='absolute inset-0 right-auto w-px -ml-px my-2 bg-gray-300'
                    aria-hidden='true'
                  ></span>
                  <svg
                    className='w-3 h-3 fill-current text-blue-600 mx-3 flex-shrink-0'
                    viewBox='0 0 12 12'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z'
                      fillRule='nonzero'
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
