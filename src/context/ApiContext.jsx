import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const TranslateContext = createContext(null);

export default function TranslateContextProvider({ children }) {
  const [translateData, setTranslateData] = useState([
    { code: "en", language: "English" },
    { code: "hi", language: "Hindi" },
  ]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [languageFrom, setLanguageFrom] = useState(translateData[0].code);
  const [languageTo, setLanguageTo] = useState(translateData[1].code);
  const [textToConvert, setTextToConvert] = useState("");
  const [textConverted, setTextConverted] = useState("");
  const apiKey = import.meta.env.VITE_TRANSLATE_URL;
  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        url: "https://google-translate113.p.rapidapi.com/api/v1/translator/support-languages",
        headers: {
          "x-rapidapi-key": apiKey,
          "x-rapidapi-host": "google-translate113.p.rapidapi.com",
        },
      };
      try {
        const response = await axios.request(options);
        setTranslateData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      } finally {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  const translateText = async (text, From, To) => {
    const options = {
      method: "POST",
      url: "https://google-translate113.p.rapidapi.com/api/v1/translator/text",
      headers: {
        "x-rapidapi-key": apiKey,
        "x-rapidapi-host": "google-translate113.p.rapidapi.com",
        "Content-Type": "application/json",
      },
      data: {
        from: From,
        to: To,
        text: text,
      },
    };

    try {
      const response = await axios.request(options);
      setTextConverted(response.data.trans);
      // console.log(response.data);
      // return response.data.translatedText;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  useEffect(() => {
    if (textToConvert) {
      translateText(textToConvert, languageFrom, languageTo);
    }
  }, [languageFrom, languageTo]); // add textToConvert if want to convert with the text

  return (
    <TranslateContext.Provider
      value={{
        translateData,
        loading,
        error,
        languageFrom,
        setLanguageFrom,
        languageTo,
        setLanguageTo,
        textToConvert,
        setTextToConvert,
        textConverted,
        setTextConverted,
        translateText,
      }}
    >
      {children}
    </TranslateContext.Provider>
  );
}
