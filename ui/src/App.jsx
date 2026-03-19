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
import Waterproof from "./views/repair/Waterproof";

// Atelier
import AtelierAtelier from "./views/atelier/atelierAtelier";
import SectionConditions from "./views/atelier/SectionConditions";
import SectionExcellence from "./views/atelier/SectionExcellence";
import SectionLegal from "./views/atelier/SectionLegal";

// Toy
import ToyRepair from "./views/toy/toyRepair";
import ToyJoyCon from "./views/toy/toyJoyCon";
import ToyDevis from "./views/toy/toyDevis";

// Client Drive 관련 컴포넌트 임포트
import DashboardClient from "./client/dashboardClient";
import DossierClient from "./client/dossierClient";
import FactureClient from "./client/factureClient";

import DriveView from "./client/drive/driveView";
import DriveDashboard from "./client/drive/driveDashboard";
import DocsPreview from "./client/drive/docsPreview";
import ImgPreview from "./client/drive/imgPreview";

// admin
// import AdminView from "./admin/adminView";
import AdminView from "./admin/adminVIew";
import Dashboard from "./admin/dashboard";
import DossierCreate from "./admin/DossierCreate";
import DossierPreview from "./admin/dossierPreview";
import FactureCreate from "./admin/factureCreate";
import FacturePreview from "./admin/facturePreview";

function App() {
  const isVercelDomain = window.location.hostname.includes("vercel.app");

  // 형님의 정식 도메인이 연결되었다면 정식 도메인 외에는 다 차단 가능
  if (isVercelDomain) {
    return (
      <div
        style={{
          backgroundColor: "#fff",
          color: "#000",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          // 폰트를 더 서버 기본 폰트스럽게 수정
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "800px", width: "100%", padding: "20px" }}>
          <h1
            style={{
              fontSize: "42px",
              fontWeight: 400, // Nginx는 너무 두껍지 않은 게 포인트입니다
              margin: 0, // 기본 마진 제거해서 짤림 방지
              lineHeight: "1.2",
            }}
          >
            502 Bad Gateway
          </h1>
          <hr
            style={{
              border: "none",
              borderTop: "1px solid #eaeaea",
              margin: "15px 0",
            }}
          />
          <div
            style={{
              fontSize: "14px",
              color: "#000",
              marginTop: "10px",
            }}
          >
            nginx
          </div>
        </div>
      </div>
    );
  }

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

          <Route path="client">
            {/* devis */}
            <Route index element={<DashboardClient />} />
            <Route path="dossier:docsId" element={<DossierClient />} />
            <Route path="facture:docsId" element={<FactureClient />} />

            <Route path="drive" element={<DriveView />} />

            {/* App.js 라우트 부분 */}
            <Route path="driveDashboard/:repairId" element={<DriveDashboard />}>
              <Route index element={<DocsPreview />} />
              <Route path="docs" element={<DocsPreview />} />
              {/* 📍 :itemId 추가 (어떤 폴더인지 알려줌) */}
              <Route path="imgs/:itemId" element={<ImgPreview />} />
            </Route>
          </Route>

          <Route path="*" element={<NotFound />} />
        </Route>

        {/* --- 🛠️ 어드민 레이아웃 (여기서 사이드메뉴 문제 해결!) --- */}
        <Route path="admin">
          {/* 1. 로그인 (사이드메뉴 없음) */}
          <Route index element={<AdminView />} />

          {/* 2. 대시보드 및 리스트 (사이드메뉴 고정) */}
          <Route element={<Dashboard />}>
            <Route path="dashboard" element={null} />
            {/* Dashboard 컴포넌트 내에서 처리됨 */}
            <Route path="dossier/new" element={<DossierCreate />} />
            <Route path="dossier/view" element={<DossierPreview />} />
            <Route path="facture/new" element={<FactureCreate />} />
            <Route path="facture/view" element={<FacturePreview />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
