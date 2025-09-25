import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AppHeader from "../components/Headers/AppHeader";
import HomePage from "../pages/HomePage";
import ErrorPage from "../pages/ErrorPage";

export default function AppRoutes() {
  return (
    <Router>
        <AppHeader/>
        <main>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </main>
    </Router>
  );
}
