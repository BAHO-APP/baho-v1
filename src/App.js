import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeDiv from './components/Home/home';
import Team from './components/team/team';
import { Footer } from './components/footer/footer';
import Product from './components/product/product';
import Mission from './components/mission/mission';
import PrivacyPolicy from './components/PrivacyPolicy';
import 'reactjs-popup/dist/index.css';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="h-[100vh] ">
              <video
                src="/butterfly.mp4"
                className=" vid "
                autoPlay
                loop
                muted
              />
              <div>
                <div className="content z-0">
                  <HomeDiv />
                  <Mission />
                  <Product />
                  <Team />
                  <Footer />
                </div>
              </div>
            </div>
          }
        />

        <Route
          path="/privacy-policy"
          element={
            <div className="h-[100vh] ">
              <div className="content z-0">
                <PrivacyPolicy />
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}
