import React from "react";

interface Users {
  id: number;
  name: string;
  email: string;
}

const UserPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-cache",
    next: { revalidate: 10 },
  });
  const users: Users[] = await res.json();

  return (
    <table className="font-mono">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      {users.map((user) => (
        <tbody key={user.id}>
          <tr>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>
        </tbody>
      ))}
    </table>
  );
};

export default UserPage;
