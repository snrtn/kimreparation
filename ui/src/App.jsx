import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Bases
import Layout from "./views/layoutView";
import Home from "./views/homeView";
import NotFound from "./notFound";
import ScrollToTop from "./scrollToTop";

import DevisPhone from "./views/devis/devisPhone";
import DevisOther from "./views/devis/devisOther";

// 📌 [Docs] 화면 품질별 컴포넌트들
import ScreenOrigine from "./views/screen/docs/screenOrigine";
import ScreenSoft from "./views/screen/docs/screenSoft";
import ScreenHard from "./views/screen/docs/screenHard";
import ScreenLcd from "./views/screen/docs/screenLcd";
import ScreenEco from "./views/screen/docs/screenEco";
import ScreenFoldable from "./views/screen/docs/screenFoldable";

// Repair
import RepairScreen from "./views/repair/repairScreen";
import RepairWater from "./views/repair/repairWater";
import RepairBattery from "./views/repair/repairBattery";
import RepairHardware from "./views/repair/repairHardware";
import RepairSystem from "./views/repair/repairSystem";
import RepairLimit from "./views/repair/repairLimit";
import Waterproof from "./views/repair/waterproof";

// Atelier
import AtelierAtelier from "./views/atelier/atelierAtelier";
import SectionConditions from "./views/atelier/SectionConditions";
import SectionExcellence from "./views/atelier/SectionExcellence";
import SectionLegal from "./views/atelier/SectionLegal";

// Toy
import ToyRepair from "./views/toy/toyRepair";
import ToyJoyCon from "./views/toy/toyJoyCon";
import ToyDevis from "./views/toy/toyDevis";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          {/* 📌 [Screen] 새로운 구조: ScreenOrigine이 인덱스 */}
          <Route path="screen">
            <Route index element={<ScreenOrigine />} />
            <Route path="soft" element={<ScreenSoft />} />
            <Route path="hard" element={<ScreenHard />} />
            <Route path="lcd" element={<ScreenLcd />} />
            <Route path="eco" element={<ScreenEco />} />
            <Route path="foldable" element={<ScreenFoldable />} />
          </Route>

          {/* 📌 [Repair] 기존 구조 유지 */}
          <Route path="repair">
            <Route index element={<RepairScreen />} />
            <Route path="repairWater" element={<RepairWater />} />
            <Route path="repairBattery" element={<RepairBattery />} />
            <Route path="repairHardware" element={<RepairHardware />} />
            <Route path="repairSystem" element={<RepairSystem />} />
            <Route path="repairLimit" element={<RepairLimit />} />
            <Route path="waterproof" element={<Waterproof />} />
          </Route>

          <Route path="devis">
            <Route index element={<DevisPhone />} />
            <Route path="other" element={<DevisOther />} />
          </Route>

          <Route path="atelier">
            <Route index element={<AtelierAtelier />} />
            <Route path="atelierConditions" element={<SectionConditions />} />
            <Route path="atelierExcellence" element={<SectionExcellence />} />
            <Route path="atelierLegal" element={<SectionLegal />} />
          </Route>

          <Route path="toy">
            <Route index element={<ToyDevis />} />
            <Route path="joycon" element={<ToyJoyCon />} />
            <Route path="repair" element={<ToyRepair />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
