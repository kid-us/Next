import Link from "next/link";

interface User {
  id: number;
  name: string;
}

const UserPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    next: { revalidate: 10 }, // Next js will request to the api under the hood.
    cache: "no-cache", // means no cache
  });
  const users: User[] = await res.json();

  return (
    <div>
      <Link href="/users/new">New User</Link>
      <p className="font-black mb-2">Users</p>

      <p>{new Date().toLocaleTimeString()}</p>

      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserPage;
