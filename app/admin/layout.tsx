import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid grid-cols-3 gap-x-5">
      <aside className="bg-gray-500 rounded  p-10">
        <p className="text-white text-xl">Sidebar</p>
      </aside>
      <div className="cols-span-2 p-10">{children}</div>
    </div>
  );
};

export default layout;
