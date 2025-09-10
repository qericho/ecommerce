import { useState } from "react";

const LoginSignUp = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-pink-100 to-white px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-6">
          {isLogin ? "Login to Your Account" : "Create a New Account"}
        </h1>

        {/* Form */}
        <form className="flex flex-col gap-4">
          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              className="px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-pink-400"
            />
          )}
          <input
            type="email"
            placeholder="Email"
            className="px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-pink-400"
          />
          <input
            type="password"
            placeholder="Password"
            className="px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-pink-400"
          />

          {!isLogin && (
            <input
              type="password"
              placeholder="Confirm Password"
              className="px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-pink-400"
            />
          )}

          <button
            type="submit"
            className="bg-black text-white font-semibold py-2 rounded-lg hover:bg-black/90 transition"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        {/* Toggle */}
        <p className="text-center text-sm text-gray-600 mt-4">
          {isLogin ? "Don’t have an account?" : "Already have an account?"}{" "}
          <span
            className="text-pink-500 font-semibold cursor-pointer hover:underline"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Sign Up" : "Login"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginSignUp;
