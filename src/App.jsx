// ./src/App.js
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AllRoutes from './routes/AllRoutes';
import DefaultLayout from './layout/DefaultLayout';

function App() {
  return (
   <BrowserRouter>
   <DefaultLayout>
       <AllRoutes/>
       </DefaultLayout>
   </BrowserRouter>
  );
}

export default App;