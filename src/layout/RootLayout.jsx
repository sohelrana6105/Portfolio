import React, { useEffect, useState } from "react";
import Navbar from "../componets/Navbar";
import { Outlet } from "react-router";
import Footer from "../componets/Footer";

export default function RootLayout() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-gray-50 dark:bg-gray-900 transition-colors duration-900 ease-in-out">
      {/* Full screen background color এখানে থাকবে */}

      <header
        className={`sticky top-0 z-50  bg-gray-200/80 dark:border-b-2 dark:border-gray-600   backdrop-blur-md shadow-sm    ${
          scrolled ? "dark:bg-gray-700" : "dark:bg-gray-900"
        }`}
      >
        <div className="max-w-[1920px] mx-auto px-4">
          <Navbar scrolled={scrolled} />
        </div>
      </header>

      <main className="max-w-[1920px] mx-auto px-4">
        <Outlet />
      </main>

      <footer className="max-w-[1920px] mx-auto px-4">
        <Footer />
      </footer>
    </div>
  );
}

// import React from "react";
// import Navbar from "../componets/Navbar";
// import { Outlet } from "react-router";
// import Footer from "../componets/Footer";

// export default function RootLayout() {
//   return (
//     <div className="max-w-[1440px] mx-auto dark:bg-gray-900 transition-colors duration-900 ease-in-out">
//       <header className="sticky top-0 z-50">
//         <Navbar />
//       </header>

//       <Outlet />
//       <Footer />
//     </div>
//   );
// }
