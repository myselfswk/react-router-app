import React from 'react';

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import Navigations from './Components/Navigations';
import Home from './routes/Home';
import About from './routes/About';
import Contact from './routes/Contact';
import Dashboard from './routes/Dashboard';
import GoAway from './routes/GoAway';
import PageNotFound from './routes/PageNotFound';

import DashboardInvoices from './routes/dashboard/Invoices';
import DashboardUsers from './routes/dashboard/Users';


import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigations />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/contactus' element={<Contact />}></Route>
          <Route path='/dashboard' element={<Dashboard />}>
            <Route path='/dashboard/invoices' element={<DashboardInvoices />}></Route>
            <Route path='/dashboard/users' element={<DashboardUsers />}></Route>
            <Route path='/dashboard/users/:id' element={<DashboardUsers />}></Route>
          </Route>
          <Route path='/goaway' element={<GoAway />}></Route>
          <Route path='/*' element={<PageNotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;