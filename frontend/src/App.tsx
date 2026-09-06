import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./hooks/useAuth";
import { Navbar } from "./components/Navbar";
import { RequireAuth } from "./components/RequireAuth";
import { LandingPage } from "./features/landing";
import { LoginPage, RegisterPage } from "./features/auth";
import { DashboardPage } from "./features/dashboard"; // Assuming it exists based on prompt

/**
 * Root application component with routing configuration.
 */
function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <div className="min-h-screen bg-gray-50">
          <Routes>
            <Route path="/" element={<><Navbar /><LandingPage /></>} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route 
              path="/dashboard/*" 
              element={
                <RequireAuth>
                  <Navbar />
                  <div className="pt-24"><DashboardPage /></div>
                </RequireAuth>
              } 
            />
          </Routes>
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
