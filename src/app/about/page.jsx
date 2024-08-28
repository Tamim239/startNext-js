import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col space-y-3">
      <Link href={"/about/history"}>Histroy</Link>
      <Link href={"/about/mission"}>Mission</Link>
    </div>
  );
};

export default page;

