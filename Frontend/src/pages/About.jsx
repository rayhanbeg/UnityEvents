import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">About UnityEvents</h1>
        <div className="max-w-3xl mx-auto text-center text-gray-600">
          <p className="text-lg mb-6">
            UnityEvents is a platform dedicated to connecting people of all faiths through events and community support. Our mission is to foster unity, understanding, and collaboration among individuals and communities, regardless of their beliefs or backgrounds.
          </p>
          <p className="text-lg mb-6">
            Whether you're looking to attend a religious gathering, participate in a social event, or contribute to a charitable cause, UnityEvents provides a space for you to explore, connect, and grow.
          </p>
          <p className="text-lg">
            Join us in building a more inclusive and supportive world, one event at a time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;