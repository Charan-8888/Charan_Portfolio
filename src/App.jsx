import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import ProjectDetails from './pages/ProjectDetails';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const NotFound = () => (
  <div className="min-h-screen bg-background flex flex-col items-center justify-center text-center p-6">
    <h1 className="text-6xl font-bold text-accent mb-4 font-mono">404</h1>
    <h2 className="text-2xl font-bold text-white mb-4">Page Not Found</h2>
    <p className="text-secondary-text mb-8">The page you are looking for doesn't exist or has been moved.</p>
    <a href="/" className="inline-flex items-center justify-center px-6 py-3 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 transition-colors">
      Back to Home
    </a>
  </div>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
