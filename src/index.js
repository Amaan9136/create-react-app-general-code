import React, { Suspense, lazy, useEffect } from 'react';
import "tw-elements-react/dist/css/tw-elements-react.min.css";
import { createRoot } from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import AppContextProvider from './contexts/AppContext';
import { RotateLoader } from 'react-spinners';
import { useLocation } from 'react-router-dom';

const LazyApp = lazy(() => import('./App'));
const LazyHome = lazy(() => import('./pages/Home/Home'));

const Loader = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    }}
  >
    <RotateLoader color="white" />
  </div>
);

// add routes and pages
const routes = [
  { path: "/", component: LazyApp },
  { path: "/home", component: LazyHome },
];

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  }, [pathname]);
  return null;
};

const Root = () => (
  <Router>
    <AppContextProvider>
      <ScrollToTop />
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={
                <Suspense fallback={<Loader color="white" />}>
                  <route.component />
                </Suspense>
            }
          />
        ))}
      </Routes>
    </AppContextProvider>
  </Router>
);


const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);

reportWebVitals();