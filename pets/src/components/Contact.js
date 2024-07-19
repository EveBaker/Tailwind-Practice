import React from 'react';

const Contact = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p className="text-gray-600 mb-8">Contact form or contact information will be displayed here...</p>
        <div className="flex flex-wrap p-4 gap-4 justify-center">
          <img src="https://picsum.photos/300/200" alt="Placeholder 1" className="w-1/3 h-48 object-cover rounded-lg" />
          <img src="https://picsum.photos/301/200" alt="Placeholder 2" className="w-1/3 h-48 object-cover rounded-lg" />
          <img src="https://picsum.photos/302/200" alt="Placeholder 3" className="w-1/3 h-48 object-cover rounded-lg" />
          <img src="https://picsum.photos/303/200" alt="Placeholder 4" className="w-1/3 h-48 object-cover rounded-lg" />
          <img src="https://picsum.photos/304/200" alt="Placeholder 5" className="w-1/3 h-48 object-cover rounded-lg" />
          <img src="https://picsum.photos/305/200" alt="Placeholder 6" className="w-1/3 h-48 object-cover rounded-lg" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
