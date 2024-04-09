import React, { useState } from "react";
import Button from "../components/Button";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="">
      <div className="grow container px-4 py-8 bg-light-orange shadow-md rounded-lg">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex gap-4">
            <div className="flex flex-col w-[40%]">
              <label htmlFor="name" className="text-sm font-semibold pb-2">
                First Name
              </label>
              <input
                type="text"
                placeholder="Enter First Name"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className=" p-2 rounded-md border-2 border-gray-400 focus:outline-p-blue"
                required
              />
            </div>
            <div className="flex flex-col w-[40%]">
              <label htmlFor="name" className="text-sm font-semibold pb-2">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Enter Last Name"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className=" p-2 rounded-md border-2 border-gray-400 focus:outline-p-blue"
                required
              />
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex flex-col w-[40%]">
              <label htmlFor="email" className="text-sm font-semibold pb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className=" p-2 rounded-md border-2 border-gray-400 focus:outline-p-blue"
                required
              />
            </div>
            <div className="flex flex-col w-[40%]">
              <label htmlFor="phone" className="text-sm font-semibold pb-2">
                Phone
              </label>
              <input
                type="tel"
                placeholder="Enter phone number"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className=" p-2 rounded-md border-2 border-gray-400 focus:outline-p-blue"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="subject" className="text-sm font-semibold pb-2">
              Subject
            </label>
            <input
              type="text"
              placeholder="Enter your subject"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className=" p-2 rounded-md border-2 border-gray-400 focus:outline-p-blue"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="message" className="text-sm font-semibold pb-2">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Enter your message here..."
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className=" p-2 rounded-md border-2 border-gray-400 focus:outline-p-blue"
              required
            ></textarea>
          </div>
          <div className="flex justify-center">
            <Button text="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
