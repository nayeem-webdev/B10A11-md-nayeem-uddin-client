import { useState, useContext } from "react";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState(""); // New field for Name
  const [photoURL, setPhotoURL] = useState(""); // New field for Photo URL
  const [loading, setLoading] = useState(false);
  const { signUpUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
      setLoading(false);
      return;
    }

    try {
      await signUpUser(email, password, name, photoURL); // Pass the name and photo URL
      toast.success("Account Created Successfully!");
      navigate("/dashboard");
    } catch (error) {
      toast.error("Sign Up failed. Please try again.", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto min-h-screen py-[80px] px-6">
      <div className=" p-6 w-full sm:w-96 mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6  ">Sign Up</h1>

        {/* Sign-Up Form */}
        <form onSubmit={handleSignUp} className="space-y-4">
          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700  "
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          {/* Photo URL Field */}
          <div>
            <label
              htmlFor="photoURL"
              className="block text-sm font-medium text-gray-700  "
            >
              Photo URL
            </label>
            <input
              type="url"
              id="photoURL"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
              placeholder="Enter your photo URL"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700  "
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
              className="block text-sm font-medium text-gray-700  "
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

          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700  "
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          {/* Sign Up Button */}
          <button
            type="submit"
            className="mt-4 w-full bg-primary text-white py-2 rounded-md font-medium hover:bg-primary/70 transition"
            disabled={loading}
          >
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
        </form>

        {/* Link to Login Page */}
        <div className="mt-6 text-center text-sm">
          <p className="text-gray-600  ">
            Already have an account?{" "}
            <a href="/login" className="text-primary font-medium">
              Log In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
