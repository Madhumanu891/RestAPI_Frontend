import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.placeholder.toLowerCase()]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`process.env.BACKEND_URI/login`, formData)
      .then((response) => {
        if (response.data.message === "Login successful") {
          navigate("/profile");
        }
        console.log("Login successful:", response.data);
      })
      .catch((error) => {
        console.error("There was an error logging in!", error);
      });
    setFormData({
      email: "",
      password: "",
    });
  };
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <h2 className="text-2xl font-semibold mb-4">Login</h2>
      <form
        onSubmit={handleSubmit}
        className="w-1/3 flex flex-col border p-6 rounded shadow-lg"
      >
        <input
          onChange={handleChange}
          type="email"
          placeholder="email"
          className="mb-4 p-2 border border-gray-300 rounded"
        />
        <input
          onChange={handleChange}
          type="password"
          placeholder="password"
          className="mb-4 p-2 border border-gray-300 rounded"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Login
        </button>
        <p className="text-sm text-gray-400">
          Don't have an account?{" "}
          <button
            onClick={() => navigate("/register")}
            className="text-blue-500"
          >
            Register{" "}
          </button>
        </p>
      </form>
    </div>
  );
};

export default Login;
