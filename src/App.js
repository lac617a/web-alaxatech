import React from 'react';
import {HashRouter as Router, Route, Routes} from 'react-router-dom';
import './assets/sass/app.scss';

// SCREENs
import Home from './views/Home';
import NotFound from './views/NotFound';
import Projects from './views/project/Projects';

// LAYOUTs
import LayoutHeader from './layouts/LayoutHeader';

function App() {
  return (
    <Router>
      <LayoutHeader />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/project/:project" element={<Projects />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
