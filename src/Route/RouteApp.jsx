import React, { Suspense, lazy } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import PrivateOutlet from "./PrivateOutlet";
import { useAuthContext } from "../context/authContext";

const LoginPage = lazy(() => import("../pages/LoginPage"));
const SignUpPage = lazy(() => import("../pages/SignUpPage"));
const DonationPage = lazy(() => import("../pages/DonationPage"));
const DonatePage = lazy(() => import("../pages/DonatePage"));

export default function RouteApp() {
  const { loginUser } = useAuthContext();
  return (
    <Suspense fallback={<h3>Loading</h3>}>
      <Routes>
        <Route
          path="/"
          element={
            loginUser ? <Navigate to="/donation" /> : <Navigate to="/login" />
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/" element={<PrivateOutlet />}>
          <Route path="/donation" element={<DonationPage />} />
          <Route path="/donate" element={<DonatePage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
