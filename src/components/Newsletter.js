import React from "react";
import Button from "./Button";

function Newsletter() {
  return (
    <div className="py-10 px-10 mx-20 my-10 bg-gradient-to-r to-s-orange/45 from-p-blue/65 rounded-lg flex flex-col items-center gap-2">
      <h1 className="font-bold text-3xl">Subscribe to our Newsletter</h1>
      <p className="text-gray-600">
        Get information about our latest courses and offers
      </p>
      <div className="w-full flex gap-3 pt-4 items-center justify-center">
        <input
          type="email"
          placeholder="Email Address"
          className="border-2 w-1/3 border-gray-300 focus:border-p-blue rounded-full px-4 py-2 outline-none focus:outline-none focus:shadow-xl focus:ring-2"
        />
        <div className="flex ">
          <Button text="Send" path="/" />
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
