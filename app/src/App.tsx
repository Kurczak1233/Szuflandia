import { useState } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import React from "react";
import { PolishLanguage } from "./languages/polish";
import { EnglishLanguage } from "./languages/english";
import { ICommonLanugageInterface } from "languages/commonLanguageInterface";
export enum LanguageEnum {
  Polish,
  English,
}

const Languages: ILanguageChoice[] = [
  {
    langEnum: LanguageEnum.Polish,
    languageSheet: PolishLanguage,
  },
  {
    langEnum: LanguageEnum.English,
    languageSheet: EnglishLanguage,
  },
];
interface ILanguageChoice {
  langEnum: LanguageEnum;
  languageSheet: ICommonLanugageInterface;
}

export const LanguageContext = React.createContext(PolishLanguage);

const App = () => {
  const [currentLanguage, setCurrentLanguage] = useState<ILanguageChoice>(
    Languages[0]
  );

  const setLanguageToChosenOption = (option: LanguageEnum) => {
    const foundLang = Languages.find((item) => item.langEnum === option);
    if (foundLang) setCurrentLanguage(foundLang);
  };

  return (
    <LanguageContext.Provider value={currentLanguage.languageSheet}>
      <div className="App">
        <Header setLanguageToChosenOption={setLanguageToChosenOption} />
        <Main />
        <Footer />
      </div>
    </LanguageContext.Provider>
  );
};

export default App;
