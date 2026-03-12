import {  createContext, useEffect, useState } from "react";


export const ModeContext=createContext();

export const ModeProvider = ({ children }) => {
  const [mode, setMode] = useState(() => {
    return localStorage.getItem("mode") || "light"; 
  });

  useEffect(() => {
    localStorage.setItem("mode", mode); 
  }, [mode]);
    return  <ModeContext.Provider value={[mode,setMode]}>{children}</ModeContext.Provider>
    
}