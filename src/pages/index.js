import React from 'react';
import HomeComponent from '@/components/HomeComponent';

function Index() {
  const startRecording = () => {
    console.log("🎤 Recording started...");
    // You can plug in your speech recognition logic here
  };

  return (
    <div className="">
      <HomeComponent />
      <main className="bg-white w-full h-full flex flex-col items-center justify-center p-80">
        <button
          onClick={startRecording}
          className="mt-10 px-6 py-3 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700 transition"
        >
          🎤 Click to Start Recording
        </button>
      </main>
      <footer className="bg-gray-100 text-center text-gray-600 py-4 text-sm">
        © {new Date().getFullYear()} This is a footer
      </footer>
    </div>
    
  );
}

export default Index;
