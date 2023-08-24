import React, { useState } from 'react'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';

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

const Faq = () => {
  const [selected, setSelected] = useState(null);

  const toggleAccordion = (index) => {
    let currentSelected = selected;
    if (currentSelected === index) {
      return setSelected(null);
    }
    
    setSelected(index);
  }

  return (
    <div className='w-full py-16 px-6'>
      <div className='flex flex-col justify-center items-center text-center p-2'>
        <div className='slanted-container'>
          <p className='slanted-text font-medium text-base md:text-lg text-white bg-blue-500 py-1'>Frequently Asked Questions</p>
        </div>
        <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl mt-3'>Let Us Answer Your Questions</h1>
      </div>
        
      {/* Start of Accordion */}
      {/* End of Accordion */}
    </div>
  )
}

export default Faq