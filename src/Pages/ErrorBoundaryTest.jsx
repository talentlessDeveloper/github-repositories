import React from "react";

const ErrorBoundaryTest = () => {
  let name = {};
  return <div>{name.toLowerCase()}</div>;
};

export default ErrorBoundaryTest;
