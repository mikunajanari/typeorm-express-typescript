/*
import React, { useState } from "react";
import { useNavigate } from "@tanstack/router";
import api from "../api/axios";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await api.post("/auth/login", { email, password });
      const boilerplate_token = response.data.token;
      localStorage.setItem("token", boilerplate_token); // або sessionStorage.setItem
      navigate({ to: "/entities" });
    } catch (err) {
      alert("Login failed");
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-80 mx-auto mt-10">
  <h2 className="text-xl font-bold">Login</h2>
    <input
  type="email"
  placeholder="Email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  className="border p-2"
  required
  />
  <input
    type="password"
  placeholder="Password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  className="border p-2"
  required
  />
  <button type="submit" className="bg-blue-500 text-white py-2 rounded">
    Login
    </button>
    </form>
);
}*/
