import React, { lazy, useEffect, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import AccessibleNavigationAnnouncer from './components/AccessibleNavigationAnnouncer';

const MainDashboard = lazy(() => import('./pages/MainDashboard'));

function RedirectToMainDashboard() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/main-dashboard');
  }, [navigate]);
  return null;
}

function App() {
  return (
    <>
      <Router>
        <AccessibleNavigationAnnouncer />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/main-dashboard" element={<MainDashboard />} />
            <Route path="/" element={<RedirectToMainDashboard />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;