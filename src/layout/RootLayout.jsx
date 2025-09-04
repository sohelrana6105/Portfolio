import React from "react";
import Navbar from "../componets/Navbar";
import { Outlet } from "react-router";
import Footer from "../componets/Footer";

export default function RootLayout() {
  return (
    <div className="max-w-6xl mx-auto  ">
      <header className="sticky top-0 z-50">
        <Navbar />
      </header>

      <Outlet />
      <Footer />
    </div>
  );
}
