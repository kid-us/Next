import Link from "next/link";
import ProductCard from "./components/ProductCard";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

const Home = async () => {
  const session = await getServerSession(authOptions);
  return (
    <div>
      <p>
        Hello{" "}
        {session ? <span>{session.user!.name}</span> : <span>Next-JS</span>}
      </p>
      <Link href={"/users"} className="text-blue-500 underline">
        Users
      </Link>
      <ProductCard />
    </div>
  );
};

export default Home;
