import React from 'react';

function About() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <div className="max-w-5xl mx-auto py-12 px-6">
        <h1 className="text-4xl font-bold mb-6 text-center">About Voice-To-Code</h1>
        
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
          <p className="text-lg">
            Our goal is to revolutionize the way developers write code by enabling voice-driven development.
            With Voice-To-Code, you can speak your logic and turn it into boilerplate code automatically.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Key Features</h2>
          <ul className="list-disc list-inside text-lg space-y-1">
            <li>Real-time voice-to-code conversion</li>
            <li>Support for multiple programming languages</li>
            <li>Easy-to-use interface with intuitive commands</li>
            <li>Customizable code templates</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Meet the Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
            <div className="bg-white p-4 rounded-xl shadow-md text-center">
              <div className="w-24 h-24 mx-auto rounded-full bg-gray-300 mb-4"></div>
              <h3 className="font-semibold text-lg">Alice</h3>
              <p className="text-sm text-gray-600">Frontend Engineer</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-md text-center">
              <div className="w-24 h-24 mx-auto rounded-full bg-gray-300 mb-4"></div>
              <h3 className="font-semibold text-lg">Bob</h3>
              <p className="text-sm text-gray-600">Backend Developer</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-md text-center">
              <div className="w-24 h-24 mx-auto rounded-full bg-gray-300 mb-4"></div>
              <h3 className="font-semibold text-lg">Charlie</h3>
              <p className="text-sm text-gray-600">AI/ML Specialist</p>
            </div>
          </div>
        </section>

        <section className="text-center mt-12">
          <p className="text-md text-gray-700">
            Want to learn more or contribute? Visit our <a href="/docs" className="text-blue-600 hover:underline">documentation</a> page.
          </p>
        </section>
      </div>
    </div>
  );
}

export default About;
