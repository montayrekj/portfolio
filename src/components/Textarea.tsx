import { Dispatch, HTMLProps, SetStateAction } from "react";

type TextAreaProps = {
  name: string;
  placeholder: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
} & HTMLProps<HTMLTextAreaElement>;

export default function Textarea({
  name,
  placeholder,
  value,
  setValue,
  ...props
}: TextAreaProps) {
  return (
    <textarea
      {...props}
      className="dark:bg-black bg-white border border-gray-600 px-4 py-1 rounded-xl placeholder:text-sm placeholder:text-gray-500"
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}
