import React, { createContext, useState } from "react";

// Create a new context
const LoadingContext = createContext();

// Context provider component
const LoadingContextProvider = ({ children }) => {
  // State and functions to be shared through the context
  const [isLoading, setIsLoading] = useState(false);

  // The data and functions we want to share are provided through the value prop
  return (
    <LoadingContext.Provider
      value={{
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </LoadingContext.Provider>
  );
};

export { LoadingContext, LoadingContextProvider };
