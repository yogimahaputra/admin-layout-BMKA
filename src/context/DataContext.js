import React, { createContext, useState } from "react"

export const DataContext = createContext();

export  const DataProvider = props => {

    // const [data, setData] = useState({
    //     positif: 0,
    //     negatif:1,
    //     meninggal:1,
    //     currendId: null
    // })
    const [data, setData] = useState(null)
    return (
        <DataContext.Provider value={[data, setData]}>
          {props.children}
        </DataContext.Provider>
      );
}