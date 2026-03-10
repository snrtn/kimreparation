import React, { useState } from "react";
import {
  Box,
  Container,
  LinearProgress,
  Dialog,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Dialog as ConfirmDialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Zoom,
  Stack,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import Step0Intro from "./steps/Step0Intro";
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
import StepSummary from "./steps/StepSummary";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Zoom ref={ref} {...props} />;
});

const MAX_FLOW_WORKING = [
  "appearance",
  "display",
  "incident",
  "waterType",
  "waterDetails",
  "frame",
  "battery",
  "touchCheck",
  "touchIssues",
  "camera",
  "audio",
  "connection",
  "storage",
  "environment",
  "summary",
];

const MAX_FLOW_BROKEN = [
  "incident",
  "waterType",
  "waterDetails",
  "appearance",
  "frame",
  "storage",
  "environment",
  "summary",
];

const getFlowSteps = (data) => {
  if (!data.status) return [];
  const steps = [];

  const safeIncident = data.incident || [];
  const hasWater =
    safeIncident.includes("water_low") ||
    safeIncident.includes("water_high") ||
    safeIncident.includes("bathroom");

  if (data.status === "working") {
    steps.push("appearance", "display", "incident");
    if (hasWater) steps.push("waterType", "waterDetails");
    steps.push("frame", "battery", "touchCheck");

    // 터치 고장이어도 '이슈' 물어보고 카메라/오디오/연결 테스트 단계 무조건 포함
    if (data.touchWorks === "no") {
      steps.push("touchIssues");
    }
    steps.push("camera", "audio", "connection", "storage", "environment");
  } else if (data.status === "broken") {
    steps.push("incident");
    if (hasWater) steps.push("waterType", "waterDetails");
    steps.push("appearance", "frame", "storage", "environment");
  }

  steps.push("summary");
  return steps;
};

