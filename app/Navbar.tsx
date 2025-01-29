"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const { status, data: session } = useSession();

  return (
    <nav className="flex justify-between">
      <div className="space-x-10">
        <Link href={"/"}>Next JS</Link>
        <Link href={"/users"}>Users</Link>
        <Link href={"/products"}>Products</Link>
        <Link href={"/admin"}>Admin</Link>
        <Link href={"/upload"}>Upload</Link>
      </div>

      {status === "loading" && (
        <div>
          <p>Loading ...</p>
        </div>
      )}

      {status === "authenticated" && (
        <div className="flex gap-x-5">
          <p>{session.user!.name}</p>
          <Link
            href={"/api/auth/signout"}
            className="text-red-500 font-bold font-mono"
          >
            Logout
          </Link>
        </div>
      )}

      {status === "unauthenticated" && (
        <Link href={"/api/auth/signin"}>Sign In</Link>
      )}
    </nav>
  );
};

export default Navbar;
