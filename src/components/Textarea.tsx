import { HTMLProps } from "react";

export default function Textarea(props: HTMLProps<HTMLTextAreaElement>) {
  return (
    <textarea
      className="dark:bg-black bg-white border border-gray-600 px-4 py-1 rounded-xl placeholder:text-sm placeholder:text-gray-500"
      {...props}
    />
  );
}
