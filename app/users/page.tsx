import UserTable from "./UserTable";
interface Props {
  searchParams: { sortBy: string };
}

const UserPage = async ({ searchParams: { sortBy } }: Props) => {
  return (
    <div>
      <h1>Users</h1>
      <UserTable sortBy={sortBy} />
    </div>
  );
};

export default UserPage;
