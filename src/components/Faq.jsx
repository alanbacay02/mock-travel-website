import React from 'react'
import { Accordion, AccordionItem as Item } from '@szhsin/react-accordion'
import { BsChevronDown } from 'react-icons/bs'


const FAQ_DATA = [
  {
    question: 'What destinations does Highlander offer?',
    answer: 'Highlander offers a wide range of destinations to choose from. Whether you\'re looking for exotic beach getaways, cultural city experiences, or adventurous mountain treks, we\'ve got you covered. Explore places like Bali, Paris, and the Swiss Alps!'
  },
  {
    question: 'How do I book a trip through Highlander?',
    answer: 'Booking your dream trip with Highlander is simple! Just head over to our website and use our user-friendly booking interface. Select your desired destination, travel dates, and preferences. Once you\'ve made your selections, you can proceed to payment. Our secure payment process ensures your information is safe.'
  },
  {
    question: 'Can I customize my travel itinerary?',
    answer: 'Absolutely! At Highlander, we understand that every traveler has unique preferences. That\'s why we offer customizable travel itineraries. During the booking process, you can indicate your specific interests and activities you\'d like to include in your trip. Our team will craft an itinerary that matches your preferences.'
  },
];

const AccordionItem = ({ header, ...rest }) => (
  <Item
    {...rest}
    header={({ state: { isEnter } }) => (
      <>
        <h2 className='font-medium sm:text-lg md:text-xl'>{header}</h2>
        <BsChevronDown
          className={`transition-transform duration-200 ease-out ${isEnter && 'rotate-180'}`}
        />
      </>
    )}
    className="border-b border-gray-100"
    buttonProps={{
      className: ({ isEnter }) =>
        `flex justify-between items-center w-full px-6 p-4 text-left transition-colors duration-200 ${
          isEnter && "bg-blue-600 text-white shadow-lg shadow-blue-400"
        }`
    }}
    contentProps={{
      className: "transition-all duration-200 ease-out"
    }}
    panelProps={{ className: "p-4" }}
  />
);

const Faq = () => {
  return (
    <div className='w-full py-16 px-6'>
      <div className='flex flex-col justify-center items-center text-center p-2'>
        <div className='slanted-container'>
          <p className='slanted-text font-medium text-base md:text-lg text-white bg-blue-500 py-1'>Frequently Asked Questions</p>
        </div>
        <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl mt-3'>Let Us Answer Your Questions</h1>
      </div>
        
      {/* Start of Accordion */}
      <div className='max-w-[900px] mx-auto my-7 md:my-12 border-t border-gray-100 shadow-lg'>
        <Accordion transition transitionTimeout={600}>
          {FAQ_DATA.map((item, index) => {
            return (
              <AccordionItem header={item.question} key={index}>
                <p className='px-4 py-3 sm:text-lg md:text-xl font-medium text-gray-600'>{item.answer}</p>
              </AccordionItem>
            )
          })}
        </Accordion>
      </div>
      {/* End of Accordion */}
    </div>
  )
}

export default Faq