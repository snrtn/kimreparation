import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Bases
import Layout from "./views/layoutView";
import Home from "./views/homeView";
import NotFound from "./notFound";
import ScrollToTop from "./scrollToTop";

import DevisPhone from "./views/devis/devisPhone";
import DevisOther from "./views/devis/devisOther";

// 📌 [Docs]
import ScreenOrigine from "./views/screen/docs/screenOrigine";
import ScreenSoft from "./views/screen/docs/screenSoft";
import ScreenHard from "./views/screen/docs/screenHard";
import ScreenLcd from "./views/screen/docs/screenLcd";
import ScreenEco from "./views/screen/docs/screenEco";
import ScreenFoldable from "./views/screen/docs/screenFoldable";
import ScreenIphoneProcess from "./views/screen/docs/ScreenIphoneProcess";

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

// Client Drive 관련
import DashboardClient from "./client/dashboardClient";
import DossierClient from "./client/dossierClient";
import FactureClient from "./client/factureClient";
import DriveView from "./client/drive/driveView";
import DriveDashboard from "./client/drive/driveDashboard";
import DocsPreview from "./client/drive/docsPreview";
import ImgPreview from "./client/drive/imgPreview";

// admin
import BossRoom from "./admin/bossRoom";
import Dashboard from "./admin/dashboard";
import DossierCreate from "./admin/DossierCreate";
import DossierPreview from "./admin/dossierPreview";
import FactureCreate from "./admin/factureCreate";
import FacturePreview from "./admin/facturePreview";

function App() {
  const isVercelDomain = window.location.hostname.includes("vercel.app");
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return sessionStorage.getItem("siteLockAuth") === "true";
  });

  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const handleLogin = (e) => {
    e.preventDefault();

    const correctPassword = import.meta.env.VITE_SITE_PASSWORD;

    if (password === correctPassword) {
      setIsAuthenticated(true);
      sessionStorage.setItem("siteLockAuth", "true"); // 로그인 성공 기록
      setError(false);
    } else {
      setError(true);
      setPassword(""); // 틀리면 칸 비우기
    }
  };

  // 🚧 1. Vercel 도메인 접속 시 가짜 Nginx 화면 노출
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
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "800px", width: "100%", padding: "20px" }}>
          <h1
            style={{
              fontSize: "42px",
              fontWeight: 400,
              margin: 0,
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
          <div style={{ fontSize: "14px", color: "#000", marginTop: "10px" }}>
            nginx
          </div>
        </div>
      </div>
    );
  }

  // 🔒 2. 정식 도메인 접속 시, 아직 비밀번호 안 쳤으면 이 화면 노출
  if (!isAuthenticated) {
    return (
      <div
        style={{
          display: "flex",
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f5f5f7",
        }}
      >
        <form
          onSubmit={handleLogin}
          style={{
            padding: "40px",
            backgroundColor: "#fff",
            borderRadius: "20px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
            textAlign: "center",
            width: "320px",
          }}
        >
          <h2
            style={{ marginBottom: "24px", fontWeight: 800, color: "#1d1d1f" }}
          >
            Ouverture Prochaine
          </h2>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError(false);
            }}
            placeholder="Mot de passe"
            style={{
              padding: "14px",
              width: "100%",
              borderRadius: "12px",
              border: error ? "2px solid #ff3b30" : "1px solid #d2d2d7",
              marginBottom: "16px",
              boxSizing: "border-box",
              fontSize: "1rem",
              outline: "none",
            }}
          />
          {error && (
            <p
              style={{
                color: "#ff3b30",
                fontSize: "0.8rem",
                marginTop: "-8px",
                marginBottom: "16px",
                fontWeight: 700,
              }}
            >
              Mot de passe incorrect
            </p>
          )}
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "14px",
              backgroundColor: "#0071e3",
              color: "#fff",
              border: "none",
              borderRadius: "12px",
              cursor: "pointer",
              fontWeight: 800,
              fontSize: "1rem",
            }}
          >
            Entrer
          </button>
        </form>
      </div>
    );
  }

  // ✅ 3. 비밀번호 맞게 치면 보여줄 진짜 메인 사이트(App)
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="screen">
            <Route index element={<ScreenOrigine />} />
            <Route path="soft" element={<ScreenSoft />} />
            <Route path="hard" element={<ScreenHard />} />
            <Route path="lcd" element={<ScreenLcd />} />
            <Route path="eco" element={<ScreenEco />} />
            <Route path="foldable" element={<ScreenFoldable />} />
            <Route path="iphone" element={<ScreenIphoneProcess />} />
          </Route>

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
            <Route index element={<DashboardClient />} />
            <Route path="dossier:docsId" element={<DossierClient />} />
            <Route path="facture:docsId" element={<FactureClient />} />

            <Route path="drive" element={<DriveView />} />
            <Route path="driveDashboard/:repairId" element={<DriveDashboard />}>
              <Route index element={<DocsPreview />} />
              <Route path="docs" element={<DocsPreview />} />
              <Route path="imgs/:itemId" element={<ImgPreview />} />
            </Route>
          </Route>

          <Route path="*" element={<NotFound />} />
        </Route>

        <Route path="admin">
          <Route index element={<BossRoom />} />

          {/* Dashboard 레이아웃이 감싸고 있는 녀석들 */}
          <Route element={<Dashboard />}>
            {/* 👇 드디어 추가된 dashboard 주소! 들어오면 DossierPreview를 보여줌 */}
            <Route path="dashboard" element={<DossierPreview />} />

            <Route path="dossier/view" element={<DossierPreview />} />
            <Route path="dossier/new" element={<DossierCreate />} />
            <Route path="facture/view" element={<FacturePreview />} />
            <Route path="facture/new" element={<FactureCreate />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
