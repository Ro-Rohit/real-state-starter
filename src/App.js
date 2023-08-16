import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import PropertyDetails from './pages/PropertyDetails';
import Header from './components/Header';
import Footer from './components/Footer';


const App = () => {
  return (
    <div className='xl:max-w-[1440px] bg-white mx-auto overflow-hidden'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/property/:id' element={<PropertyDetails />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
