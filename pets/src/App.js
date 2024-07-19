import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import LostPets from './components/LostPets';
import FoundPets from './components/FoundPets';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Home />;
      case 'lostPets':
        return <LostPets />;
      case 'foundPets':
        return <FoundPets />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="App min-h-screen flex flex-col">
      <Navbar setActiveTab={setActiveTab} />
      <div className="flex-grow w-full border-[30px] border-blue-900 box-border">
        <div className="bg-[#61988E] h-12"></div>
        <div className="p-4">
          {renderContent()}
        </div>
        <div className="bg-[#61988E] h-12"></div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
