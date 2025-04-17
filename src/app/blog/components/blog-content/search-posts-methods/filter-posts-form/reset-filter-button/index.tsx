import { faChevronDown, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useFilterPosts } from "@/contexts/filterPostsContext";

export const ResetFilterButton = ({ isOpen }: { isOpen: boolean }) => {
  const { filter, setFilter } = useFilterPosts();

  return (
    <button
      className={`bg-primary group-hover:shadow-primary group-hover:shadow-all-around rounded-sm rounded-l-none px-3 py-1.5 text-white duration-300`}
      onClick={() => setFilter("")}
    >
      <FontAwesomeIcon
        icon={filter ? faTimes : faChevronDown}
        className={`duration-300 ${isOpen && !filter && "rotate-180"}`}
      />
    </button>
  );
};
