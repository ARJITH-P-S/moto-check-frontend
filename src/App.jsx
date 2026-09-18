import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import LandingPage from "./pages/LandingPage"
import RegisterPage from "./pages/RegisterPage"
import LoginPage from "./pages/LoginPage"
import HomePage from "./pages/HomePage"
import RegisterBikePage from "./pages/RegisterBikePage"
import MyBikePage from "./pages/MyBikePage"
import EditBikePage from "./pages/EditBikePage"
import ServicePage from "./pages/ServicePage"
import AboutPage from "./pages/AboutPage"
import ProtectedRoute from "./pages/ProtectedRoute"


function App() {

    return (
        <BrowserRouter>

            <Routes>

                <Route path="/" element={<LandingPage />} />

                <Route path="/register" element={<RegisterPage />} />

                <Route path="/login" element={<LoginPage />} />

                <Route
    path="/home"
    element={
        <ProtectedRoute>
            <HomePage />
        </ProtectedRoute>
    }
/>

<Route
    path="/register-bike"
    element={
        <ProtectedRoute>
            <RegisterBikePage />
        </ProtectedRoute>
    }
/>

<Route
    path="/my-bike"
    element={
        <ProtectedRoute>
            <MyBikePage />
        </ProtectedRoute>
    }
/>

<Route
    path="/edit-bike"
    element={
        <ProtectedRoute>
            <EditBikePage />
        </ProtectedRoute>
    }
/>


<Route
    path="/service"
    element={
        <ProtectedRoute>
            <ServicePage />
        </ProtectedRoute>
    }
/>

                <Route path="/about" element={<AboutPage />} />

            </Routes>

        </BrowserRouter>
    )
}

export default App