import { Route, Routes } from "react-router-dom";
import { LoginUser } from "../Pages/LoginUser";
import { Dashboard } from "../Pages/Dashboard";
import { RegisterUser } from "../Pages/RegisterUser";
import { ErrorPage } from "../Pages/404";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LoginUser />} />
      <Route path="/register" element={<RegisterUser />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}
