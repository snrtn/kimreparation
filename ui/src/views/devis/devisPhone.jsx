import React, { useState, useRef } from "react";
import {
  Box,
  Container,
  LinearProgress,
  Dialog,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Zoom,
  Stack,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";

// 스텝 컴포넌트들
import Step0Intro from "./steps/Step0Intro";
import StepBrand from "./steps/StepBrand";
import StepModel from "./steps/StepModel";
import StepAppearance from "./steps/StepAppearance";
import StepDisplay from "./steps/StepDisplay";
import StepIncident from "./steps/StepIncident";
import StepWaterType from "./steps/StepWaterType";
import StepWaterDetails from "./steps/StepWaterDetails";
import StepFrame from "./steps/StepFrame";
import StepBattery from "./steps/StepBattery";
import StepTouchCheck from "./steps/StepTouchCheck";
import StepTouchIssues from "./steps/StepTouchIssues";
import StepCamera from "./steps/StepCamera";
import StepAudio from "./steps/StepAudio";
import StepConnection from "./steps/StepConnection";
import StepStorage from "./steps/StepStorage";
import StepEnvironment from "./steps/StepEnvironment";
import StepContact from "./steps/StepContact";
import StepSummary from "./steps/StepSummary";

const Transition = React.forwardRef((props, ref) => (
  <Zoom ref={ref} {...props} />
));

const ExitModal = ({ open, onClose, onConfirm }) => (
  <Dialog
    open={open}
    onClose={onClose}
    TransitionComponent={Transition}
    PaperProps={{ sx: { borderRadius: "28px", p: 1, maxWidth: "340px" } }}
  >
    <Box sx={{ p: 3, textAlign: "center" }}>
      <WarningAmberIcon sx={{ fontSize: 48, color: "#ff3b30", mb: 2 }} />
      <Typography variant="h6" sx={{ fontWeight: 800, mb: 1 }}>
        Quitter le diagnostic ?
      </Typography>
      <Typography sx={{ color: "#86868b", fontSize: "0.9rem", mb: 3 }}>
        Toutes les données seront perdues. Annuler ?
      </Typography>
      <Stack spacing={1}>
        <Button
          fullWidth
          onClick={onConfirm}
          sx={{
            py: 1.5,
            borderRadius: "14px",
            bgcolor: "#ff3b30",
            color: "#fff",
            fontWeight: 700,
          }}
        >
          Oui, abandonner
        </Button>
        <Button
          fullWidth
          onClick={onClose}
          sx={{
            py: 1.5,
            borderRadius: "14px",
            color: "#1d1d1f",
            fontWeight: 600,
          }}
        >
          Continuer
        </Button>
      </Stack>
    </Box>
  </Dialog>
);

const DevisPhone = () => {
  const [step, setStep] = useState(0);
  const [cancelOpen, setCancelOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const sigCanvasRef = useRef(null);

  const initialFormData = {
    status: "",
    brand: "",
    customBrand: "",
    modelName: "",
    modelNumber: "",
    unknownName: false,
    unknownNumber: false,
    appearance: [],
    display: [],
    incident: [],
    waterType: "",
    waterTime: "",
    waterGoal: "",
    frame: [],
    battery: [],
    touchWorks: "",
    touchIssues: [],
    camera: [],
    audio: [],
    connection: [],
    storage: "",
    environment: [],
    userName: "",
    userPhone: "",
    userEmail: "",
    contactType: "phone",
    emailUser: "",
    emailDomain: "@gmail.com",
    customDomain: "",
    signatureDone: false,
    finalTermsAgreed: false, // 서류 내 동의
    finalConfirm: false, // 🔥 하단 파란색 최종 확인 (추가)
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleUpdate = (newData) => {
    setFormData((prev) => {
      let nextState = { ...prev, ...newData };
      if (newData.status && newData.status !== prev.status)
        return { ...initialFormData, status: newData.status };
      if (newData.incident) {
        const hasWater = ["water_low", "water_high"].some((v) =>
          newData.incident.includes(v),
        );
        if (!hasWater) {
          nextState.waterType = "";
          nextState.waterTime = "";
          nextState.waterGoal = "";
        }
      }
      if (newData.touchWorks === "yes") nextState.touchIssues = [];
      return nextState;
    });
  };

  const handleConfirmExit = () => {
    if (document.fullscreenElement) document.exitFullscreen().catch(() => {});
    setFormData(initialFormData);
    setIsSubmitted(false);
    setStep(0);
    setCancelOpen(false);
  };

  const getActiveFlow = () => {
    if (!formData.status) return [];
    const steps = ["brand", "model"];
    const hasWater = ["water_low", "water_high"].some((v) =>
      formData.incident.includes(v),
    );
    if (formData.status === "working") {
      steps.push("appearance", "display", "incident");
      if (hasWater) steps.push("waterType", "waterDetails");
      steps.push("frame", "battery", "touchCheck");
      if (formData.touchWorks === "no") steps.push("touchIssues");
      steps.push("camera", "audio", "connection", "storage", "environment");
    } else {
      steps.push("incident");
      if (hasWater) steps.push("waterType", "waterDetails");
      steps.push("appearance", "frame", "storage", "environment");
    }
    steps.push("contact", "summary");
    return steps;
  };

  const activeFlow = getActiveFlow();
  const currentStepId = step > 0 ? activeFlow[step - 1] : "";

  const isNextDisabled = () => {
    switch (currentStepId) {
      case "brand":
        return formData.brand === "other"
          ? !formData.customBrand?.trim()
          : !formData.brand;

      case "model":
        return !(
          (formData.modelName?.trim() || formData.unknownName) &&
          (formData.modelNumber?.trim() || formData.unknownNumber)
        );

      case "appearance":
        return formData.appearance.length === 0;

      case "display":
        return formData.display.length === 0;

      case "incident":
        return formData.incident.length === 0;

      case "waterType":
        return !formData.waterType;

      case "waterDetails":
        return !formData.waterTime || !formData.waterGoal;

      case "frame":
        return formData.frame.length === 0;

      case "battery":
        return formData.battery.length === 0;

      case "touchCheck":
        return !formData.touchWorks;

      case "touchIssues":
        return formData.touchIssues.length === 0;

      case "camera":
        return formData.camera.length === 0;

      case "audio":
        return formData.audio.length === 0;

      case "connection":
        return formData.connection.length === 0;

      case "storage":
        return !formData.storage;

      case "environment":
        return formData.environment.length === 0;

      case "contact":
        return (
          !formData.userName?.trim() ||
          (formData.contactType === "phone"
            ? formData.userPhone.replace(/\D/g, "").length < 10 // 전화번호 10자리 미만이면 비활성화
            : !formData.emailUser?.trim())
        );

      case "summary":
        // 🔥 서명 + 서류 내 체크 + 하단 파란색 최종 확인박스까지 전부 완료되어야 전송 가능
        return (
          !formData.signatureDone ||
          !formData.finalTermsAgreed ||
          !formData.finalConfirm
        );

      default:
        return false;
    }
  };

  return (
    <Box
      sx={{
        bgcolor: "#fff",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {step === 0 && (
        <Box sx={{ flex: 1, display: "flex", alignItems: "center", py: 16 }}>
          <Container maxWidth="sm">
            <Step0Intro onUpdate={handleUpdate} onNext={() => setStep(1)} />
          </Container>
        </Box>
      )}

      <Dialog fullScreen open={step > 0} TransitionComponent={Transition}>
        <AppBar
          position="sticky"
          elevation={0}
          sx={{ bgcolor: "#fff", borderBottom: "1px solid #d2d2d7" }}
        >
          <Toolbar>
            <Typography sx={{ flex: 1, color: "#1d1d1f", fontWeight: 800 }}>
              {currentStepId === "summary" ? "Votre Devis PDF" : "Diagnostic"}
            </Typography>
            <IconButton
              onClick={() => setCancelOpen(true)}
              sx={{ color: "#1d1d1f" }}
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>

        <Container
          maxWidth="sm"
          sx={{
            pt: 4,
            pb: 15,
            display: "flex",
            flexDirection: "column",
            minHeight: "85vh",
          }}
        >
          <LinearProgress
            variant="determinate"
            value={(step / activeFlow.length) * 100}
            sx={{ mb: 4, height: 6, borderRadius: 5 }}
          />

          <Box sx={{ flex: 1 }}>
            {/* 🔥 여기가 실제 렌더링 로직입니다! */}
            {currentStepId === "brand" && (
              <StepBrand
                brand={formData.brand}
                customBrand={formData.customBrand}
                onUpdate={handleUpdate}
              />
            )}
            {currentStepId === "model" && (
              <StepModel {...formData} onUpdate={handleUpdate} />
            )}
            {currentStepId === "appearance" && (
              <StepAppearance
                selected={formData.appearance}
                onUpdate={handleUpdate}
              />
            )}
            {currentStepId === "display" && (
              <StepDisplay
                selected={formData.display}
                onUpdate={handleUpdate}
              />
            )}
            {currentStepId === "incident" && (
              <StepIncident
                selected={formData.incident}
                onUpdate={handleUpdate}
              />
            )}
            {currentStepId === "waterType" && (
              <StepWaterType
                selected={formData.waterType}
                onUpdate={handleUpdate}
              />
            )}
            {currentStepId === "waterDetails" && (
              <StepWaterDetails
                timeSelected={formData.waterTime}
                goalSelected={formData.waterGoal}
                waterType={formData.waterType}
                onUpdate={handleUpdate}
              />
            )}
            {currentStepId === "frame" && (
              <StepFrame selected={formData.frame} onUpdate={handleUpdate} />
            )}
            {currentStepId === "battery" && (
              <StepBattery
                selected={formData.battery}
                onUpdate={handleUpdate}
              />
            )}
            {currentStepId === "touchCheck" && (
              <StepTouchCheck
                selected={formData.touchWorks}
                onUpdate={handleUpdate}
              />
            )}
            {currentStepId === "touchIssues" && (
              <StepTouchIssues
                selected={formData.touchIssues}
                onUpdate={handleUpdate}
              />
            )}
            {currentStepId === "camera" && (
              <StepCamera selected={formData.camera} onUpdate={handleUpdate} />
            )}
            {currentStepId === "audio" && (
              <StepAudio selected={formData.audio} onUpdate={handleUpdate} />
            )}
            {currentStepId === "connection" && (
              <StepConnection
                selected={formData.connection}
                onUpdate={handleUpdate}
              />
            )}
            {currentStepId === "storage" && (
              <StepStorage
                selected={formData.storage}
                onUpdate={handleUpdate}
              />
            )}
            {currentStepId === "environment" && (
              <StepEnvironment
                selected={formData.environment}
                onUpdate={handleUpdate}
              />
            )}
            {currentStepId === "contact" && (
              <StepContact data={formData} onUpdate={handleUpdate} />
            )}
            {currentStepId === "summary" && (
              <StepSummary
                data={formData}
                sigCanvasRef={sigCanvasRef}
                onUpdate={handleUpdate}
                isSubmitted={isSubmitted}
              />
            )}
          </Box>

          <Box
            sx={{
              position: "fixed",
              bottom: 0,
              left: 0,
              width: "100%",
              bgcolor: "#fff",
              borderTop: "1px solid #d2d2d7",
              p: 2,
              zIndex: 1000,
            }}
          >
            <Container maxWidth="sm">
              <Stack direction="row" spacing={2}>
                {step > 1 && !isSubmitted && (
                  <Button
                    fullWidth
                    variant="outlined"
                    onClick={() => setStep((s) => s - 1)}
                    sx={{ borderRadius: "12px", py: 1.5 }}
                  >
                    Retour
                  </Button>
                )}
                {!isSubmitted && (
                  <Button
                    fullWidth
                    variant="contained"
                    disabled={isNextDisabled()}
                    onClick={() =>
                      step === activeFlow.length
                        ? setIsSubmitted(true)
                        : setStep((s) => s + 1)
                    }
                    sx={{
                      borderRadius: "12px",
                      py: 1.5,
                      bgcolor:
                        currentStepId === "summary" ? "#34c759" : "#0071e3",
                    }}
                  >
                    {currentStepId === "summary"
                      ? "Confirmer l'envoi"
                      : "Suivant"}
                  </Button>
                )}
              </Stack>
            </Container>
          </Box>
        </Container>
      </Dialog>
      <ExitModal
        open={cancelOpen}
        onClose={() => setCancelOpen(false)}
        onConfirm={handleConfirmExit}
      />
    </Box>
  );
};

export default DevisPhone;
