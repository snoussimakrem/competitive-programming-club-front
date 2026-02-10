import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingAnimation from './components/LoadingAnimation';
import SplashCursor from './components/SplashCursor';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
//import TrainingResources from './pages/TrainningResources';  NOUVEAU
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <SplashCursor
        SIM_RESOLUTION={96}
        DYE_RESOLUTION={1024}
        DENSITY_DISSIPATION={2.5}
        VELOCITY_DISSIPATION={1.5}
        PRESSURE={0.08}
        PRESSURE_ITERATIONS={20}
        CURL={2}
        SPLAT_RADIUS={0.15}
        SPLAT_FORCE={4000}
        SHADING={true}
        COLOR_UPDATE_SPEED={8}
        BACK_COLOR={{ r: 0, g: 0, b: 0 }}
        TRANSPARENT={true}
      />

      {loading ? (
        <LoadingAnimation />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />

        </Routes>
      )}
    </Router>
  );
}

export default App;