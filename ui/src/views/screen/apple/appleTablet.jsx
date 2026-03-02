import ScreenTemplate from "../screenTemplate"; // 우리가 만든 본체 템플릿
import appleTabletData from "./appleTablet.data"; // 아이패드 전용 데이터

const Ipad = () => (
  <ScreenTemplate
    categoryTitle="IPAD"
    mainTitle="Redonnez vie à votre tablette."
    guideData={appleTabletData}
  />
);

export default Ipad;
