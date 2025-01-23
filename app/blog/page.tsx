import Link from "next/link";
import React from "react";

const BlogPage = () => {
  return (
    <div>
      <p>Blog Page</p>

      <Link href={"blog/slug"}>Link example</Link>
    </div>
  );
};

export default BlogPage;
