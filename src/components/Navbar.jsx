import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaUserCircle } from "react-icons/fa";
import { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, logoutUser, setUser } = useContext(AuthContext);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Logout User
  const handleLogout = () => {
    logoutUser()
      .then(() => {
        setUser(null);
        toast.success("Logout Successful!");
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <nav className="shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-primary text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        {/* Logo */}
        <Link to={"/"} className="text-xl font-bold">
          <span className="text-primary">Dine</span>
          Flow
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-primary font-semibold" : " hover:text-primary"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/all-foods"
            className={({ isActive }) =>
              isActive ? "text-primary font-semibold" : " hover:text-primary"
            }
          >
            All Foods
          </NavLink>
          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              isActive ? "text-primary font-semibold" : " hover:text-primary"
            }
          >
            Gallery
          </NavLink>
          {user && (
            <NavLink
              to="/account"
              className={({ isActive }) =>
                isActive ? "text-primary font-semibold" : " hover:text-primary"
              }
            >
              Account
            </NavLink>
          )}
        </div>

        {/* Profile and Login/Logout */}
        <div className="flex items-center space-x-4">
          {/* Profile Icon */}
          {user && <FaUserCircle className="text-2xl " />}

          {/* Login/Logout Button */}
          {!user ? (
            <Link
              to={"/login"}
              className="bg-primary text-white px-4 py-2 rounded hover:bg-accent transition"
            >
              Login
            </Link>
          ) : (
            <Link
              onClick={handleLogout}
              className="bg-primary text-white px-4 py-2 rounded hover:bg-accent transition"
            >
              Logout
            </Link>
          )}
        </div>
      </div>
      {/* Mobile navigation menu */}
      {isMenuOpen && (
        <div className="z-50 absolute top-16 left-0 w-full bg-white shadow-lg lg:hidden">
          <div className="flex flex-col items-center space-y-4 py-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `font-semibold hover:text-primary ${
                  isActive ? "text-primary" : "text-black"
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              HOME
            </NavLink>
            <NavLink
              to="/all-foods"
              className={({ isActive }) =>
                `font-semibold hover:text-primary ${
                  isActive ? "text-primary" : "text-black"
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              ALL FOODS
            </NavLink>
            <NavLink
              to="/gallery"
              className={({ isActive }) =>
                `font-semibold hover:text-primary ${
                  isActive ? "text-primary" : "text-black"
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              GALLERY
            </NavLink>
            {user && (
              <NavLink
                to="/account"
                className={({ isActive }) =>
                  `font-semibold hover:text-primary ${
                    isActive ? "text-primary" : "text-black"
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                ACCOUNT
              </NavLink>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
