import Link from "next/link";
import { sort } from "fast-sort";

interface Users {
  id: number;
  name: string;
  email: string;
}

interface Props {
  sortBy: string;
}

const UserTable = async ({ sortBy }: Props) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    // cache: "no-cache",
    // next: { revalidate: 10 },
  });
  const users: Users[] = await res.json();

  const sortedUsers = sort(users).asc(
    sortBy === "email" ? (user) => user.email : (user) => user.name
  );

  return (
    <div>
      <table className="font-mono">
        <thead>
          <tr>
            <th>
              <Link href={"/users?sortBy=name"}>Name</Link>
            </th>
            <th>
              <Link href={"/users?sortBy=email"}>Email</Link>
            </th>
          </tr>
        </thead>
        {sortedUsers.map((user) => (
          <tbody key={user.id}>
            <tr>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default UserTable;
