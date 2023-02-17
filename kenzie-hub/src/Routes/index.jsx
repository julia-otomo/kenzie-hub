import { Route, Routes } from "react-router-dom";
import { LoginUser } from "../Pages/LoginUser";
import { Dashboard } from "../Pages/Dashboard";
import { RegisterUser } from "../Pages/RegisterUser";
import { ErrorPage } from "../Pages/404";
import { ProtectedRoute } from "../Pages/ProtectedRoute";
import { TechProvider } from "../Contexts/TechContext";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LoginUser />} />
      <Route path="/register" element={<RegisterUser />} />
      <Route path="*" element={<ErrorPage />} />
      <Route path="/dashboard" element={<ProtectedRoute />}>
        <Route
          index
          element={
            <TechProvider>
              <Dashboard />
            </TechProvider>
          }
        />
      </Route>
    </Routes>
  );
}
