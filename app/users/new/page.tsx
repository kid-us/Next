"use client";

import { useRouter } from "next/navigation";

const NewUserPage = () => {
  const router = useRouter();
  return (
    <div>
      <button
        className="bg-blue-500 rounded py-2 px-6 text-white"
        onClick={() => router.push("/users")}
      >
        Create
      </button>
    </div>
  );
};

export default NewUserPage;
