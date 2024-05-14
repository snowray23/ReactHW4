// In your application's main file, set up routes using BrowserRouter and 
//Route from React Router. Assign each route to the corresponding component.

import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Routes } from 'react-router-dom';
import Home from './components/Home';
import BrowseCharacters from './components/BrowseCharacters';
import CharacterDetails from './components/CharacterDetails';
import Comics from './components/Comics';
import NotFound from './components/NotFound'; 
// Task 1: Implement Navigation Links
const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><NavLink exact="/">Home</NavLink></li>
            <li><NavLink to="/browse">Browse Characters</NavLink></li>
            <li><NavLink to="/comics">Comics</NavLink></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/browse" element={<BrowseCharacters />} />
          <Route path="/character/:id" element={<CharacterDetails />} />
          <Route path="/comics" element={<Comics />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
