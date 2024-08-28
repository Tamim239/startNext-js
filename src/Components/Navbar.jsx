"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

export default function Navbar() {
  const pathName = usePathname();
  const router = useRouter();

  const links = [
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contacts",
    },
    {
      title: "Services",
      path: "/services",
    },
    {
      title: "Blogs",
      path: "/blogs",
    },
  ];

  const handleLogin = () => {
    router.push("/login");
  };

  if(pathName.includes('dashboard'))
    return <div className="bg-green-600">
           this dashboard navbar
    </div>
  

  return (
    <header className="flex justify-between bg-amber-200 px-10 items-center">
      <h6 className="text-2xl">Next Hero</h6>
      <ul className="flex *:ml-4">
        {links?.map((link) => (
          <Link
            className={pathName === link.path && "text-red-500"}
            key={link.path}
            href={link.path}
          >
            {link?.title}
          </Link>
        ))}
      </ul>
      <button
        onClick={handleLogin}
        className="p-4 bg-black text-white rounded-2xl"
      >
        Login
      </button>
    </header>
  );
}
