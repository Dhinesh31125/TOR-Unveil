import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

import Login from "./pages/Login";
import Home from "./pages/Home";
import History from "./pages/History";
import Navbar from "./components/Navbar";

function ProtectedRoute({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const user = localStorage.getItem("tor_user");
    setIsAuth(!!user);
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        }}
      >
        <div
          style={{
            width: "3rem",
            height: "3rem",
            border: "4px solid white",
            borderTopColor: "transparent",
            borderRadius: "50%",
            animation: "spin 1s linear infinite",
          }}
        ></div>

        <style>{`
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  return isAuth ? <>{children}</> : <Navigate to="/login" />;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login Route */}
        <Route path="/login" element={<Login />} />

        {/* Home Route */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <div
                style={{
                  minHeight: "100vh",
                  background:
                    "linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)",
                }}
              >
                <Navbar />
                <Home />
              </div>
            </ProtectedRoute>
          }
        />

        {/* History Page */}
        <Route
          path="/history"
          element={
            <ProtectedRoute>
              <div
                style={{
                  minHeight: "100vh",
                  background:
                    "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
                }}
              >
                <Navbar />
                <History />
              </div>
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
