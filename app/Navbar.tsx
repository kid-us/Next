import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex gap-x-8">
      <Link href={"/"}>Next JS</Link>
      <Link href={"/users"}>Users</Link>
      <Link href={"/products"}>Products</Link>
      <Link href={"/admin"}>Admin</Link>
      <Link href={"/upload"}>Upload</Link>
    </nav>
  );
};

export default Navbar;
