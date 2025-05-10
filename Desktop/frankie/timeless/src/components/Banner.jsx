import React, { useState, useEffect } from 'react';

const Carousel = () => {
  // Images to display in the carousel
  const images = [
    './img/img1.jpg',
    './img/img2.jpg',
    './img/img3.jpg',
    './img/img4.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Go to the next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Go to the previous image
  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  // Automatic image cycling every 3 seconds
  useEffect(() => {
    const interval = setInterval(nextImage, 3000); // 3000ms = 3 seconds
    return () => clearInterval(interval); // Clear the interval when component unmounts
  }, []);

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      {/* Carousel Image */}
      <div className="w-full h-[500px] overflow-hidden rounded-lg">
        <img
          src={images[currentIndex]}
          alt="carousel"
          className="w-full h-full object-cover transition-all duration-500"
        />
      </div>

      {/* Previous & Next Buttons */}
      <button
        onClick={prevImage}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full text-3xl text-gray-700 hover:bg-gray-200 transition-colors"
      >
        &lt;
      </button>
      <button
        onClick={nextImage}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full text-3xl text-gray-700 hover:bg-gray-200 transition-colors"
      >
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
