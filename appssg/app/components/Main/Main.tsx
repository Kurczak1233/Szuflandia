import ContactForm from "./components/ContactForm/ContactForm";
import GalleryScreen from "./components/GalleryScreen/GalleryScreen";
import InitialScreen from "./components/InitialScreen/InitialScreen";
import PresentationScreen from "./components/PresentationScreen/PresentationScreen";
import ShippingScreen from "./components/ShippingScreen/ShippingScreen";
import WhatWeProduceScreen from "./components/WhatWeProduceScreen/WhatWeProduceScreen";
import styles from "./Main.module.scss";
const Main = () => {
  return (
    <main className={styles.main}>
      <InitialScreen />
      <WhatWeProduceScreen />
      <PresentationScreen />
      <GalleryScreen />
      <ShippingScreen />
      <ContactForm />
    </main>
  );
};

export default Main;
