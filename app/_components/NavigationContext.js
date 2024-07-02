"use client";

const { createContext, useState, useContext } = require("react");

const NavigationContext = createContext();

const initialState = "Industry Experts";
// const initialState = 1;

function NavigationProvider({ children }) {
  const [title, setTitle] = useState(initialState);

  return (
    <NavigationContext.Provider
      value={{
        title,
        setTitle,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
}

function useNavigation() {
  const context = useContext(NavigationContext);
  return context;
}

export { NavigationProvider, useNavigation };
