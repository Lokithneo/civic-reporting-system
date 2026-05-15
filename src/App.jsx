import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ReportIssue from "./pages/ReportIssue";
import Dashboard from "./pages/Dashboard";
import Admin from "./pages/Admin";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/report" element={<ReportIssue />} />

      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
}

export default App;