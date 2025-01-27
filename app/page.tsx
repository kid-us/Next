import Link from "next/link";
import ProductCard from "./components/ProductCard";

const Home = () => {
  return (
    <div>
      <p>Hello Next-JS</p>
      <Link href={"/users"} className="text-blue-500 underline">
        Users
      </Link>
      <ProductCard />
    </div>
  );
};

export default Home;
