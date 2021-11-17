import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="bg-dark p-5">
      <img
        className="mb-4 img-fluid"
        src="https://i.ibb.co/F6W1Fgh/images-2-294.jpg"
        alt=""
      />
      <br />
      <Link to="/home">Return to home</Link>
    </div>
  );
};

export default NotFound;
