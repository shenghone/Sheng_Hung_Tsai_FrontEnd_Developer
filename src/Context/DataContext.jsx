import React, { useState } from "react";

const DataContext = React.createContext(null);

export const DataContextProvider = ({ children }) => {
  const [dataMap, setDataMap] = useState({});
  const [data, setData] = useState({ news: null, picture: null });

  return (
    <DataContext.Provider value={{ dataMap, setDataMap, data, setData }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
