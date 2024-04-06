import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div>
      Error 404 PageNotFound
      <Link to="/home">Go back to home</Link>
    </div>
  );
}

export default PageNotFound;
