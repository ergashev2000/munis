
export default function Index({ children, outline, classname }: { children: React.ReactNode; outline: boolean , classname: string}) {
  return (
    <>
      <button
        className={`rounded-lg max-w-md w-full py-2.5 border font-semibold border-red-500 ${
          outline ? "bg-red-500" : "bg-transparent"
        } ${classname}`}
      >
        {children}
      </button>
    </>
  );
}
