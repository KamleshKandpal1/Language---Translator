import React from "react";

function Button({ handleTranslate }) {
  return (
    <div
      className="bg-blue-600 w-full p-2 text-white text-base font-semibold rounded-md hover:bg-blue-500 cursor-pointer text-center"
      onClick={handleTranslate}
    >
      Translate
    </div>
  );
}

export default Button;
