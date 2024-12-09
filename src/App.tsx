import { Routes, Route, Navigate } from "react-router-dom";

import HomePage from "./pages/Home";
import NotFoundPage from "./pages/NotFound";
import LinksPage from "./pages/Links";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<Navigate to="/" />} />
        <Route path="/profile/:link?" element={<LinksPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
