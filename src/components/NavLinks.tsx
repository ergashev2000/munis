import Link from "next/link";

const categoryPath = [
  { id: 1, category: `AKSIYALAR` },
  { id: 2, category: "XAVO SOVUTGICHLAR" },
  { id: 3, category: "SMARTFONLAR" },
  { id: 4, category: "MUZLATGICHLAR" },
  { id: 5, category: "CHANGYUTGICHLAR" },
  { id: 6, category: "NOUTBUKLAR" },
  { id: 7, category: "TELEVIZORLAR" },
];

export default function NavLinks() {
  return (
    <nav className="container mx-auto">
      <ul
        className={`flex-y-center gap-10 pb-3 mb-2 [&>li]:text-[15px] font-semibold `}
      >
        {categoryPath.map(category => (
          <li
            key={category.id}
            className="before:w-full before:h-0.5 before:-bottom-1.5 before:bg-black before:absolute relative before:scale-x-0 before:transition-all before:duration-300 hover:before:scale-x-100 before:origin-left"
          >
            <Link href={"/"}>{category.category}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
