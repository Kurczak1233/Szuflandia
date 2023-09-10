import mainBackground from "images/MainBackground.webp";
import "./InitialScreen.scss";
import SzuflandiaColorLogo from "images/SzuflandiaColorLogo.svg";
import { LanguageContext } from "App";
import React from "react";
import GreenSeparatorBar from "../GreenSeparatorBar/GreenSeparatorBar";
import WhiteVector from "../WhiteVector/WhiteVector";

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
          <img
            src={SzuflandiaColorLogo}
            alt="Szuflandia logo item"
            className="initialScreenSzuflandiaLogo"
            width={151}
            height={164}
          ></img>
          {/* <div>Button?</div> */}
        </div>
      </div>
      <img
        className="initialScreenImage"
        src={mainBackground}
        alt="Szuflandia main background"
        height={1080}
      ></img>
      <WhiteVector />
    </>
  );
};

export default InitialScreen;
