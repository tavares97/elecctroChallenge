import React from "react";

function Navbar() {
  return (
    <nav className="bg-indigo-600 h-16 flex items-center justify-between p-3 text-white">
      <h2>Welcome user</h2>
      <div>
        <a href="#!" className="px-5">
          Log In
        </a>
        <a href="#!" className="">
          Sign Up
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
