import { Routes, Route, Navigate } from "react-router-dom";

import HomePage from "./pages/ProfilePage";
import NotFoundPage from "./pages/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/:link?" element={<HomePage />} />
        <Route path="/profile" element={<Navigate to="/" />} />
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
