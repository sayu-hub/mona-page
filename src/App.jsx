import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import NewsList from './pages/NewsList';
import Mona from './pages/moNa';
import Mona2 from './pages/moNa2';
import Mona2plus from './pages/moNa2plus';
import UserGuide from './pages/UserGuide';
import KeymapEditor from './pages/Keymap-Editor';
import AccessoriesList from './pages/AccessoriesList';
import FAQ from './pages/FAQ';

export default function App() {
  const navigate = useNavigate();

  const handleNavigate = (viewTarget) => {
    let path = viewTarget;
    if (path === 'home') path = '/';
    else if (path === 'moNa') path = '/mona';
    else if (path === 'moNa2') path = '/mona2';
    else if (path === 'moNa2plus') path = '/mona2plus';
    else if (path === 'newsList') path = '/news';
    else if (path === 'accessoriesList') path = '/accessories';
    else path = `/${path}`;
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mona" element={<Mona onBack={() => navigate('/')} onNavigate={handleNavigate} />} />
      <Route path="/mona2" element={<Mona2 onBack={() => navigate('/')} onNavigate={handleNavigate} />} />
      <Route path="/mona2plus" element={<Mona2plus onBack={() => navigate('/')} onNavigate={handleNavigate} />} />
      <Route path="/guide" element={<UserGuide onBack={() => navigate('/')} onNavigate={handleNavigate} />} />
      <Route path="/keymap" element={<KeymapEditor onBack={() => navigate('/')} onNavigate={handleNavigate} />} />
      <Route path="/news" element={<NewsList onBack={() => navigate('/')} onNavigate={handleNavigate} />} />
      <Route path="/accessories" element={<AccessoriesList onBack={() => navigate('/')} onNavigate={handleNavigate} />} />
      <Route path="/faq" element={<FAQ onBack={() => navigate('/')} onNavigate={handleNavigate} />} />
    </Routes>
  );
}