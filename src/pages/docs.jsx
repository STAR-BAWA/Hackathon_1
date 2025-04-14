import React from 'react';

const Docs = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Voice-To-Code Documentation</h1>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Getting Started</h2>
          <p className="text-lg">
            To get started with Voice-To-Code, install the app, configure your microphone access, and launch the development environment.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Basic Commands</h2>
          <ul className="list-disc list-inside text-lg space-y-1">
            <li><strong>"Create function"</strong>: Generates a boilerplate function.</li>
            <li><strong>"Add for loop"</strong>: Inserts a standard for loop.</li>
            <li><strong>"Declare variable x as string"</strong>: Adds a variable declaration.</li>
            <li><strong>"Import React"</strong>: Adds an import statement for React.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Advanced Usage</h2>
          <p className="text-lg">
            Voice-To-Code supports custom templates, integration with ESLint, and multi-language support. Visit the settings to enable advanced features.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">FAQs</h2>
          <ul className="text-lg space-y-2">
            <li>
              <strong>Q:</strong> How do I reset the voice input?  
              <br />
              <strong>A:</strong> Use the "reset input" command or click the reset icon in the toolbar.
            </li>
            <li>
              <strong>Q:</strong> Can I export my code?
              <br />
              <strong>A:</strong> Yes, you can export to `.js`, `.jsx`, `.ts`, or `.json` formats from the export menu.
            </li>
          </ul>
        </section>

        <div className="text-center mt-12">
          <p className="text-md text-gray-700">
            Still need help? Reach out via our <a href="/contact" className="text-blue-600 hover:underline">Contact Page</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Docs;
