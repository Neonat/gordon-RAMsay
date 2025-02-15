import { useState } from "react";
import { FaChevronDown, FaChevronUp, FaEdit } from "react-icons/fa"; // Import icons

const CategoryItem = ({ title, count, total, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-pink-200 rounded-lg p-3 mb-2">
      {/* Category Header */}
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-bold">{title}</span>
        <span>{count}/{total}</span>
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </div>

      {/* Show children when open */}
      {isOpen && <div className="mt-2">{children}</div>}
    </div>
  );
};

export default CategoryItem;
