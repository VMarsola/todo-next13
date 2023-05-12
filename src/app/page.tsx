import Link from "next/link";
import CreateNote from "./components/CreateNote";
import Note from "./components/Note";

export default async function Notes() {
  const res = await fetch(
    "http://127.0.0.1:8090/api/collections/posts/records?page=1&perPage=30",
    {
      cache: "no-store",
    }
  );
  const data = await res.json();
  return (
    <div className="max-w-5xl mx-auto my-8 ">
      <CreateNote />
      <div className="p-2 grid gap-2 grid-cols-1 sm:grid-cols-3">
        {data?.items.map((e: any) => {
          return (
            <Note key={e.id} content={e.content} title={e.title}>
              <Link
                href={`${e.id}`}
                className="text-blue-500 hover:text-blue-600 font-semibold text-sm"
              >
                Read more
              </Link>
            </Note>
          );
        })}
      </div>
    </div>
  );
}
