import React, { FC, lazy, Suspense } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
const Join = lazy(() => import('./components/Join')); 
const Chat = lazy(() => import('./components/Chat')); 

const App: FC = () => {

  const renderRoader = () => <p>Loading...</p>
  return (
    <Suspense fallback={renderRoader}>
      <main>
        <section className="glass"></section>
      </main>
        <div className="circle1" />
        <div className="circle2" />
      {/* <Router>
        <Route path="/" exact component={Join} />
        <Route path="/chat" exact component={Chat} />
      </Router> */}
    </Suspense>
  );
}

export default App;
