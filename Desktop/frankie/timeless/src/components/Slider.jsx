import React, { useRef, useEffect, useState } from 'react';

const ImageSlider = () => {
  const images = [
    './img/img1.jpg',
    './img/img2.jpg',
    './img/img2.jpg',
    './img/img3.jpg',
    './img/img3.jpg',
    './img/img4.jpg',
    './img/img4.jpg',
    './img/img5.jpg',
  ];

  const sliderRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const scrollStep = 1;
    let animationFrameId;

    slider.scrollLeft = 0;

    const autoScroll = () => {
      if (!isHovered) {
        slider.scrollLeft += scrollStep;

        const halfScroll = slider.scrollWidth / 2;
        if (slider.scrollLeft >= halfScroll) {
          slider.scrollLeft = 0;
        }
      }

      animationFrameId = requestAnimationFrame(autoScroll);
    };

    autoScroll();

    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered]);

  const loopedImages = [...images, ...images];

  return (
    <section className="bg-gradient-to-r from-[#f7f2ef] to-[#fffaf7] py-10 px-4 sm:px-6 lg:px-12 transition-opacity duration-700">
      <h2 className="text-3xl md:text-4xl font-semibold text-center text-[#4b2c5e] mb-6 transform transition-all duration-500 hover:scale-105 hover:rotate-3d">
        Timeless Designs
      </h2>

      <div
        ref={sliderRef}
        className="overflow-x-auto whitespace-nowrap scrollbar-hide scroll-smooth"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex space-x-4 items-center">
          {loopedImages.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Slide ${idx + 1}`}
              className="h-40 sm:h-52 md:h-64 lg:h-72 w-auto rounded-xl object-cover flex-shrink-0 hover:scale-105 hover:brightness-110 transition-transform duration-300 shadow-md"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageSlider;
