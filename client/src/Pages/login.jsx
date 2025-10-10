import React, { useState, useEffect } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = async (e) => {
    setEmail(e.target.value);
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!email.trim()) {
      setError("Email is required");
      setIsLoading(false);
      return;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Email is invalid");
      setIsLoading(false);
      return;
    }

    const fetchData = async (email) => {
      console.log("fetching data...");
      console.log(email);
      try {
        const response = await fetch("http://localhost:4000/auth/signin", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
          }),
        });

        if (!response.ok) {
          throw new Error(`Signin failed with status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);

        localStorage.setItem("token", data.data.token);
        localStorage.setItem("name", data.data.name);
        localStorage.setItem("userId", data.data.id);
        localStorage.setItem("email", data.data.email);
      } catch (error) {
        console.error("Signin error:", error);
        setError("Failed to connect to server or Network Error");
      } finally {
        setLoading(false);
        window.location.href = `/authorization?email=${email}`;
      }
    };

    fetchData(email);
  };

  useEffect(() => {
    if (isLoading) {
      const timeoutId = setTimeout(() => setIsLoading(false), 10000);
      return () => clearTimeout(timeoutId);
    }
  }, [isLoading]);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-md w-full bg-white rounded-lg overflow-hidden shadow-md">
        <div className="px-4 py-4">
          <h2 className="text-3xl font-semibold mb-4 text-center">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-xm font-medium">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={handleChange}
                placeholder="Enter your email"
                className={`py-1 px-2 mt-1 block w-full rounded-md border border-gray-300 shadow-sm   focus:ring-opacity-50 ${
                  error ? "border-red-500" : ""
                }`}
              />
              {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
            </div>
            <button
              type="submit"
              className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out w-full"
            >
              {isLoading ? "Loading..." : "Login"}
            </button>
            <div className="mt-3 mb-4 flex float-right">
              Don't have an account?{" "}
              <a href="/signup">
                <span className="text-blue-500 pl-2 "> Register Now</span>{" "}
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
