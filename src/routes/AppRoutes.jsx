
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppHeader from "../components/headers/AppHeader";
import HomePage from "../pages/HomePage";
import ErrorPage from "../pages/ErrorPage";
import PageLayout from "../components/layout/PageLayout";
import MojitoProject from "../pages/MojitoProject";
import PhotoGramProject from "../pages/PhotoGramProject";
import CygnusProject from "../pages/CygnusProject";
import ScorifyProject from "../pages/ScrorifyProject";


export default function AppRoutes() {
  

  return (
    
      <Router>
        <main>
          <Routes>
            <Route path="/" element={<PageLayout children={<HomePage />} />} />
            <Route path="/projects">
              <Route path="mojito" element={<MojitoProject />} />
              <Route path="photogram" element={<PhotoGramProject />} />
              <Route path="cygnus" element={<CygnusProject />} />
              <Route path="scorify" element={<ScorifyProject />} />
            </Route>
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </main>
      </Router>
    
  );
}

