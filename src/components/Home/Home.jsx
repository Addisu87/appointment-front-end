// import { Carousel } from 'flowbite-react';
import React from 'react';
import { FaGreaterThan, FaLessThan } from 'react-icons/fa';

// const images = [
//   {
//     id: 1,
//     image:
//       'https://amazinglyweirds.files.wordpress.com/2015/02/232858_7_800.jpeg',
//     title: 'Motorcycle'
//   }
// ];

function Home() {
  return (
    <div id="indicators-carousel" className="relative" data-carousel="static">
      {/* Carousel wrapper */}
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        {/* Item 1 */}
        <div
          className="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-0 z-20"
          data-carousel-item="active"
        >
          <img
            src="../../assets/images/motor.jpeg"
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
      </div>
      {/* Slider indicators */}
      <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        <button
          type="button"
          className="w-3 h-3 rounded-full bg-white dark:bg-gray-800"
          aria-current="true"
          aria-label="Slide 1"
          data-carousel-slide-to="0"
        />
      </div>
      {/* Slider controls  */}
      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev=""
      >
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <FaLessThan />
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
      >
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <FaGreaterThan />
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>

    // <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
    //   <Carousel>
    //     <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
    //       {images.map((img) => (
    //         <li key={img.id}>
    //           <img src={img.image} alt={img.title} />
    //         </li>
    //       ))}
    //     </div>
    //   </Carousel>
    // </div>
  );
}

export default Home;
