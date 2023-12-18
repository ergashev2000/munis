import React, { useState } from "react";

const Index = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <input
        type="checkbox"
        id="Artel1"
        className="appearance-none "
        checked={isChecked}
        onChange={handleChange}
      />

      <label htmlFor="Artel1">
        <div className="flex-y-center cursor-pointer">
          <span
            className={`min-h-[20px] min-w-[20px] rounded border border-gray-300 ${
              isChecked ? "bg-red-500" : "bg-transparent"
            } absolute left-0`}
          />
          Bosch
        </div>
      </label>
    </>
  );
};

export default Index;
