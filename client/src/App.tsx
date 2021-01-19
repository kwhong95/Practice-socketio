import React, { FC, lazy, Suspense } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import chat from './img/chat.png';
import creator from './img/creator.jpg';
const Join = lazy(() => import('./components/Join')); 
const Chat = lazy(() => import('./components/Chat')); 

const App: FC = () => {

  const renderRoader = () => <p>Loading...</p>
  return (
    <Suspense fallback={renderRoader}>
      <main>
        <section className="glass">
          <div className="dashboard">
            <div className="link">
              <div className="creator">
                <img className="avatar"  src={creator} alt="creator"/>
                <h3>KyungWon Hong</h3>
                <p>Web Developer</p>
              </div>
              <img className="link-item" src={chat} alt="chat" />
            </div>
          </div>
          <div className="contents">
            <h2>Chat Room</h2>
          </div>
        </section>
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
