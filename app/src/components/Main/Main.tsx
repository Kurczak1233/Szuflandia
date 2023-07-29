import InitialScreen from "./components/InitialScreen/InitialScreen";
import PresentationScreen from "./components/PresentationScreen/PresentationScreen";
import WhatWeProduceScreen from "./components/WhatWeProduceScreen/WhatWeProduceScreen";

const Main = () => {
  return (
    <main>
      <InitialScreen />
      <WhatWeProduceScreen />
      <PresentationScreen />
    </main>
  );
};

export default Main;
