import React, { useState } from "react";

function Textarea({ bgColor, placeholder, disabled, text, setText }) {
  const bgClass = bgColor ? { backgroundColor: bgColor } : {};
  const textChange = (e) => {
    setText(e.target.value);
  };
  return (
    <div className="min-h-[250px] p-4 text-first relative">
      <textarea
        className="absolute top-0 left-0 w-full h-full text-xl p-4 bg-inherit text-white border-none outline-none resize-none font-semibold rounded-md"
        style={bgClass}
        name="text"
        id="text"
        value={text}
        onChange={textChange}
        placeholder={placeholder}
        disabled={disabled}
      ></textarea>
    </div>
  );
}

export default Textarea;
