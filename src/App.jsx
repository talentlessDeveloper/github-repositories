import { AnimatePresence } from "framer-motion";
import React, { useState, useContext, Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import { ThemeContext } from "./context/ThemeContext";

import EntranceLoader from "./components/EntranceLoader";
import ErrorBoundaryTest from "./Pages/ErrorBoundaryTest";
import Header from "./components/Header/Header";
import Loader from "./utility/Loader";

const Home = React.lazy(() => import("./Pages/Home"));
const About = React.lazy(() => import("./Pages/About"));
const Repos = React.lazy(() => import("./Pages/Repos"));
const ErrorPage = React.lazy(() => import("./Pages/ErrorPage"));
const Repo = React.lazy(() => import("./Pages/Repo"));

function App() {
  const [loadEntrance, setLoadEntrance] = useState(true);
  const { theme, setTheme } = useContext(ThemeContext);
  const location = useLocation();
  return (
    <AnimatePresence mode='wait'>
      <Suspense fallback={<Loader />}>
        <div className={`App`}>
          <Routes location={location} key={location.pathname}>
            <Route element={<Header theme={theme} setTheme={setTheme} />}>
              <Route
                index
                path='/'
                element={
                  loadEntrance ? (
                    <EntranceLoader setLoadEntrance={setLoadEntrance} />
                  ) : (
                    <Home />
                  )
                }
              />
              <Route path='about' element={<About />} />
              <Route path='errorboundary' element={<ErrorBoundaryTest />} />
              <Route path='/repos'>
                <Route index element={<Repos />} />
                <Route path=':name' element={<Repo />} />
              </Route>
            </Route>
            <Route path='/errorpage' element={<ErrorPage />} />
            <Route path='*' element={<ErrorPage />} />
          </Routes>
        </div>
      </Suspense>
    </AnimatePresence>
  );
}

export default App;
