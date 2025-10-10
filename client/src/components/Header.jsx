import React, { } from "react";
import travelGuideLogo from "../../Public/travelGuideLogo.jpeg";

function Header() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect(() => {
  //   const storedToken = localStorage.getItem("token");
  //   const storedUserId = localStorage.getItem("userId");

  //   if (
  //     !storedToken ||
  //     !storedUserId ||
  //     storedToken == "" ||
  //     storedUserId == ""
  //   ) {
  //     setIsLoggedIn(false);
  //   } else {
  //     setIsLoggedIn(true);
  //   }
  // }, []);

  const handleLogout = () => {
    localStorage.clear();
    alert("You have been successfully logged out.");
    window.location.href = "/";
  };

  return (
    <nav className="relative p-3 h-16">
      <div className="mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <img
              src={travelGuideLogo}
              className="h-10 sm:h-10 rounded-full"
              alt="Travel Guide Logo"
            />
            <span className="text-black text-2xl font-semibold ml-2">
              Travel Guide
            </span>
          </a>
        </div>
        <div className="flex items-center mx-4 space-x-8 text-black">
          <a
            href="/"
            className="hover:text-green-900 hover:border hover:border-black px-2 py-1 font-semibold"
          >
            Home
          </a>
          <a
            href="/about"
            className="hover:text-green-900 hover:border hover:border-black px-2 py-1 font-semibold"
          >
            About
          </a>

          <a
            href="/services"
            className="hover:text-green-900 hover:border hover:border-black px-2 py-1 font-semibold"
          >
            Services
          </a>
          

          <a
            href="/dashboard"
            className="hover:text-green-900 hover:border hover:border-black px-2 py-1 font-semibold"
          >
            Contact
          </a>
          {/* {isLoggedIn ? (
            <>
            <a
              href="/dashboard"
              className="hover:text-green-900 hover:border hover:border-black px-2 py-1 font-semibold"
            >
              Dashboard
            </a>
            <button onClick={handleLogout} className="hover:text-green-900 hover:border hover:border-black px-2 py-1 font-semibold">
              Logout
            </button></>
          ) : (
            <>
              <a
                href="/login"
                className="hover:bg-green-700 border hover:border hover:border-black px-2 py-1 hover:text-white font-semibold rounded-md"
              >
                Login
              </a>
              <a
                href="/signup"
                className="hover:bg-blue-500 bg-green-700 text-white hover:border hover:border-black px-2 py-1 font-semibold rounded"
              >
                Sign Up
              </a>
            </>
          )}*/}
        </div> 
      </div>
    </nav>
  );
}

export default Header;
