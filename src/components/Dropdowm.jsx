import React, { useContext } from "react";
import { TranslateContext } from "../context/ApiContext";

function Dropdowm({ language, setLanguage }) {
  const { translateData } = useContext(TranslateContext);
  const languageChange = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <div className="border border-white bg-inherit  rounded-md">
      <select
        className="w-full bg-inherit border-none outline-none text-blue-300 p-2"
        name="language"
        id="language"
        value={language}
        onChange={languageChange}
      >
        {translateData.map((language, index) => (
          <option
            key={index}
            value={language.code}
            className="text-black w-[100px]"
          >
            {language.language}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Dropdowm;
