import { useState } from "react";
import { FaEdit } from "react-icons/fa";

const IngredientItem = ({ name, quantity }) => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="flex items-center justify-between bg-pink-300 rounded-md p-2 mt-1">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
          className="w-4 h-4"
        />
        <span className={checked ? "line-through" : ""}>{name}</span>
      </div>
      <div className="flex items-center gap-2">
        <span>{quantity}</span>
        <FaEdit className="text-gray-600 cursor-pointer" />
      </div>
    </div>
  );
};

export default IngredientItem;
