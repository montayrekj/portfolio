import { Dispatch, HTMLProps, SetStateAction } from "react";

type TextInputProps = {
  name: string;
  type?: string;
  placeholder: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
} & HTMLProps<HTMLInputElement>;

export default function TextInput({
  name,
  type = "text",
  placeholder,
  value,
  setValue,
  ...props
}: TextInputProps) {
  return (
    <input
      {...props}
      className="dark:bg-black bg-white border border-gray-600 px-4 py-1 rounded-2xl"
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}
