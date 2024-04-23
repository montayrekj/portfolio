import classNames from "classnames";

type ButtonProps = {
  label: string;
  url?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "tertiary";
  className?: string;
};

const variantClasses = {
  primary: "border-black dark:border-white border px-4 py-1 rounded-2xl",
  secondary:
    "dark:bg-lightblue bg-darkblue text-gray-200 dark:text-black py-2 px-6 rounded-3xl font-semibold",
  tertiary:
    "dark:border-lightblue border-darkblue text-darkblue dark:text-lightblue border px-4 py-1 rounded-2xl w-fit",
};

export default function Button({
  label,
  url,
  onClick,
  variant = "primary",
  className,
}: ButtonProps) {
  return url ? (
    <a
      className={classNames(
        "cursor-pointer",
        variantClasses[variant],
        className
      )}
      href={url}
      onClick={onClick}
    >
      {label}
    </a>
  ) : (
    <button
      className={classNames(
        "cursor-pointer",
        variantClasses[variant],
        className
      )}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
