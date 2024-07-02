"use client";

const { createContext, useState, useContext } = require("react");

const NavigationContext = createContext();

const initialState = "Industry Experts";
const initialState1 = 1;

function NavigationProvider({ children }) {
  const [title, setTitle] = useState(initialState);
  const [id, setId] = useState(initialState1);

  return (
    <NavigationContext.Provider
      value={{
        title,
        setTitle,
        id,
        setId,
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
