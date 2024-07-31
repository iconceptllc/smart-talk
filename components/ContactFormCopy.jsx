"use client"
import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [bname, setBname] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [services, setServices] = useState('');
  const [message, setMessage] = useState('');
  const [formStatus, setFormStatus] = useState('');
  const [captchaToken, setCaptchaToken] = useState('');
  const recaptchaRef = useRef(null);

  const handleCaptchaChange = (token) => {
    setCaptchaToken(token);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!captchaToken) {
      setFormStatus('error');
      console.error("Captcha token is missing");

      return;
    }

    const templateParams = {
      from_name: name,
      from_email: email,
      from_bname: bname,
      from_number: number,
      from_service: services,
      to_name: 'Smart Talk',
      message: message,
      'g-recaptcha-response': captchaToken,
    };

    emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      templateParams,
      process.env.NEXT_PUBLIC_EMAILJS_KEY
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setName('');
      setBname('');
      setEmail('');
      setNumber('');
      setServices('');
      setMessage('');
      setFormStatus('success');
      recaptchaRef.current.reset();
    })
    .catch((error) => {
      console.error('Error sending email:', error);
      console.log('Error details:', error.response);
      setFormStatus('error');
    });
  };

  return (
    <div className="flex items-center justify-center">
      <form className="p-2 rounded-md w-full max-w-lg" onSubmit={sendEmail}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <input
              type="text"
              id="name"
              value={name}
              className="p-2 bg-transparent border border-blue rounded text-white"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <input
              type="text"
              id="bname"
              value={bname}
              className="p-2 bg-transparent border border-blue rounded text-white"
              placeholder="Business Name"
              onChange={(e) => setBname(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <input
              type="text"
              id="number"
              value={number}
              className="p-2 bg-transparent border border-blue rounded text-white"
              placeholder="Contact Number"
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <input
              type="email"
              id="email"
              value={email}
              className="p-2 bg-transparent border border-blue rounded text-white"
              placeholder="Email ID"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col sm:col-span-2">
            <input
              type="text"
              id="services"
              value={services}
              className="p-2 bg-transparent border border-blue rounded text-white"
              placeholder="Services Interested"
              onChange={(e) => setServices(e.target.value)}
            />
          </div>
          <div className="flex flex-col sm:col-span-2">
            <textarea
              id="message"
              value={message}
              className="p-2 bg-transparent border border-blue rounded h-32 text-white"
              placeholder="Your Message"
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <div className="flex flex-col sm:col-span-2">
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
              size="invisible"
              onChange={handleCaptchaChange}
            />
          </div>
          <div className="flex justify-left sm:col-span-2">
            <button
              type="submit"
              className="bg-primary text-white py-2 px-16 rounded-md hover:bg-pink-700 transition"
            >
              Submit
            </button>
          </div>
        </div>
        {formStatus === 'success' && (
          <div className="mt-4 text-green">Form submitted successfully!</div>
        )}
        {formStatus === 'error' && (
          <div className="mt-4 text-red">Error in form submission!</div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;