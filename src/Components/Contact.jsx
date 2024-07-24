import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_z9pnt78",
        "template_fflfipp",
        form.current,
        "g93s_oqi2Bwi7clej"
      )
      .then(
        () => {
          alert("Message sent successfully");
          console.log("SUCCESS!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message");
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div
      id="contact"
      className="min-h-screen flex flex-col md:flex-row justify-between items-center py-12 px-4 md:px-24 bg-black text-white"
    >
      <div className="md:w-1/2 mb-8 md:mb-0 px-14 mt-10">
        <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
        <p className="mb-6">
          Hi Everyone! Wishing you a wonderful day :) If you have any questions
          or suggestions, please feel free to email me. Thanks!
        </p>
        <div className="flex flex-col space-y-4">
          <div className="flex items-center">
            <svg
              className="w-6 h-6 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-7.41l-3.292-3.293a1 1 0 00-1.416 1.415l4 4a1 1 0 001.416 0l8-8a1 1 0 00-1.416-1.415L9 10.59z"
                clipRule="evenodd"
              />
            </svg>
            <span>Begusarai, Bihar, India</span>
          </div>
          <div className="flex items-center">
            <svg
              className="w-6 h-6 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M2.003 5.884l8 4.8a.75.75 0 00.747 0l8-4.8A.75.75 0 0018.5 5H1.5a.75.75 0 00-.497 1.326zM18 8.118l-7.5 4.5v5.243l7.25-4.352A.75.75 0 0018 13.5V8.118zM2 13.5a.75.75 0 001.25.547l7.25 4.352v-5.243l-7.5-4.5V13.5z" />
            </svg>
            <span>rahulkumarsahu8182@gmail.com</span>
          </div>
        </div>
      </div>
      <div className="md:w-1/2 bg-gradient-to-r from-green-600 to-blue-400 text-gray-800 p-8 rounded-lg shadow-md mt-10">
        <h2 className="text-2xl font-bold mb-4">Drop Us a Line</h2>
        <form ref={form} onSubmit={sendEmail}>
          <div className="mb-4">
            <label className="block font-medium text-2xl mb-2" htmlFor="name">
              Name*
            </label>
            <input
              type="text"
              name="from_name"
              id="name"
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-2xl font-medium mb-2" htmlFor="email">
              Email*
            </label>
            <input
              type="email"
              name="from_email"
              id="email"
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-2xl font-medium mb-2"
              htmlFor="message"
            >
              Message*
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full p-2 border rounded"
              rows="4"
            ></textarea>
          </div>
          <button
            type="submit"
            value="Send"
            className="w-full py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-700"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
