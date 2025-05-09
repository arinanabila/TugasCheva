import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout() {
  const location = useLocation();

  // Cek apakah sedang di halaman HomePage
  const hideNavbar = location.pathname === "/movies";

  return (
    <div className="min-h-screen">
      {!hideNavbar && <Navbar />}
      <Outlet />
      <Footer />
    </div>
  );
}
