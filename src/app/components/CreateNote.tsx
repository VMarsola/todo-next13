"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreateNote() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const router = useRouter();

  const create = async () => {
    await fetch("http://127.0.0.1:8090/api/collections/posts/records", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        content,
      }),
    });
    setContent("");
    setTitle("");

    router.refresh();
  };

  return (
    <form onSubmit={create} className="max-w-sm mx-auto my-4">
      <h3 className="text-3xl font-bold mb-4 text-center">Create a new Note</h3>
      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-700 font-medium mb-2">
          Title
        </label>
        <input
          type="text"
          id="title"
          className="w-full border border-gray-300 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
          placeholder="Enter a title"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="content"
          className="block text-gray-700 font-medium mb-2"
        >
          Content
        </label>
        <textarea
          id="content"
          className="w-full border border-gray-300 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
          placeholder="Enter content"
          required
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Create note
      </button>
    </form>
  );
}
