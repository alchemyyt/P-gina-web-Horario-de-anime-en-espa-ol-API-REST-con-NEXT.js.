import React from "react";
import Link from "next/link";
export default async function page() {
  return (
    <main>
      <Link href="./temporadas/summer-2024" className="text-amber-700">
        <h2 className="text-center font-bold text-2xl lg:mt-6 px-2 bg-slate-200 border-2 border-gray-400 my-6 ">
          Verano 2024
        </h2>
      </Link>
    </main>
  );
}
