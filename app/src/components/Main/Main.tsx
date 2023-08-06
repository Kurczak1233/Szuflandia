import GalleryScreen from "./components/GalleryScreen/GalleryScreen";
import InitialScreen from "./components/InitialScreen/InitialScreen";
import PresentationScreen from "./components/PresentationScreen/PresentationScreen";
import WhatWeProduceScreen from "./components/WhatWeProduceScreen/WhatWeProduceScreen";
import styles from "./Main.module.scss";
const Main = () => {
  return (
    <main className={styles.main}>
      <InitialScreen />
      <WhatWeProduceScreen />
      <PresentationScreen />
      <GalleryScreen />
    </main>
  );
};

export default Main;
