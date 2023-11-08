import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../routes/Home';
import Detail from '../routes/Detail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exat Component={Home}></Route>
        <Route path="/:id" Component={Detail}></Route>
      </Routes>
    </Router>
  );
}

export default App;
