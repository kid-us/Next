interface Props {
  children: React.ReactNode;
}

const AdminLayout = ({ children }: Props) => {
  return (
    <div className="grid grid-cols-3">
      <aside className="border">
        <p>Sidebar</p>
      </aside>
      <header className="border col-span-2">
        <p>Navbar</p>
      </header>
      <div className="col-start-2">{children}</div>
    </div>
  );
};

export default AdminLayout;
