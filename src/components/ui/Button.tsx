export default function Index({
  children,
  outline,
  classname,
}: {
  children: React.ReactNode;
  outline: boolean;
  classname: string;
}) {
  return (
    <>
      <button
        className={`rounded-lg max-w-md w-full py-2.5 border font-semibold hover:bg-red-500 hover:text-white transition-all duration-300 border-red-500 ${
          outline ? "bg-red-500" : "bg-transparent"
        } ${classname}`}
      >
        {children}
      </button>
    </>
  );
}
