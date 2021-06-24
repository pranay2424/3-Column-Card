import React from "react";
import Content from "./Content";
import Content2 from "./Content2";
import Content3 from "./Content3";
import DesktopView from "./DesktopView";
import Luxury from "./Luxury";
import Sedan from "./Sedan";
import Suvs from "./Suvs";
const SecondFile = () => {
  return (
    <DesktopView>
      <Content>
        <Sedan />
      </Content>

      <Content2>
        <Suvs />
      </Content2>

      <Content3>
        <Luxury />
      </Content3>

    </DesktopView>
  );
}

export default SecondFile;
