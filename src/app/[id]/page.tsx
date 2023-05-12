import Link from "next/link";

type Note = {
  collectionId: string;
  collectionName: string;
  content: string;
  created: string;
  id: string;
  title: string;
  updated: string;
};

export default async function Notes({ params }: any) {
  const res = await fetch(
    `http://127.0.0.1:8090/api/collections/posts/records/${params.id}`,
    {
      cache: "no-store",
      next: { revalidate: 10 },
    }
  );
  const note: Note = await res.json();

  const { collectionId, collectionName, content, created, id, title, updated } =
    note;

  return (
    <>
      <div className="w-full lg:w-4/5 mx-auto my-6">
        <div className="bg-white shadow rounded-lg overflow-hidden p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
            Card Details
          </h3>
          <div className="text-gray-700 flex whitespace-nowrap justify-evenly flex-wrap">
            <p>
              <span className="font-semibold">Title: </span>
              {title}
            </p>
            <p>
              <span className="font-semibold">Content: </span>
              {content}
            </p>
            <p>
              <span className="font-semibold">Collection Name: </span>
              {collectionName}
            </p>
            <p>
              <span className="font-semibold">Collection Id: </span>
              {collectionId}
            </p>
            <p>
              <span className="font-semibold">Created At: </span>
              {created}
            </p>
            <p>
              <span className="font-semibold">Updated At: </span>
              {updated}
            </p>
            <p>
              <span className="font-semibold">Collection Id: </span>
              {id}
            </p>
          </div>
          <div className="mt-4">
            <Link className="underline py-4" href={"/notes"}>
              Get back to all notes
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
