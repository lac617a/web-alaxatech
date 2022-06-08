import React from 'react';
import {HashRouter as Router, Route, Routes} from 'react-router-dom';
import './assets/sass/app.scss';
import LayoutHeader from './layouts/LayoutHeader';
import Home from './views/Home';
import NotFound from './views/NotFound';

function App() {
  return (
    <Router>
      <LayoutHeader />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