const DevisPhone = () => {
  const [step, setStep] = useState(0);
  const [cancelOpen, setCancelOpen] = useState(false);

  const [formData, setFormData] = useState({
    status: "",
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
  });

  const handleUpdate = (newData) => {
    setFormData((prev) => {
      let nextState = { ...prev, ...newData };

      // 1. 상태(status) 변경 시 전체 초기화
      if (newData.status && newData.status !== prev.status) {
        return {
          status: newData.status,
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
        };
      }

      // 2. 사고 유형(incident) 변경 시 물 관련 정보 초기화 로직
      if (newData.incident) {
        const hasWater =
          newData.incident.includes("water_low") ||
          newData.incident.includes("water_high") ||
          newData.incident.includes("bathroom");
        if (!hasWater) {
          nextState.waterType = "";
          nextState.waterTime = "";
          nextState.waterGoal = "";
        }
      }

      // 3. 터치 작동 여부(touchWorks) 변경 시 종속 데이터 초기화
      if (newData.touchWorks) {
        if (newData.touchWorks === "yes") {
          nextState.touchIssues = [];
          // 터치가 된다고 하면 기존 'unknown' 강제 주입 해제 (수동 선택 유도)
          if (prev.touchWorks === "no") {
            nextState.camera = [];
            nextState.audio = [];
            nextState.connection = [];
          }
        }
        // 터치가 no여도 'camera', 'audio', 'connection' 단계는 직접 확인하게 둠 (unknown은 Step 컴포넌트 내부 useEffect에서 처리됨)
      }

      return nextState;
    });
  };

  const flow = getFlowSteps(formData);
  const totalSteps = flow.length;
  const currentStepId = step > 0 ? flow[step - 1] : "";

  let progressValue = 0;
  if (step > 0 && formData.status) {
    const absoluteFlow =
      formData.status === "working" ? MAX_FLOW_WORKING : MAX_FLOW_BROKEN;
    const currentIndex = absoluteFlow.indexOf(currentStepId);
    if (currentIndex !== -1) {
      progressValue = ((currentIndex + 1) / absoluteFlow.length) * 100;
    }
  }

  const next = () => {
    if (step === 0) {
      setStep(1);
      return;
    }
    if (step >= totalSteps) {
      if (document.fullscreenElement) {
        document.exitFullscreen().catch(() => {});
      }
      console.log("Final Data:", formData);
      alert("Diagnostic terminé. Merci !");
    } else {
      setStep((s) => s + 1);
    }
  };

  const back = () => setStep((s) => s - 1);

  const handleCancelClick = () => setCancelOpen(true);

  const handleConfirmCancel = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    }
    setCancelOpen(false);
    setStep(0);
    setFormData({
      status: "",
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
    });
  };

  let isNextDisabled = true;
  switch (currentStepId) {
    case "appearance":
      isNextDisabled = formData.appearance.length === 0;
      break;
    case "display":
      isNextDisabled = formData.display.length === 0;
      break;
    case "incident":
      isNextDisabled = formData.incident.length === 0;
      break;
    case "waterType":
      isNextDisabled = !formData.waterType;
      break;
    case "waterDetails":
      isNextDisabled = !formData.waterTime || !formData.waterGoal;
      break;
    case "frame":
      isNextDisabled = formData.frame.length === 0;
      break;
    case "battery":
      isNextDisabled = formData.battery.length === 0;
      break;
    case "touchCheck":
      isNextDisabled = !formData.touchWorks;
      break;
    case "touchIssues":
      isNextDisabled = formData.touchIssues.length === 0;
      break;
    case "camera":
      isNextDisabled = formData.camera.length === 0;
      break;
    case "audio":
      isNextDisabled = formData.audio.length === 0;
      break;
    case "connection":
      isNextDisabled = formData.connection.length === 0;
      break;
    case "storage":
      isNextDisabled = !formData.storage;
      break;
    case "environment":
      isNextDisabled = formData.environment.length === 0;
      break;
    case "summary":
      isNextDisabled = false;
      break;
    default:
      isNextDisabled = false;
  }

  return (
    <Box
      sx={{
        pt: { xs: 8, md: 12 },
        pb: 10,
        bgcolor: "#fff",
        minHeight: "100vh",
      }}
    >
      <Container maxWidth="sm">
        {step === 0 && <Step0Intro onUpdate={handleUpdate} onNext={next} />}
      </Container>

      <Dialog
        fullScreen
        open={step > 0}
        TransitionComponent={Transition}
        PaperProps={{ sx: { bgcolor: "#fbfbfd" } }}
      >
        <AppBar
          position="sticky"
          elevation={0}
          sx={{ bgcolor: "white", borderBottom: "1px solid #e5e5e7" }}
        >
          <Toolbar>
            <Typography
              sx={{
                flex: 1,
                color: "#1d1d1f",
                fontWeight: 800,
                fontSize: "1.1rem",
              }}
            >
              {currentStepId === "summary" ? "Résumé" : "Diagnostic"}
            </Typography>
            <IconButton
              edge="end"
              onClick={handleCancelClick}
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
            pb: 10,
            display: "flex",
            flexDirection: "column",
            minHeight: "85vh",
          }}
        >
          <LinearProgress
            variant="determinate"
            value={progressValue}
            sx={{
              mb: 6,
              height: 8,
              borderRadius: 5,
              bgcolor: "#e5e5e7",
              "& .MuiLinearProgress-bar": { bgcolor: "#0071e3" },
            }}
          />

          <Box sx={{ flex: 1 }}>
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
              <StepCamera
                selected={formData.camera}
                onUpdate={handleUpdate}
                touchWorks={formData.touchWorks}
              />
            )}
            {currentStepId === "audio" && (
              <StepAudio
                selected={formData.audio}
                onUpdate={handleUpdate}
                touchWorks={formData.touchWorks}
              />
            )}
            {currentStepId === "connection" && (
              <StepConnection
                selected={formData.connection}
                onUpdate={handleUpdate}
                touchWorks={formData.touchWorks}
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
            {currentStepId === "summary" && <StepSummary data={formData} />}
          </Box>

          <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
            {step > 1 && (
              <Button
                fullWidth
                variant="outlined"
                onClick={back}
                sx={{
                  borderRadius: "16px",
                  p: 2,
                  borderColor: "#d2d2d7",
                  color: "#1d1d1f",
                  fontWeight: 700,
                }}
              >
                Retour
              </Button>
            )}
            <Button
              fullWidth
              variant="contained"
              onClick={next}
              disabled={isNextDisabled}
              sx={{
                borderRadius: "16px",
                p: 2,
                bgcolor: currentStepId === "summary" ? "#34c759" : "#0071e3",
                fontWeight: 700,
              }}
            >
              {currentStepId === "summary" ? "Confirmer" : "Suivant"}
            </Button>
          </Stack>
        </Container>
      </Dialog>

      <ConfirmDialog
        open={cancelOpen}
        onClose={() => setCancelOpen(false)}
        PaperProps={{ sx: { borderRadius: "24px", p: 2, minWidth: "320px" } }}
      >
        <DialogTitle sx={{ fontWeight: 800, textAlign: "center", pt: 3 }}>
          Annuler le diagnostic ?
        </DialogTitle>
        <DialogContent sx={{ pb: 3 }}>
          <Typography
            sx={{ color: "#424245", textAlign: "center", fontWeight: 500 }}
          >
            Toutes les données saisies seront définitivement perdues.
            Voulez-vous vraiment quitter ?
          </Typography>
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 3, justifyContent: "center", gap: 1 }}>
          <Button
            onClick={() => setCancelOpen(false)}
            sx={{
              flex: 1,
              borderRadius: "12px",
              p: 1.5,
              color: "#1d1d1f",
              fontWeight: 700,
              bgcolor: "#f5f5f7",
            }}
          >
            Continuer
          </Button>
          <Button
            onClick={handleConfirmCancel}
            variant="contained"
            sx={{
              flex: 1,
              borderRadius: "12px",
              p: 1.5,
              bgcolor: "#ff3b30",
              fontWeight: 700,
              "&:hover": { bgcolor: "#d32f2f" },
            }}
          >
            Quitter
          </Button>
        </DialogActions>
      </ConfirmDialog>
    </Box>
  );
};

export default DevisPhone;
