/* eslint-disable react-hooks/set-state-in-effect */
import React, { useState, useEffect } from "react";
import {
  Box,
  Modal,
  IconButton,
  Stack,
  Typography,
  Button,
  Fade,
  Backdrop,
  LinearProgress,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3_1 from "./steps/Step3_1";
import Step3_2 from "./steps/Step3_2";
import Step4 from "./steps/Step4";
import Step5_1 from "./steps/Step5_1";
import Step5_2 from "./steps/Step5_2";
import Step6 from "./steps/Step6";
import Step7 from "./steps/Step7";
import Step8 from "./steps/Step8";

const ScreenModal = ({ open, onClose, productTitle, category, current }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [stepIdx, setStepIdx] = useState(0);
  const [history, setHistory] = useState([]);

  // 상태 관리
  const [isInfoChecked, setIsInfoChecked] = useState(false);
  const [isBackupConfirmed, setIsBackupConfirmed] = useState(false);
  const [screenStatus, setScreenStatus] = useState(null);
  const [displayType, setDisplayType] = useState("");
  const [detailedIssues, setDetailedIssues] = useState([]);
  const [otherIssueText, setOtherIssueText] = useState("");
  const [frameIssues, setFrameIssues] = useState([]);
  const [causes, setCauses] = useState([]);
  const [causeDetailText, setCauseDetailText] = useState("");
  const [modelName, setModelName] = useState("");
  const [modelNumber, setModelNumber] = useState("");

  // ✅ 변경된 상태값 (이름 모름, 번호 모름을 각각 관리)
  const [dontKnowName, setDontKnowName] = useState(false);
  const [dontKnowNumber, setDontKnowNumber] = useState(false);
  const [finalDontKnow, setFinalDontKnow] = useState(false);
  const [finalConfirmed, setFinalConfirmed] = useState(false);

  useEffect(() => {
    if (open) {
      setStepIdx(0);
      setHistory([]);
      setIsInfoChecked(false);
      setIsBackupConfirmed(false);
      setScreenStatus(null);
      setDisplayType("");
      setDetailedIssues([]);
      setOtherIssueText("");
      setFrameIssues([]);
      setCauses([]);
      setCauseDetailText("");
      setModelName("");
      setModelNumber("");

      // ✅ 초기화
      setDontKnowName(false);
      setDontKnowNumber(false);
      setFinalDontKnow(false);
      setFinalConfirmed(false);
    }
  }, [open]);

  // ✅ 파일에 있는 텍스트 100% 동일하게 가져오는 함수
  const getSummaryData = () => {
    const displayLabels = {
      none: "L'écran reste totalement noir, Écran cassé",
      white: "Écran blanc ou figé",
      black: "Image sombre / Rétroéclairage HS",
      cracked: "Image visible mais écran cassé",
    };

    const issueLabelsMap = {
      lines: "Lignes (Verticales ou Horizontales)",
      spots: "Taches noires (Pixels morts)",
      ghost: "Tactile capricieux (Ghost Touch)",
      burn: "Marquage ou Image fantôme",
      flicker: "Clignotement de l'image",
      other: "Aucun de ces choix / Autre symptôme",
    };

    const frameLabelsMap = {
      dent: "Chocs sur le châssis (Frame)",
      bent: "Châssis tordu / Courbé",
      back_crack: "Vitre arrière cassée",
      camera_crack: "Vitre caméra cassée",
      perfect: "Bon état (Rayures d'usure seulement)",
    };

    const causeLabelsMap = {
      water: "Contact avec un liquide / Immersion",
      battery: "Batterie gonflée",
      drop: "Chute accidentelle",
      vibration: "Vibrations intenses (Moto/Vélo)",
      none: "Aucun de ces choix",
    };

    let finalScreenStatus = "";
    if (screenStatus === true) {
      finalScreenStatus = "Oui, je vois l'image";
    } else if (screenStatus === false) {
      finalScreenStatus = "Non, l'écran reste noir";
    }

    const step1Consent = isInfoChecked ? "Je confirme ma sélection." : "";

    let step2Consent = "";
    if (isBackupConfirmed) {
      step2Consent =
        screenStatus === true
          ? "J'ai bien compris les conseils de sauvegarde."
          : "Je comprends que mes données sont difficilement accessibles.";
    }

    let finalDetails = "Aucun";
    if (detailedIssues.length > 0) {
      finalDetails = detailedIssues
        .map((id) => {
          const label = issueLabelsMap[id] || id;
          if (id === "other" && otherIssueText.trim()) {
            return `${label}\n└ ${otherIssueText}`;
          }
          return label;
        })
        .join("\n");
    }

    let finalFrame = "Aucun";
    if (frameIssues.length > 0) {
      finalFrame = frameIssues.map((id) => frameLabelsMap[id] || id).join("\n");
    }

    let finalCause = "Aucun";
    if (causes.length > 0) {
      finalCause = causes
        .map((id) => {
          const label = causeLabelsMap[id] || id;
          if (id === "none" && causeDetailText.trim()) {
            return `${label}\n└ ${causeDetailText}`;
          }
          return label;
        })
        .join("\n");
    }

    // ✅ [수정된 부분] 모델 이름과 번호 각각 개별적으로 체크해서 조합
    let finalModelName = dontKnowName
      ? "Inconnu"
      : modelName.trim() || "Non spécifié";
    let finalModelNum = dontKnowNumber
      ? "Inconnu"
      : modelNumber.trim() || "Non spécifié";

    let finalModelInfo = `${finalModelName} / No. ${finalModelNum}`;

    // 둘 다 모른다고 체크하고 계속하기를 눌렀을 때만 전체를 모름 처리
    if (dontKnowName && dontKnowNumber && finalDontKnow) {
      finalModelInfo = "Je ne le trouve vraiment pas.";
    }

    return {
      productTitle: productTitle || "",
      modelInfo: finalModelInfo, // ✅ 수정한 정보 적용
      screenStatus: finalScreenStatus,
      displayType: displayLabels[displayType] || "Aucun",
      details: finalDetails,
      frame: finalFrame,
      cause: finalCause,
      step1Consent,
      step2Consent,
    };
  };

  // ✅ 1. 전송될 메시지 생성 (상단 안내 문구 이메일 주소도 info@... 로 맞춤!)
  const generateMessageText = (summary, isMobile) => {
    const shopEmail = "info@kimreparation.fr"; // 💡 여기도 형님 이메일로 세팅 완료!

    const copyInstruction = !isMobile
      ? `============================================
💡 NOTE POUR LE CLIENT :
Si vous préférez utiliser votre boîte mail habituelle (Gmail, Outlook, etc.),
veuillez copier l'intégralité de ce texte et l'envoyer à l'adresse suivante :
👉 ${shopEmail}
============================================\n\n`
      : "";

    return `${copyInstruction}DEVIS : Remplacement d'écran - ${summary.productTitle}

[ Modèle ]
${summary.modelInfo}

[ L'image s'affiche-t-elle ? ]
${summary.screenStatus}

[ État de l'affichage ]
${summary.displayType || "Aucun"}

[ Symptômes déclarés par le client ]
${summary.details}

[ État du châssis ]
${summary.frame}

[ Cause probable ]
${summary.cause}

[ Confirmations ]
- ${summary.step1Consent}
- ${summary.step2Consent}

--------------------------------------------
ÉTAT DE L'APPAREIL (DÉCLARÉ PAR LE CLIENT)
--------------------------------------------
* Ce récapitulatif a été rempli par le client à distance.
* Les informations servent de base pour l'estimation du devis.
* L'expertise finale sera réalisée par Kim Reparation à réception.

KIM REPARATION
Réparer d'abord
--------------------------------------------`;
  };

  // ✅ 2. 버튼 클릭 시 전송 로직 (형님이 작성하신 코드 완벽 적용!)
  const handleSendQuote = () => {
    const summary = getSummaryData();
    const messageBody = generateMessageText(summary, isMobile);

    const phoneNumber = "0627244602";
    const emailAddress = "info@kimreparation.fr";
    const subject = `DEVIS : Remplacement d'écran - ${summary.productTitle} (${summary.modelInfo})`;

    if (isMobile) {
      window.location.href = `sms:${phoneNumber}?body=${encodeURIComponent(messageBody)}`;
    } else {
      window.location.href = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(messageBody)}`;
    }

    setTimeout(() => {
      onClose();
    }, 1000);
  };

  const moveNext = () => {
    setHistory([...history, stepIdx]);
    if (stepIdx === 1 && screenStatus === false) {
      setStepIdx(4);
    } else if (
      stepIdx === 2 &&
      (displayType === "none" || displayType === "white")
    ) {
      setStepIdx(4);
    } else if (stepIdx === 5) {
      const needsWarning =
        causes.includes("water") || causes.includes("battery");
      setStepIdx(needsWarning ? 6 : 7);
    } else {
      setStepIdx(stepIdx + 1);
    }
  };

  const movePrev = () => {
    const last = [...history];
    const prev = last.pop();
    setHistory(last);
    setStepIdx(prev ?? 0);
  };

  const steps = [
    {
      id: "s1",
      content: (
        <Step1
          category={category}
          productTitle={productTitle}
          current={current}
          isBackupChecked={isInfoChecked}
          onBackupToggle={() => setIsInfoChecked(!isInfoChecked)}
        />
      ),
      valid: isInfoChecked,
    },
    {
      id: "s2",
      content: (
        <Step2
          category={category}
          productTitle={productTitle}
          isBackupChecked={isBackupConfirmed}
          onBackupToggle={() => setIsBackupConfirmed(!isBackupConfirmed)}
          screenWork={screenStatus}
          setScreenWork={setScreenStatus}
        />
      ),
      valid: isBackupConfirmed && screenStatus !== null,
    },
    {
      id: "s3_1",
      content: <Step3_1 value={displayType} onChange={setDisplayType} />,
      valid: !!displayType,
    },
    {
      id: "s3_2",
      content: (
        <Step3_2
          selected={detailedIssues}
          onChange={setDetailedIssues}
          otherText={otherIssueText}
          onOtherTextChange={setOtherIssueText}
        />
      ),
      valid: detailedIssues.length > 0,
    },
    {
      id: "s4",
      content: <Step4 selected={frameIssues} onChange={setFrameIssues} />,
      valid: frameIssues.length > 0,
    },
    {
      id: "s5_1",
      content: (
        <Step5_1
          selected={causes}
          onChange={setCauses}
          otherText={causeDetailText}
          onOtherTextChange={setCauseDetailText}
        />
      ),
      valid: causes.length > 0,
    },
    { id: "s5_2", content: <Step5_2 selectedCauses={causes} />, valid: true },
    {
      id: "s6",
      content: (
        <Step6
          category={category}
          modelName={modelName}
          setModelName={setModelName}
          modelNumber={modelNumber}
          setModelNumber={setModelNumber}
          dontKnowName={dontKnowName}
          setDontKnowName={setDontKnowName}
          dontKnowNumber={dontKnowNumber}
          setDontKnowNumber={setDontKnowNumber}
          finalDontKnow={finalDontKnow}
          setFinalDontKnow={setFinalDontKnow}
        />
      ),
      // ✅ 형님이 원하신 핵심 로직 적용
      // 1. 이름 필드가 활성화되어 있으면 무조건 빈칸이 아니어야 함
      // 2. 번호 필드가 활성화되어 있으면 무조건 빈칸이 아니어야 함
      // 3. 둘 중 하나라도 모른다고 체크해서 빨간 카드가 나오면, "계속하기" 체크박스를 눌러야 함
      valid:
        (dontKnowName || modelName.trim() !== "") &&
        (dontKnowNumber || modelNumber.trim() !== "") &&
        (dontKnowName || dontKnowNumber ? finalDontKnow : true),
    },
    {
      id: "s7",
      content: (
        <Step7
          summary={getSummaryData()}
          confirmed={finalConfirmed}
          onConfirm={() => setFinalConfirmed(!finalConfirmed)}
        />
      ),
      valid: finalConfirmed,
    },
    { id: "s8", content: <Step8 isMobile={isMobile} />, valid: true },
  ];

  const currentStep = steps[stepIdx];
  const progressValue = ((stepIdx + 1) / steps.length) * 100;

  return (
    <Modal open={open} onClose={onClose} slots={{ backdrop: Backdrop }}>
      <Fade in={open}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: isMobile ? "100%" : 500,
            height: isMobile ? "100%" : 750,
            bgcolor: "white",
            display: "flex",
            flexDirection: "column",
            borderRadius: isMobile ? 0 : "16px",
            overflow: "hidden",
          }}
        >
          <LinearProgress
            variant="determinate"
            value={progressValue}
            sx={{
              height: 6,
              bgcolor: "#e5e5e7",
              "& .MuiLinearProgress-bar": { bgcolor: "#0071e3" },
            }}
          />
          <Box sx={{ p: 3, flex: 1, display: "flex", flexDirection: "column" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 2,
              }}
            >
              {stepIdx > 0 ? (
                <IconButton onClick={movePrev} sx={{ p: 0 }}>
                  <ChevronLeftIcon />
                </IconButton>
              ) : (
                <Box sx={{ width: 24 }} />
              )}
              <Typography
                variant="caption"
                sx={{
                  fontWeight: 800,
                  color: "#86868b",
                  letterSpacing: "0.1em",
                }}
              >
                DIAGNOSTIC EN COURS
              </Typography>
              <IconButton onClick={onClose} sx={{ p: 0 }}>
                <CloseIcon />
              </IconButton>
            </Box>

            <Box sx={{ flex: 1, overflowY: "auto" }}>
              {currentStep?.content}
            </Box>

            <Button
              fullWidth
              variant="contained"
              disabled={!currentStep?.valid}
              onClick={
                stepIdx === steps.length - 1 ? handleSendQuote : moveNext
              }
              sx={{
                mt: 3,
                py: 2,
                bgcolor: "#0071e3",
                fontWeight: 700,
                borderRadius: "12px",
                textTransform: "none",
                fontSize: "1rem",
              }}
            >
              {stepIdx === steps.length - 2
                ? "Confirmer"
                : stepIdx === steps.length - 1
                  ? isMobile
                    ? "Envoyer par SMS"
                    : "Envoyer par E-mail"
                  : "Continuer"}
            </Button>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
};

export default ScreenModal;
