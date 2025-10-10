import React, { useState, useEffect } from "react";

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    otherField: "",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const storedData = localStorage.getItem("signupFormData");
    if (storedData) {
      setFormData(JSON.parse(storedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("signupFormData", JSON.stringify(formData));
  }, [formData]);

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value.trim() });
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const fetchData = async (email, name) => {
      try {
        const response = await fetch("http://localhost:4000/auth/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            name,
          }),
        });

        if (!response.ok) {
          throw new Error(`Signin failed with status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);

        if (data.token) {
          localStorage.setItem("authData", JSON.stringify(data));
          window.location.href = "/dashboard"; // Redirect to dashboard
        } else {
          // Handle unsuccessful login (provide specific error message based on response)
          const errorMessage =
            response.status === 401 ? "Unauthorized" : "Login failed";
        }
      } catch (error) {
        setLoading(false);
        console.error("Signin error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData(formData.email, formData.name);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-md">
        <div className="px-6 py-8">
          <h2 className="text-2xl font-semibold mb-4 text-center">Sign Up</h2>
          <form onSubmit={handleSubmit} className="space-y-4 mb-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`py-1 px-2 mt-1 block w-full rounded-md border ${
                  errors.name ? "border-red-500" : "border-gray-300"
                } shadow-sm`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                Username
              </label>

              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className={`py-1 px-2 mt-1 block w-full rounded-md border ${
                  errors.username ? "border-red-500" : "border-gray-300"
                } shadow-sm`}
              />

              {errors.username && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.username}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>

              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`py-1 px-2 mt-1 block w-full rounded-md border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } shadow-sm `}
              />

              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              {loading ? <p>Loading...</p> : <p>Sign Up</p>}
            </button>

            <div className="mb-6 flex float-right">
              Already have an account?{" "}
              <a href="/login">
                <span className="text-blue-500 pl-2"> Sign in</span>{" "}
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
