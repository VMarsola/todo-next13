import { FC, PropsWithChildren, ReactNode } from "react";

type NoteProps = {
  title: string;
  content: string;
  children?: ReactNode;
};

const Note: FC<NoteProps & PropsWithChildren> = ({
  content,
  title,
  children,
}) => {
  return (
    <div className="bg-white shadow rounded-lg overflow-hidden max-w-3xl">
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-700 text-base">{content}</p>
        {children}
      </div>
    </div>
  );
};

export default Note;
