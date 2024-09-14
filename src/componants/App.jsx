// App.js
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import TODOLIST from "./Todo";
import Login from "./login";
import Layout from "../pages/layout";
import Signup from "./signup";
import ProtectedRoute from "../protectRoutes/ProtectedRoute";
import { AuthProvider } from "../protectRoutes/authContext";
import { ErrorPage } from "./errorPage";
// import { UseCsrfToken } from "../protectRoutes/UseCsrfToken";

export default function App() {
  // UseCsrfToken();
  const isAuthenticated = localStorage.getItem('token')

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Signup />} />
            {!isAuthenticated && <Route path="/login" element={<Login />} /> }
            {!isAuthenticated && <Route path="/forgetpassword" element={<ErrorPage/>} />}
            {isAuthenticated && <Route path="/todos" element={<ProtectedRoute element={<TODOLIST />} />} />}
            <Route path="*" element={ isAuthenticated ? <Navigate to="/todos"/> : <ErrorPage/>} /> 
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
