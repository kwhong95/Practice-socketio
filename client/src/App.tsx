import React, { FC, lazy } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
const Join = lazy(() => import('./components/Join')); 
const Chat = lazy(() => import('./components/Chat')); 

const App: FC = () => {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Join} />
        <Route path="/chat" exact component={Chat} />
      </Router>
    </div>
  );
}

export default App;
