import { useState } from 'react';

function FaqItem  ({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li className='md:px-12 md:py-8 px-2 py-4 bg-[#F8F8F8] md:mb-8 mb-4 cursor-pointer' 
    onClick={() => setIsOpen(!isOpen)}>
      <div className='flex'>
        <img
          src={isOpen ? '/assets/Icon.svg' : '/assets/Icon (1).svg'}
          className='md:pr-6 pr-2 cursor-pointer'
          alt={isOpen ? 'Close Icon' : 'Open Icon'}
        />
        <h2 className='md:text-xl text-base font-semibold'>{question}</h2>
      </div>
      <div>{isOpen && <p className='text-sm text-left'>{answer}</p>}</div>
    </li>
  );
};

export default FaqItem;
