export interface ICommonLanugageInterface {
  header: ICommonLanugageInterfaceHeader;
  mainScreen: ICommonLanguageMain;
  presentationScreen: ICommonLanguagePresentation;
  whatWeProduceScreen: ICommonLanguageProduction;
  galleryScreen: ICommonLanguageGallery;
  shippingScreen: ICommonLanguageShipping;
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
  contact: string;
  contactUs: string;
  email: string;
  madeBy: string;
  currentPhoneMotherland: string;
  currentPhoneForeign: string;
  detailsContact: string;
  detailsDetails: string;
  author: string;
  authorSite: string;
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
  galleryComponentMisc: IGalleryComponentMisc;
  drawers: IDrawerItem[];
  tables: IDrawerItem[];
  organizers: IDrawerItem[];
  chests: IDrawerItem[];
}

interface ICommonLanguageGalleryItem {
  title: string;
  description: string[];
}

interface IGalleryComponentMisc {
  seeMore: string;
  open: string;
  close: string;
  currentCollection: string;
  showMore: string;
  closeGroup: string;
}
interface IDrawerItem {
  title: string;
  sizing: string;
  createdUsing: string;
}
interface ICommonLanguageShipping {
  shippingTitle: string;
  contact: string;
  contactDesc: string;
  details: string;
  detailsDesc: string;
  agreement: string;
  agreementDesc: string;
}
