import { HTMLProps } from "react";

export default function TextInput(props: HTMLProps<HTMLInputElement>) {
  return (
    <input
      type="text"
      className="dark:bg-black bg-white border border-gray-600 px-4 py-1 rounded-lg placeholder:text-sm placeholder:text-gray-500"
      {...props}
    />
  );
}
