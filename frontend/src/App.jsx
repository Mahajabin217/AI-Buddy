import React from 'react';
import AppRoutes from './routes/AppRoutes.jsx';
import { UserProvider } from './context/User.context.jsx';

const App = () => {
  return (
    <div>
      <UserProvider>
        <AppRoutes></AppRoutes>
      </UserProvider>
    </div>
  );
};

export default App;