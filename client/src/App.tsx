import React, { FC, lazy, Suspense } from 'react';
import './App.css';
import menu3 from './img/chat.png';
import menu1 from './img/aboutme.png';
import creator from './img/creator.jpg';
const Chat = lazy(() => import('./components/Chat')); 

const App: FC = () => {

  const renderRoader = () => <p>Loading...</p>
  return (
    <Suspense fallback={renderRoader}>
      <main>
        <section className="glass">
          <div className="menu">
              <div className="creator">
                <img className="avatar"  src={creator} alt="creator"/>
                <h3>KyungWon Hong</h3>
                <p>Web Developer</p>
              </div>
            <div className="link">
              <div className="link-item">
                <img src={menu1} alt="chat" />
                <h2>About me</h2> 
              </div>
              <div className="link-item">
                <img src={menu3} alt="chat" />
                <h2>Project</h2> 
              </div>
              <div className="link-item">
                <img src={menu3} alt="chat" />
                <h2>Habits</h2> 
              </div>
              <div className="link-item">
                <img src={menu3} alt="chat" />
                <h2>Contact me</h2> 
              </div>
            </div>
          </div>
          <div className="contents">
            <Chat />
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
