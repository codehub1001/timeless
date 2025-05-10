import React from 'react';
import { FaClock, FaHandshake, FaPalette, FaLeaf, FaLightbulb, FaHeadset } from 'react-icons/fa';

const WhyChooseUs = () => {
  return (
    <section className="bg-gradient-to-r from-[#f7f2ef] to-[#fffaf7] py-16 px-4 sm:px-6 lg:px-12">
      <h2 className="text-4xl font-bold text-center text-[#4b2c5e] mb-12">
        Why Choose Timeless Interiors?
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Expertise in Timeless Design */}
        <div className="flex flex-col items-center text-center p-8 bg-white shadow-lg rounded-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:cursor-pointer transform-gpu">
          <FaClock className="text-5xl text-[#4b2c5e] mb-6" />
          <h3 className="text-2xl font-bold text-[#4b2c5e] mb-4">Expertise in Timeless Design</h3>
          <p className="text-lg text-gray-700">
            At Timeless Interiors, we specialize in creating designs that stand the test of time, blending classic style with modern functionality.
          </p>
        </div>

        {/* Personalized Approach */}
        <div className="flex flex-col items-center text-center p-8 bg-white shadow-lg rounded-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:cursor-pointer transform-gpu">
          <FaHandshake className="text-5xl text-[#4b2c5e] mb-6" />
          <h3 className="text-2xl font-bold text-[#4b2c5e] mb-4">Personalized Approach</h3>
          <p className="text-lg text-gray-700">
            We take the time to understand your vision, preferences, and lifestyle, creating a tailored design that fits your needs perfectly.
          </p>
        </div>

        {/* Attention to Detail */}
        <div className="flex flex-col items-center text-center p-8 bg-white shadow-lg rounded-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:cursor-pointer transform-gpu">
          <FaPalette className="text-5xl text-[#4b2c5e] mb-6" />
          <h3 className="text-2xl font-bold text-[#4b2c5e] mb-4">Attention to Detail</h3>
          <p className="text-lg text-gray-700">
            From furniture selection to color schemes, every detail matters. We ensure your space is designed with precision and care.
          </p>
        </div>

        {/* Sustainable Practices */}
        <div className="flex flex-col items-center text-center p-8 bg-white shadow-lg rounded-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:cursor-pointer transform-gpu">
          <FaLeaf className="text-5xl text-[#4b2c5e] mb-6" />
          <h3 className="text-2xl font-bold text-[#4b2c5e] mb-4">Sustainable Practices</h3>
          <p className="text-lg text-gray-700">
            Our commitment to sustainability ensures that your home is stylish, functional, and environmentally responsible.
          </p>
        </div>

        {/* Innovative Solutions */}
        <div className="flex flex-col items-center text-center p-8 bg-white shadow-lg rounded-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:cursor-pointer transform-gpu">
          <FaLightbulb className="text-5xl text-[#4b2c5e] mb-6" />
          <h3 className="text-2xl font-bold text-[#4b2c5e] mb-4">Innovative Solutions</h3>
          <p className="text-lg text-gray-700">
            We offer innovative design solutions that elevate your space, from smart home technology to unique furniture pieces.
          </p>
        </div>

        {/* Exceptional Customer Service */}
        <div className="flex flex-col items-center text-center p-8 bg-white shadow-lg rounded-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:cursor-pointer transform-gpu">
          <FaHeadset className="text-5xl text-[#4b2c5e] mb-6" />
          <h3 className="text-2xl font-bold text-[#4b2c5e] mb-4">Exceptional Customer Service</h3>
          <p className="text-lg text-gray-700">
            Our team is dedicated to providing exceptional service from start to finish, ensuring you have a seamless and enjoyable experience.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
