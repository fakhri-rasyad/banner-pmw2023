"use client";
import React from "react";
import "@/styles/navbar.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();
  return (
    <div className="navbar-container">
      <Link
        href="/"
        className={`${pathName} == '/diary'` ? "active" : "normal"}
      >
        <h4>Home</h4>
      </Link>
      <p>|</p>
      <Link
        href="/diary"
        className={`${pathName} == '/diary'` ? "normal" : "active"}
      >
        <h4>Fetch</h4>
      </Link>
    </div>
  );
};

export default Navbar;
