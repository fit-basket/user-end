import React, { createContext, useState } from "react";

// Create a new context
const SubscriptionContext = createContext();

// Context provider component
const SubscriptionContextProvider = ({ children }) => {
  // State and functions to be shared through the context
  const [subscriptionData, setSubscriptionData] = useState([1, 2]);

  const handlePlanUpdate = (id) => {
    if (subscriptionData.includes(id)) {
      setSubscriptionData(subscriptionData.filter((item) => item !== id));
    } else {
      setSubscriptionData([...subscriptionData, id]);
    }
  };

  // The data and functions we want to share are provided through the value prop
  return (
    <SubscriptionContext.Provider
      value={{ subscriptionData, handlePlanUpdate, setSubscriptionData }}
    >
      {children}
    </SubscriptionContext.Provider>
  );
};

export { SubscriptionContext, SubscriptionContextProvider };
