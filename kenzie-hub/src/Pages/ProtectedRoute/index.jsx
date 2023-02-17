import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { UserContext } from "../../Contexts/UserContext";

export function ProtectedRoute() {
  const { student } = useContext(UserContext);

  return <>{student ? <Outlet /> : <Navigate to="/" />}</>;
}
