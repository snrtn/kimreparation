import ScreenTemplate from "../screenTemplate";
import applePhoneData from "./applePhone.data";

const Iphone = () => (
  <ScreenTemplate
    categoryTitle="IPHONE"
    mainTitle="Trouvez l'écran qui vous ressemble."
    guideData={applePhoneData}
  />
);

export default Iphone;
