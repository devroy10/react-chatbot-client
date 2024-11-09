// useStateContext.js
import { useContext } from "react";
import { StateContext } from "@/context/ContextProvider"; 

// Custom hook to use the context
export const useStateContext = () => {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error("useStateContext must be used within a StateProvider");
  }
  return context;
};
