import { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLeft } from "@fortawesome/free-solid-svg-icons";
import Button from "./components/Button";
import Textarea from "./components/Textarea";
import Dropdowm from "./components/Dropdowm";
import { TranslateContext } from "./context/ApiContext";

function App() {
  const {
    languageFrom,
    setLanguageFrom,
    languageTo,
    setLanguageTo,
    textToConvert,
    setTextToConvert,
    textConverted,
    setTextConverted,
    translateText,
  } = useContext(TranslateContext);
  const handleTranslate = async () => {
    try {
      await translateText(textToConvert, languageFrom, languageTo);
    } catch (error) {
      console.log("Error translate text:", error);
    }
  };
  const handleSwitch = () => {
    setLanguageFrom(languageTo);
    setLanguageTo(languageFrom);
    setTextToConvert(textConverted);
    setTextConverted(textToConvert);
  };
  return (
    <>
      <div className="bg-[#111222] h-full sm:h-screen p-4 flex items-center justify-center">
        <div className="flex flex-col gap-y-8 w-full max-w-4xl mx-auto">
          <h1 className="text-blue-500 font-bold text-2xl sm:text-4xl text-center">
            Language - Translator
          </h1>
          <div className="flex sm:gap-x-2 w-full mx-auto items-center flex-wrap justify-center gap-y-2 sm:flex-nowrap">
            <div className="w-full ">
              <Dropdowm language={languageFrom} setLanguage={setLanguageFrom} />
            </div>
            <div
              className="text-white text-[20px]  cursor-pointer hover:text-[#868282]"
              onClick={handleSwitch}
            >
              <FontAwesomeIcon icon={faRightLeft} />
            </div>
            <div className="w-full sm:mt-0">
              <Dropdowm language={languageTo} setLanguage={setLanguageTo} />
            </div>
          </div>
          <div className="flex gap-x-2 w-full mx-auto flex-wrap sm:flex-nowrap">
            <div className="w-full sm:w-1/2">
              <Textarea
                placeholder="Enter text"
                text={textToConvert}
                setText={setTextToConvert}
              />
            </div>
            <div className="w-full sm:w-1/2 mt-2 sm:mt-0">
              <Textarea
                bgColor="#444444"
                placeholder="Translate"
                disabled={true}
                text={textConverted}
              />
            </div>
          </div>
          <Button handleTranslate={handleTranslate} />
        </div>
      </div>
    </>
  );
}

export default App;
