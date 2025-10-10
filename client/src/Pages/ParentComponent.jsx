import React from "react";
import Dashboard from "./dashboard";

const ParentComponent = () => {
  const navigateToLogin = () => {
    window.location.href = "/login";
  };

  return (
    <div>
      <Dashboard navigateToLogin={navigateToLogin} />
    </div>
  );
};

export default ParentComponent;
