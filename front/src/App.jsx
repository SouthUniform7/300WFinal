import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home'; // Import your Home component
// Import other components you want to route

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add more routes for other components */}
      </Routes>
    </Router>
  );
}

export default App;
