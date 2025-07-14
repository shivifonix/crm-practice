import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllRoutes from "./routes/AllRoutes";
import DefaultLayout from "./layout/DefaultLayout";
import Login from "./pages/Login";
import ProtectedRoute from "./components/Protected/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="" element={<ProtectedRoute />}>
          <Route path="/*" element={<DefaultLayout />}>
            <Route path="*" element={<AllRoutes />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
