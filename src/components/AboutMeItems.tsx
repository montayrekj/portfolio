import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type AboutMeItemsProp = {
  icon: IconProp;
  mainLabel: string;
  subLabel: string;
};

export default function AboutMeItems({
  icon,
  mainLabel,
  subLabel,
}: AboutMeItemsProp) {
  return (
    <div className="flex items-start flex-col text-left">
      <FontAwesomeIcon
        className="mb-2 text-gray-600 dark:text-gray-400"
        size="lg"
        icon={icon}
      />
      <p>
        <span className="-ml-4 pl-3 font-semibold border-l-2 dark:border-gray-700 border-gray-300">
          {mainLabel}
        </span>{" "}
        {subLabel}
      </p>
    </div>
  );
}
