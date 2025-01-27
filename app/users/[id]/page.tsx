interface Props {
  params: { id: number };
}
const UserDetailPage = ({ params: { id } }: Props) => {
  return (
    <div>
      <p>User ID is : {id}</p>
    </div>
  );
};

export default UserDetailPage;
