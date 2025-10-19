import React, { useState } from "react";
import {Link,useNavigate} from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignUpChange = (e) => {
    e.preventDefault();
    
  };

  return (
    <div className="flex items-center justify-center bg-gray-100 h-screen">
      <form
        onSubmit={handleSignUpChange}
        className="bg-white p-8 rounded shadow-md w-full max-w-lg"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">SignUp</h2>

        <label className="block mb-2">Name</label>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded mb-4"
        />

        <label className="block mb-2">Email</label>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded mb-4"
        />

        <label className="block mb-2">Password</label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded mb-6"
        />

        <button onClick={()=> navigate("/dashboard")} className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600">
          SignUp
        </button>

        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{" "}
          <Link to="/" className="text-blue-500 hover:underline">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
