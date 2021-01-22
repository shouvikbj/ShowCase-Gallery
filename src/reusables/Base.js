import React from "react";
import Navbar from "./Navbar";

const Base = ({ className = "", children }) => {
  return (
    <div className={className}>
      <Navbar />
      <div>{children}</div>
    </div>
  );
};

export default Base;
