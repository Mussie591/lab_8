import React from 'react';
import Dashboard from './components/Dashboard';
import { SelectedPostProvider } from './SelectedPostContext';

const App = () => (
  <SelectedPostProvider>
    <Dashboard />
  </SelectedPostProvider>
);

export default App;
