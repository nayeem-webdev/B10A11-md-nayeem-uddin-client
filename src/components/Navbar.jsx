import { Link, NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { FaUserCircle } from "react-icons/fa";

const Navbar = ({ isLoggedIn }) => {
  return (
    <nav className="shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-primary focus:outline-none focus:ring focus:ring-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
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
          <NavLink
            to="/account"
            className={({ isActive }) =>
              isActive ? "text-primary font-semibold" : " hover:text-primary"
            }
          >
            Account
          </NavLink>
        </div>

        {/* Profile and Login/Logout */}
        <div className="flex items-center space-x-4">
          {/* Profile Icon */}
          {isLoggedIn && <FaUserCircle className="text-2xl " />}

          {/* Login/Logout Button */}
          {!isLoggedIn ? (
            <Link
              to={"/login"}
              className="bg-primary text-white px-4 py-2 rounded hover:bg-accent transition"
            >
              Login
            </Link>
          ) : (
            <Link
              to={"/signup"}
              className="bg-primary text-white px-4 py-2 rounded hover:bg-accent transition"
            >
              Logout
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

export default Navbar;
