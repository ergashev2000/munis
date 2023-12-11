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
        id="Artel"
        className="appearance-none "
        checked={isChecked}
        onChange={handleChange}
      />
      <span
        className={`min-h-[20px] min-w-[20px] rounded border border-gray-300 ${
          isChecked ? "bg-gray-300" : "bg-transparent"
        } absolute left-0`}
      />
      <label htmlFor="Artel">Artel</label>
    </>
  );
};

export default Index;
