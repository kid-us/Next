import Link from "next/link";
import React from "react";

const UserPage = () => {
  return (
    <div>
      <p>User Page</p>
      <Link href="/users/new">New User</Link>
    </div>
  );
};

export default UserPage;
