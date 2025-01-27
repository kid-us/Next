import UserTable from "./UserTable";
interface Props {
  searchParams: { sortBy: string };
}

const UserPage = async ({ searchParams: { sortBy } }: Props) => {
  return (
    <div>
      <p>Users</p>
      <UserTable sortBy={sortBy} />
    </div>
  );
};

export default UserPage;
