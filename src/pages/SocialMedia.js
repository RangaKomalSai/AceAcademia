import React from "react";
import Button from "../components/Button";

function SocialMedia() {
  return (
    <div className="flex flex-col items-center justify-center h-lvh gap-10">
      <p className="text-5xl font-bold">Hey! Thanks for visiting!</p>
      <Button text="Go back to Home" path="/home" />
    </div>
  );
}

export default SocialMedia;
