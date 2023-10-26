import React, { createContext, useState } from "react";

// Create a new context
const SubscriptionContext = createContext();

// Context provider component
const SubscriptionContextProvider = ({ children }) => {
  // State and functions to be shared through the context
  const [subscriptionData, setSubscriptionData] = useState([]);
  const [priceTotal, setPriceTotal] = useState(0);

  const handlePlanUpdate = (id, price) => {
    if (subscriptionData.includes(id)) {
      setSubscriptionData(subscriptionData.filter((item) => item !== id));
      setPriceTotal(priceTotal - price);
    } else {
      setSubscriptionData([...subscriptionData, id]);
      setPriceTotal(priceTotal + price);
    }
  };

  // The data and functions we want to share are provided through the value prop
  return (
    <SubscriptionContext.Provider
      value={{
        subscriptionData,
        handlePlanUpdate,
        setSubscriptionData,
        priceTotal,
        setPriceTotal,
      }}
    >
      {children}
    </SubscriptionContext.Provider>
  );
};

export { SubscriptionContext, SubscriptionContextProvider };
