import React, { createContext, useState } from 'react';

export const SelectedPostContext = createContext();

export const SelectedPostProvider = ({ children }) => {
  const [selectedPostId, setSelectedPostId] = useState(null);

  return (
    <SelectedPostContext.Provider value={{ selectedPostId, setSelectedPostId }}>
      {children}
    </SelectedPostContext.Provider>
  );
};
