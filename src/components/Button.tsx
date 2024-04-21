import classNames from "classnames";

type ButtonProps = {
  label: string;
  url?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
};

const variantClasses = {
  primary: "border-black dark:border-white border px-4 py-1 rounded-2xl",
  secondary:
    "dark:bg-lightblue bg-darkblue text-white dark:text-black py-2 px-6 rounded-3xl font-semibold",
};

export default function Button({
  label,
  url,
  onClick,
  variant = "primary",
}: ButtonProps) {
  return url ? (
    <a className={classNames("", variantClasses[variant])}>{label}</a>
  ) : (
    <button onClick={onClick}>{label}</button>
  );
}
