import "./InitialScreen.scss";
import { LanguageContext } from "page";
import React from "react";
import GreenSeparatorBar from "../GreenSeparatorBar/GreenSeparatorBar";
import WhiteVector from "../WhiteVector/WhiteVector";
import Image from "next/image";

const InitialScreen = () => {
  const currentLanguageSheet = React.useContext(LanguageContext);
  return (
    <>
      <div className="initialScreenMainLayer" id="mainScreen">
        <div className="initialScreenMainScreenContainer">
          <div className="initialScreenTopText">
            {currentLanguageSheet.mainScreen.topText}
          </div>
          <div className="initialScreenMainTitle">
            {currentLanguageSheet.mainScreen.szuflandiaTitle}
          </div>
          <div className="initialScreenDescription">
            {currentLanguageSheet.mainScreen.siteDescription}
          </div>
          <div className="initialScreenAttriubtes">
            <div>{currentLanguageSheet.mainScreen.attributes.madeByHand}</div>
            <GreenSeparatorBar />
            <div>
              {currentLanguageSheet.mainScreen.attributes.howManyProducts}
            </div>
            <GreenSeparatorBar />
            <div>
              {currentLanguageSheet.mainScreen.attributes.uniqueFurniture}
            </div>
            <GreenSeparatorBar />
            <div>{currentLanguageSheet.mainScreen.attributes.oneCraftsman}</div>
          </div>
          <div className="mobileInitialScreenAttriubtes">
            <div className="mobileInitialScreenAtrributesItemWrapper">
              <div className="mobileInitialScreenAtrributesItemWrapperText">
                {currentLanguageSheet.mainScreen.attributes.madeByHand}
              </div>
              <GreenSeparatorBar />
              <div className="mobileInitialScreenAtrributesItemWrapperText">
                {currentLanguageSheet.mainScreen.attributes.howManyProducts}
              </div>
            </div>
            <div className="mobileInitialScreenAtrributesItemWrapper">
              <div className="mobileInitialScreenAtrributesItemWrapperText">
                {currentLanguageSheet.mainScreen.attributes.uniqueFurniture}
              </div>
              <GreenSeparatorBar />
              <div className="mobileInitialScreenAtrributesItemWrapperText">
                {currentLanguageSheet.mainScreen.attributes.oneCraftsman}
              </div>
            </div>
          </div>
          <Image
            src="/SzuflandiaColorLogo.svg"
            alt="Szuflandia logo item"
            className="initialScreenSzuflandiaLogo"
            width={151}
            height={164}
          ></Image>
          {/* <div>Button?</div> */}
        </div>
      </div>
      <Image
        className="initialScreenImage"
        src="/MainBackground.webp"
        alt="Szuflandia main background"
        height={1080}
        width={1920}
      ></Image>
      <WhiteVector />
    </>
  );
};

export default InitialScreen;
