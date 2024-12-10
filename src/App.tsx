import { Routes, Route, Navigate } from "react-router-dom";

import HomePage from "./pages/Home";
import NotFoundPage from "./pages/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/:link?" element={<HomePage />} />
        <Route path="/profile" element={<Navigate to="/" />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
