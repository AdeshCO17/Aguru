import React from 'react';
import Header from './Header';
import Footer from './Footer';

function Contact() {
  return (
    <> <Header/>
    <div className="bg-cover bg-center min-h-screen flex items-center justify-center" style={{backgroundImage: "url('images/contact.jpg')"}}>
      <div className="container mx-auto py-8  ">
        <h1 className="text-3xl font-semibold text-center mb-6 text-white">Feedback</h1>
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <form className="p-6 bg-blue-600">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
              <input type="text" id="name" name="name" placeholder="Your Name" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
              <input type="email" id="email" name="email" placeholder="Your Email" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
              <textarea id="message" name="message" rows="4" className="w-full px-3 py-2 border rounded-md resize-none focus:outline-none focus:border-blue-500" placeholder="Your Message"></textarea>
            </div>
            <button type="submit" className="w-full  bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Submit</button>
          </form>
        </div>
      </div>
    </div>
<Footer/>
    </>
  );
}

export default Contact;
