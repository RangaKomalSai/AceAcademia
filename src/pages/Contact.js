import React from "react";
import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <div className="flex gap-5 m-10">
      <div className="flex flex-col items-center justify-center grow">
        <h1 className="font-bold text-5xl pb-5">Contact Us</h1>
        <p className="text-gray-600 text-sm">Need to get in touch with us?</p>
        <p className="text-gray-600 text-sm">
          Fill out the form with your inquiry!
        </p>
      </div>
      <div className="w-[60%]">
        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;
