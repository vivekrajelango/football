import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

export const DataProvider=(props)=>{
    const [metaValue, setMetaValue] = useState('');

    useEffect(()=>{
        axios.get('./data/data.json')
         .then(res=>{
            setMetaValue(res.data);
         });
    },[]);

    const value = {
        metaValue: [metaValue, setMetaValue]
    }

    return(
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    )
}