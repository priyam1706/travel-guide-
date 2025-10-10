import React, { useState } from 'react';
import { Collapse, Card } from 'antd';

const { Panel } = Collapse;

const ContactAndFAQsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can perform further actions, such as sending the form data to a server
    console.log('Form submitted:', formData);
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="p-8 grid grid-cols-2 gap-8">
      <div>
        <Card className="p-8 ">
          <h1 className="text-3xl font-bold mb-4">Get In Touch</h1>
          <p className="mb-4">Have questions or feedback? We'd love to hear from you!</p>
          <ul className="list-disc ml-6">
            <li className="mb-2"><strong>Email:</strong> <a href="mailto:contact@travelguide.com" className="text-blue-500">contact@travelguide.com</a></li>
            <li className="mb-2"><strong>Phone:</strong> <a href="tel:+913456784490" className="text-blue-500">+913456784490</a></li>
            <li className="mb-2"><strong>Social Media:</strong> 
              <ul className="list-disc ml-6">
                <li><a href="https://www.facebook.com/example" className="text-blue-500" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                <li><a href="https://twitter.com/example" className="text-blue-500" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                <li><a href="https://www.instagram.com/example" className="text-blue-500" target="_blank" rel="noopener noreferrer">Medium</a></li>
                <li><a href="https://www.instagram.com/example" className="text-blue-500" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li><a href="https://www.instagram.com/example" className="text-blue-500" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              </ul>
            </li>
            <li className="mb-2"><strong>Address:</strong> Bodh Gaya, Bihar, India</li>
            <li className="mb-2"><strong>Live Chat:</strong> <a href="#" className="text-blue-500">Chat Now</a></li>
          </ul>
        </Card>
      </div>
      <div>
  <Card className="p-8  ">
    <h1 className="text-3xl font-bold mb-4">Contact Form</h1>
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
          placeholder="Enter your name" 
          className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:ring focus:ring-blue-500 focus:ring-opacity-100 text-gray-800 px-3 py-2" 
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
          placeholder="Enter your email" 
          className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:ring focus:ring-blue-500 focus:ring-opacity-50 text-gray-800 px-3 py-2"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
        <textarea 
          id="message" 
          name="message" 
          value={formData.message} 
          onChange={handleChange} 
          placeholder="Enter your message" 
          rows="4" 
          className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:ring focus:ring-blue-500 focus:ring-opacity-50 text-gray-800 px-3 py-2"
        ></textarea>
      </div>
      <button 
        type="submit" 
        className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Send Message
      </button>
    </form>
  </Card>
</div>


      <div>
        <h1 className="text-3xl font-bold mb-6">FAQs (Frequently Asked Questions)</h1>
        <Collapse accordion>
          <Panel header="General Questions" key="1" className="mb-4">
            <ul className="list-disc pl-6">
            <li className="mb-4"><strong>Question 1:</strong> What are the accepted payment methods?</li>
            <p className="ml-6"><strong>Answer:</strong> We accept payments via credit/debit cards and PayPal.</p>
            <li className="mb-4"><strong>Question 2:</strong> Is there a minimum age requirement for booking accommodations?</li>
            <p className="ml-6"><strong>Answer:</strong> The minimum age requirement for booking accommodations varies depending on the property. Please check the property's terms and conditions for more information.</p>
            <li className="mb-4"><strong>Question 3:</strong> Can I cancel my booking for free?</li>
            <p className="ml-6"><strong>Answer:</strong> Cancellation policies vary depending on the accommodation provider and the type of booking. Please refer to the booking confirmation or contact our customer support for assistance.</p>
            <li className="mb-4"><strong>Question 4:</strong> Are pets allowed in the accommodations?</li>
            <p className="ml-6"><strong>Answer:</strong> Pet policies vary by property. Some accommodations may allow pets with additional fees, while others may have restrictions. Please check the property's pet policy before booking.</p>
            <li className="mb-4"><strong>Question 5:</strong> How can I modify my booking?</li>
            <p className="ml-6"><strong>Answer:</strong> You can usually modify your booking through your account dashboard or by contacting our customer support. Modification policies vary by provider.</p>
          </ul>
          </Panel>
          <Panel header="Account and Booking" key="2" className="mb-4">
            <ul className="list-disc pl-6">
            <li className="mb-4"><strong>Question 6:</strong> Can I book accommodations without creating an account?</li>
            <p className="ml-6"><strong>Answer:</strong> Yes, you can browse available accommodations without creating an account. However, you'll need to create an account to complete a booking.</p>
            <li className="mb-4"><strong>Question 7:</strong> How do I reset my password?</li>
            <p className="ml-6"><strong>Answer:</strong> You can reset your password by clicking on the "Forgot Password" link on the login page and following the instructions provided.</p>
            <li className="mb-4"><strong>Question 8:</strong> Can I use multiple payment methods for a single booking?</li>
            <p className="ml-6"><strong>Answer:</strong> Unfortunately, we currently only support single-payment method bookings. You'll need to use a single payment method for each booking.</p>
            <li className="mb-4"><strong>Question 9:</strong> Are there any hidden fees?</li>
            <p className="ml-6"><strong>Answer:</strong> We strive to be transparent about all fees associated with your booking. Any additional fees, such as taxes or service charges, will be clearly displayed before you confirm your booking.</p>
            <li className="mb-4"><strong>Question 10:</strong> How can I request special accommodations?</li>
            <p className="ml-6"><strong>Answer:</strong> You can usually specify any special requests or accommodations during the booking process. Additionally, you can contact our customer support to discuss your specific needs.</p>
          
            </ul>
          </Panel>
        </Collapse>
      </div>
    </div>
  );
}

export default ContactAndFAQsPage;
