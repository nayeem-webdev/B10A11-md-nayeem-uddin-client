import { useState, useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { loginWithGoogle, loginUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await loginUser(email, password);
      toast.success("Login Successful");
      navigate("/dashboard");
    } catch (error) {
      toast.error("Login failed. Please check your credentials.", error);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
      toast.success("Logged in with Google!");
      navigate("/dashboard");
    } catch (error) {
      toast.error("Failed to login with Google.", error);
    }
  };

  return (
    <div className="container mx-auto min-h-screen py-[80px] px-6">
      <div className=" rounded-lg p-6 w-full sm:w-96 mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6 ">Login</h1>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 "
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 "
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="mt-4 w-full bg-primary text-white py-2 rounded-md font-medium hover:bg-primary/70 transition"
            disabled={loading}
          >
            {loading ? "Logging In..." : "Log In"}
          </button>
        </form>

        {/* Google Login Button */}
        <div className="mt-4">
          <button
            onClick={handleGoogleLogin}
            className="w-full bg-google text-white py-2 rounded-md font-medium flex justify-center items-center gap-2 hover:bg-google/70 transition"
          >
            <FaGoogle />
            Login with Google
          </button>
        </div>

        {/* Link to Sign Up Page */}
        <div className="mt-6 text-center text-sm">
          <p className="text-gray-600 ">
            Don&apos;t have an account?{" "}
            <a href="/signup" className="text-primary font-medium">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
