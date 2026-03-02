import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

// Bases
import Layout from "./views/layoutView";
import Home from "./views/homeView";
import NotFound from "./notFound";
import ScrollToTop from "./scrollToTop";

// apple
import ApplePhone from "./views/screen/apple/applePhone";
import AppleTablet from "./views/screen/apple/appleTablet";
import AppleLaptop from "./views/screen/apple/appleLaptop";

// Repair
import RepairScreen from "./views/repair/repairScreen";
import RepairWater from "./views/repair/repairWater";
import RepairBattery from "./views/repair/repairBattery";
import RepairHardware from "./views/repair/repairHardware";
import RepairSystem from "./views/repair/repairSystem";
import RepairLaptop from "./views/repair/repairLaptop";

// Atelier
import AtelierAtelier from "./views/atelier/atelierAtelier";
import AtelierDomicile from "./views/atelier/atelierDomicile";
import AtelierWarranty from "./views/atelier/atelierWarranty";
import AtelierHoraires from "./views/atelier/atelierHoraires";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="screen">
            <Route index element={<Navigate to="apple" replace />} />
            <Route path="apple">
              <Route index element={<ApplePhone />} />
              <Route path="tablet" element={<AppleTablet />} />
              <Route path="laptop" element={<AppleLaptop />} />
            </Route>
          </Route>

          <Route path="atelier">
            <Route index element={<AtelierAtelier />} />
            <Route path="atelierDomicile" element={<AtelierDomicile />} />
            <Route path="atelierWarranty" element={<AtelierWarranty />} />
            <Route path="atelierHoraires" element={<AtelierHoraires />} />
          </Route>

          <Route path="repair">
            <Route index element={<RepairScreen />} />
            <Route path="repairWater" element={<RepairWater />} />
            <Route path="repairBattery" element={<RepairBattery />} />
            <Route path="repairHardware" element={<RepairHardware />} />
            <Route path="repairSystem" element={<RepairSystem />} />
            <Route path="repairLaptop" element={<RepairLaptop />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
