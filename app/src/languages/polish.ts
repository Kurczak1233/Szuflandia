import { ICommonLanugageInterface } from "./commonLanguageInterface";

export const PolishLanguage: ICommonLanugageInterface = {
  header: {
    mainText1: "Strona główna",
    mainText2: "Galeria",
    mainText3: "Kontakt",
  },
  mainScreen: {
    topText: "Witamy w",
    szuflandiaTitle: "Szuflandii",
    siteDescription:
      "Miejscu, w którym wyjątkowy rzemieślnik tworzy wykwintne, ręcznie robione meble z niezrównaną precyzją i dbałością o szczegóły",
    attributes: {
      madeByHand: "Ręcznie tworzone",
      howManyProducts: "+200 mebli",
      uniqueFurniture: "Unikalne zdobnictwo",
      oneCraftsman: "Jeden fachowiec",
    },
  },
  presentationScreen: {
    uniqueFurniture: "Unikalnalnie",
    description:
      "Nasze meble wyróżniają się tym, że każdy element jest indywidualnie inspirowany, wykonany z niezwykłą starannością, zapewniając charakterystyczne i ekskluzywne kreacje.",
    uniqueFurnitureSecondPart: "zaprojektowane",
    descriptionSecondPart:
      "Ręczne tworzenie oraz zastosowanie różnorodnych materiałów gwarantują, że każdy mebel jest niepowtarzalny.",
  },
  footer: {
    contactUs: "Skontaktuj się z nami",
    contactUsDescription: "Ożyw swoje wnętrze unikalnymi meblami!",
    email: "Email",
    phonePolish: "Polski",
    phoneEnglish: "Angielski",
  },
  whatWeProduceScreen: {
    cabinetsItem: {
      categoryTitle: "Szafki",
      categoryDescription:
        "Odkryj naszą kolekcję małych szafek, starannie zaprojektowanych, o różnych rozmiarach i unikalnych cechach. Te urocze elementy są idealne do dekoracji, zapewniając jednocześnie opcje przechowywania zarówno na górze, jak i wewnątrz, dzięki czemu są wszechstronne i praktyczne w każdej przestrzeni.",
      categoryTraitsButtons: ["Praktyczne", "Ozdobne"],
    },
    tablesItem: {
      categoryTitle: "Stoliki",
      categoryDescription:
        "Przedstawiamy nasze stoły, stworzone z myślą zarówno o stylu, jak i funkcjonalności. Dostępne w różnych rozmiarach zostały zaprojektowane tak, aby wzbogacić każdą przestrzeń, jednocześnie służąc wszechstronnym celom dla Twojej wygody.",
      categoryTraitsButtons: ["Uniwersalne", "Eleganckie"],
    },
    organizersItem: {
      categoryTitle: "Organizery",
      categoryDescription:
        "Odkryj naszą kolekcję dekoracyjnych organizerów, łączących estetykę z funkcjonalnością. Wyposażone w szuflady lub otwarte przestrzenie, przechowują niezbędne przedmioty, aby utrzymać porządek w Twojej przestrzeni. Produkowane w różnych unikalnych wariantach, każdy element jest świadectwem wyjątkowego kunsztu, zaspokajając najróżniejsze preferencje.",
      categoryTraitsButtons: ["Artystyczne", "Pojemne"],
    },
    chestsItem: {
      categoryTitle: "Skrzynki",
      categoryDescription:
        "Małe, innowacyjne skrzynie - organizery w nowej odsłonie. Genialnie zaprojektowane ze świeżym podejściem, idealne do efektywnego przechowywania i sortowania małych przedmiotów. Wybieraj spośród różnych rozmiarów, aby znaleźć idealne dopasowanie do swojej przestrzeni",
      categoryTraitsButtons: ["Klasyczne", "Kreatywne"],
    },
    furnitureGreen: "Meble",
    weProduceText: "jakie wytwarzamy",
  },
  galleryScreen: {
    galleryTitle: "Galeria",
    descriptionBlackPart: "Większość z mebli pokazanych poniżej jest aktualnie",
    availableGreenPart: "dostępna.",
    furtherDescriptionFirstSentence:
      "Aby zamówić jeden z przemiotów poniżej, albo podobny - skontaktuj się z nami.",
    furtherDescriptionSecondSentence:
      "Jesteśmy otwarci na Twoją kreatywność i pomysły.",
    galleryItems: [
      {
        title: "Szafki",
        description: [
          "Składają się przeważnie z maksymalnie kilku szuflad.",
          "Pozwalające przechowywać w środku lub na górze większe przedmioty.",
          "Istnieją warianty z wieszakami w środku.",
        ],
      },
      {
        title: "Stoliki",
        description: [
          "Pełnią role dekoracyjno-funkcyjne.",
          "Przeważnie niewielkich rozmiarów.",
          "Niektóre warianty pozwalają przechowywać przedmioty w środku.",
          "Istnieją warianty z wbudowaną szachownicą na blacie.",
        ],
      },
      {
        title: "Organizery",
        description: [
          "Składają się przeważnie z dużej ilości małych szuflad.",
          "Pozwalające przechowywać w środku lub na górze niewielkie przedmioty.",
          "Zdarzają się warianty z niewielkimi wieszakami w środku.",
        ],
      },
      {
        title: "Skrzynie",
        description: [
          "Są przeważnie ozdobnymi drewnianymi pojemnikami.",
          "Część z nich posiada w sobie strukturę organizera.",
          "Istnieją unikaty o wyjątkowych kształtach.",
          "Przeważnie niewielkich rozmiarów.",
        ],
      },
    ],
  },
};
