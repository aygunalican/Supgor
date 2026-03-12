import axios from "axios";
import {  createContext, useEffect, useState } from "react";


export const ApiContext=createContext();

export const ApiProvider = ({ children }) => {
   const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("https://mocki.io/v1/db0ccc02-f9bd-4d0d-87a8-ec06333e16b7")
            .then(res => setData(res.data.products));
    }, []);
    return  <ApiContext.Provider value={[data,setData]}>{children}</ApiContext.Provider>
    
}