import React from "react";
import Button from "../components/Button";
import comingsoon from "../images/comingsoon.gif";

function Login() {
  return (
    <div className="relative flex flex-col">
      <div
        style={{
          background: `#fff url(${comingsoon}) repeat center center`,
          height: "50vh",
          position: "relative",
          zIndex: "-10",
        }}
      ></div>
      <div className="flex justify-center">
        <Button text="Go back to Home" path="/home" />
      </div>
    </div>
  );
}

export default Login;
