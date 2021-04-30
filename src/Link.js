import React from "react";
import ReactDOM from "react-dom";

// Create a Context
const NumberContext = React.createContext();
// It returns an object with 2 values:
// { Provider, Consumer }

function Link() {
  // Use the Provider to make a value available to all
  // children and grandchildren
  return (
    <UserContext.Provider value={42}>
      <div>
        <Display />
      </div>
    </UserContext.Provider>
  );
}

export default Link