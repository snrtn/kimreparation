import ScreenTemplate from "../screenTemplate"; // 우리가 만든 본체 템플릿 호출
import appleLaptopData from "./appleLaptop.data";

const Macbook = () => (
  <ScreenTemplate
    categoryTitle="MACBOOK"
    mainTitle="Retrouvez l'éclat de votre écran Retina."
    guideData={appleLaptopData}
  />
);

export default Macbook;
