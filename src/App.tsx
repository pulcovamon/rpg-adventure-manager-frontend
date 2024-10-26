import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Layout from './lib/pages/Layout';
import HomePage from './lib/pages/HomePage';
import Worlds from './lib/pages/Worlds';
import Encounters from './lib/pages/Encounters';
import Characters from './lib/pages/Characters';
import Settings from './lib/pages/Settings';
import UserAccount from './lib/pages/UserAccount';
import Campaigns from './lib/pages/Campaigns';

function App() {
  const [isDarkMode, setDarkMode] = React.useState(false);

  const toggleDarkMode = (checked: boolean) => {
      setDarkMode(checked);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />}>
          <Route index element={<HomePage />} />
          <Route path="worlds" element={<Worlds />} />
          <Route path='campaigns' element={<Campaigns />} />
          <Route path="encounters" element={<Encounters />} />
          <Route path="characters" element={<Characters />} />
          <Route path="settings" element={<Settings />} />
          <Route path='account' element={<UserAccount />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
