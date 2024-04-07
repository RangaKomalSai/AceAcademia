import React from "react";
import { Link } from "react-router-dom";

function SocialMedia() {
  return (
    <div className="flex flex-row items-center justify-center">
      <div>Hey! Thanks for coming!</div>
      <Link to="/home">Go back to home</Link>
    </div>
  );
}

export default SocialMedia;
