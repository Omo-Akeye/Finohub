import FaqItem from "./FaqItem";
const faqData = [
    {
      question: 'How can I get started?',
      answer:
        'Lorem ipsum dolor sit amet consectetur. Sed nibh nunc in commodo in sagittis augue sollicitudin. Cursus facilisi amet ut cras pretium commodo ullamcorper. Enim ut venenatis et dictum purus feugiat mattis vitae congue. Id nibh vitae cursus justo sociis.',
    },
    {
        question: 'Can I get the right information faster?',
        answer:
          'Lorem ipsum dolor sit amet consectetur. Sed nibh nunc in commodo in sagittis augue sollicitudin. Cursus facilisi amet ut cras pretium commodo ullamcorper. Enim ut venenatis et dictum purus feugiat mattis vitae congue. Id nibh vitae cursus justo sociis.',
      },
      {
        question: 'How to shares features and demos?',
        answer:
          'Lorem ipsum dolor sit amet consectetur. Sed nibh nunc in commodo in sagittis augue sollicitudin. Cursus facilisi amet ut cras pretium commodo ullamcorper. Enim ut venenatis et dictum purus feugiat mattis vitae congue. Id nibh vitae cursus justo sociis.',
      },
      {
        question: 'How to get Insights from the loan?',
        answer:
          'Lorem ipsum dolor sit amet consectetur. Sed nibh nunc in commodo in sagittis augue sollicitudin. Cursus facilisi amet ut cras pretium commodo ullamcorper. Enim ut venenatis et dictum purus feugiat mattis vitae congue. Id nibh vitae cursus justo sociis.',
      },
      {
        question: 'Can i japa with the money without paying?',
        answer:
          'Lorem ipsum dolor sit amet consectetur. Sed nibh nunc in commodo in sagittis augue sollicitudin. Cursus facilisi amet ut cras pretium commodo ullamcorper. Enim ut venenatis et dictum purus feugiat mattis vitae congue. Id nibh vitae cursus justo sociis.',
      },
      

    
  ];

function Faqs () {
 
  return (
    <div className='w-[90%] m-auto mt-28'>
      <section className='text-center'>
        <h1 className='mb-8 text-3xl font-bold md:text-5xl md:mb-14' data-aos="fade-up">FAQS</h1>
        <ul>
          {faqData.map((faq, index) => (
            <FaqItem key={index} question={faq.question} answer={faq.answer}/>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Faqs;
