import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import TranslatedRoutes from "./i18n/TranslatedRoutes";
import "./i18n/i18n";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/en" replace />} />
        <Route path=":lang/*" element={<TranslatedRoutes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
