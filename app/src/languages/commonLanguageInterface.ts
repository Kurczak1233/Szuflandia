export interface ICommonLanugageInterface {
  header: ICommonLanugageInterfaceHeader;
  mainScreen: ICommonLanguageMain;
  presentationScreen: ICommonLanguagePresentation;
  footer: ICommonLanguageFooter;
}

interface ICommonLanugageInterfaceHeader {
  mainText1: string;
  mainText2: string;
  mainText3: string;
}

interface ICommonLanguageMain {
  topText: string;
  szuflandiaTitle: string;
  siteDescription: string;
  attributes: ICommonLanguageMainAttributes;
}

interface ICommonLanguageMainAttributes {
  madeByHand: string;
  howManyProducts: string;
  uniqueFurniture: string;
  oneCraftsman: string;
}

interface ICommonLanguagePresentation {
  uniqueFurniture: string;
  description: string;
}

interface ICommonLanguageFooter {
  contactUs: string;
  contactUsDescription: string;
  email: string;
  phonePolish: string;
  phoneEnglish: string;
}
