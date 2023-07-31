export interface ICommonLanugageInterface {
  header: ICommonLanugageInterfaceHeader;
  mainScreen: ICommonLanguageMain;
  presentationScreen: ICommonLanguagePresentation;
  whatWeProduceScreen: ICommonLanguageProduction;
  galleryScreen: ICommonLanguageGallery;
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
  uniqueFurnitureSecondPart: string;
  description: string;
  descriptionSecondPart: string;
}

interface ICommonLanguageFooter {
  contactUs: string;
  contactUsDescription: string;
  email: string;
  phonePolish: string;
  phoneEnglish: string;
}

interface ICommonLanguageProduction {
  cabinetsItem: ICommonLanguageProductionCategory;
  tablesItem: ICommonLanguageProductionCategory;
  organizersItem: ICommonLanguageProductionCategory;
  chestsItem: ICommonLanguageProductionCategory;
  furnitureGreen: string;
  weProduceText: string;
}

interface ICommonLanguageProductionCategory {
  categoryTitle: string;
  categoryDescription: string;
  categoryTraitsButtons: string[];
}

interface ICommonLanguageGallery {
  galleryTitle: string;
  descriptionBlackPart: string;
  availableGreenPart: string;
  furtherDescriptionFirstSentence: string;
  furtherDescriptionSecondSentence: string;
  galleryItems: ICommonLanguageGalleryItem[];
}

interface ICommonLanguageGalleryItem {
  title: string;
  description: string[];
}
