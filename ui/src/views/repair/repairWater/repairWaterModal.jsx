/* eslint-disable react-hooks/set-state-in-effect */
import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Modal,
  IconButton,
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
import Step3 from "./steps/Step3";
import Step4 from "./steps/Step4";
import Step5 from "./steps/Step5";
import Step6 from "./steps/Step6";
import Step7 from "./steps/Step7";
import Step8 from "./steps/Step8";
import Step9 from "./steps/Step9";

const RepairWaterModal = ({ open, onClose }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [stepIdx, setStepIdx] = useState(0);
  const [history, setHistory] = useState([]);

  // 💡 다음 버튼 클릭 시 상단 이동을 위한 Ref
  const scrollBoxRef = useRef(null);

  // --- [데이터 상태 관리] ---
  const [screenWork, setScreenWork] = useState(null);
  const [isBackupChecked, setIsBackupChecked] = useState(false);
  const [liquidType, setLiquidType] = useState("");
  const [waterTime, setWaterTime] = useState("");
  const [repairGoal, setRepairGoal] = useState("");
  const [frameIssues, setFrameIssues] = useState([]);
  const [internalDamageAck, setInternalDamageAck] = useState(false);
  const [selectedCauses, setSelectedCauses] = useState([]);
  const [otherCauseText, setOtherCauseText] = useState("");
  const [deviceType, setDeviceType] = useState("");
  const [brand, setBrand] = useState("");
  const [otherBrand, setOtherBrand] = useState("");
  const [modelName, setModelName] = useState("");
  const [modelNumber, setModelNumber] = useState("");
  const [dontKnowName, setDontKnowName] = useState(false);
  const [dontKnowNumber, setDontKnowNumber] = useState(false);
  const [finalDontKnow, setFinalDontKnow] = useState(false);
  const [finalConfirmed, setFinalConfirmed] = useState(false);
  const [batteryAck, setBatteryAck] = useState(false);

  // 💡 스텝 변경 시 자동 상단 스크롤
  useEffect(() => {
    if (scrollBoxRef.current) {
      scrollBoxRef.current.scrollTop = 0;
    }
  }, [stepIdx]);

  useEffect(() => {
    if (open) {
      setStepIdx(0);
      setHistory([]);
      setScreenWork(null);
      setIsBackupChecked(false);
      setLiquidType("");
      setWaterTime("");
      setRepairGoal("");
      setFrameIssues([]);
      setInternalDamageAck(false);
      setSelectedCauses([]);
      setOtherCauseText("");
      setDeviceType("");
      setBrand("");
      setOtherBrand("");
      setModelName("");
      setModelNumber("");
      setDontKnowName(false);
      setDontKnowNumber(false);
      setFinalDontKnow(false);
      setFinalConfirmed(false);
    }
  }, [open]);

  const getSummaryData = () => {
    // Step 2: Type de liquide
    const liquidMap = {
      fresh: { label: "Eau douce", desc: "Robinet, Pluie" },
      salt: { label: "Eau de mer", desc: "Plage, Océan" },
      sugar: { label: "Boisson", desc: "Café, Soda, Jus" },
      pool: { label: "Piscine", desc: "Eau chlorée" },
    };

    // Step 3: Délai et Objectif
    const timeMap = {
      "24h": {
        label: "Moins de 24 heures",
        desc: "Moment idéal pour un nettoyage préventif. \nL'objectif est d'arrêter l'oxydation avant qu'elle ne touche les circuits.",
      },
      "3days": {
        label: "Entre 1 et 3 jours",
        desc: "L'humidité est installée. \nUn démontage et un contrôle des circuits sont nécessaires pour limiter les dégâts.",
      },
      "1week": {
        label: "Plus d'une semaine",
        desc: "L'oxydation est désormais nettement visible à l'œil nu sur les composants. \nLe nettoyage sert à vérifier si les dommages sont définitifs.",
      },
    };
    const goalMap = {
      data: {
        label: "Récupérer mes données uniquement",
        desc: "Priorité à vos fichiers. \nLe but est de stabiliser la carte mère pour extraire vos informations.",
      },
      device: {
        label: "Réparer l'appareil uniquement",
        desc: "Remise en état pour une utilisation normale. \nNettoyage et remplacement des pièces défectueuses sans garantie de données.",
      },
      both: {
        label: "Données + Appareil",
        desc: "Nettoyage complet pour sauver vos fichiers et le téléphone.",
      },
    };

    // Step 4: État du châssis / Dos
    const frameMap = {
      screen: {
        label: "Écran cassé",
        desc: "Fissures, taches ou affichage noir.",
      },
      bent: {
        label: "Châssis / Cadre",
        desc: "Le châssis est tordu, enfoncé ou déformé.",
      },
      back: {
        label: "Vitre arrière",
        desc: "Le dos est brisé ou présente des éclats.",
      },
      camera: {
        label: "Vitre caméra",
        desc: "L'objectif photo est fissuré ou rayé.",
      },
      fog: {
        label: "Buée caméra",
        desc: "Humidité ou gouttes visibles dans l'objectif.",
      },
      port: {
        label: "Port de charge",
        desc: "Humidité ou résidus dans le connecteur.",
      },
      none: {
        label: "Aucun dégât apparent",
        desc: "L'aspect extérieur est intact (Uniquement des micro-rayures).",
      },
    };

    // Step 5: Autres problèmes
    const causeMap = {
      battery: {
        label: "⚠️ Batterie gonflée",
        desc: "Danger : Risque d'incendie. \nÉteignez l'appareil, ne le chargez pas et utilisez une casserole pour le transport.",
      },
      drop: {
        label: "Chute accidentelle",
        desc: "L'appareil est tombé ou a subi un choc physique important récemment.",
      },
      vibration: {
        label: "Vibrations intenses",
        desc: "Utilisation fréquente sur un support moto ou vélo.",
      },
      none: {
        label: "Oxydation seule",
        desc: "L'oxydation est le seul problème, aucune chute ou gonflement constaté.",
      },
    };

    const selLiquid = liquidMap[liquidType];
    const finalLiquid = selLiquid
      ? `${selLiquid.label} (${selLiquid.desc})`
      : "Non spécifié";

    const selTime = timeMap[waterTime];
    const finalTime = selTime
      ? `${selTime.label} \n└ ${selTime.desc}`
      : "Non spécifié";

    const selGoal = goalMap[repairGoal];
    const finalGoal = selGoal
      ? `${selGoal.label} \n└ ${selGoal.desc}`
      : "Non spécifié";

    let finalFrame = "Aucun dégât apparent";
    if (frameIssues.length > 0 && !frameIssues.includes("none")) {
      finalFrame = frameIssues
        .map((id) =>
          frameMap[id] ? `${frameMap[id].label} (${frameMap[id].desc})` : id,
        )
        .join("\n");
    }

    let finalCause = selectedCauses
      .map((id) =>
        causeMap[id] ? `${causeMap[id].label} (${causeMap[id].desc})` : id,
      )
      .join("\n");
    if (otherCauseText) {
      finalCause += `\n[Observations (Sans allumer l'écran)] : ${otherCauseText}`;
    }

    const batterySelected = selectedCauses.includes("battery");

    return {
      productTitle: `${deviceType} - ${brand === "Autre" ? otherBrand : brand}`,
      modelInfo:
        dontKnowName && dontKnowNumber && finalDontKnow
          ? "Inconnu"
          : `${modelName || "Nom Inconnu"} / ${modelNumber || "N° Inconnu"}`,
      screenStatus: screenWork
        ? "Il s'allume (Oui, il vibre/sonne)"
        : "Non, il reste éteint / noir",
      liquidType: finalLiquid,
      waterTime: finalTime,
      repairGoal: finalGoal,
      frame: finalFrame,
      cause: finalCause,
      consentData: isBackupChecked
        ? "[X] Accordé (Risques de perte de données compris)"
        : "[ ] Non coché",

      // 2. 내부 회로 취약성 및 영구 손상 고지 (Step 4)
      consentInternal: internalDamageAck
        ? "[X] Accordé (Risques d'extinction dus à l'oxydation compris)"
        : "[ ] Non coché",

      // 3. 화재 리스크 동의 (Step 5) - 배터리 선택 시에만 출력
      consentBattery: batterySelected
        ? batteryAck
          ? "[X] Accordé (Risque d'incendie compris)"
          : "[ ] Non coché"
        : null, // 배터리 문제 없으면 전송 안 함

      // 3. 수단 의무 및 환불 불가 조건 (Step 8)
      consentFinal: finalConfirmed
        ? "[X] Accordé (Engagement de service & frais techniques non-remboursables)"
        : "[ ] Non coché",
    };
  };

  const generateMessageText = (summary) => {
    const shopEmail = "info@kimreparation.fr";

    const now = new Date();
    const timestamp = now.toLocaleString("fr-FR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

    const batteryLine = summary.consentBattery
      ? `- Risque d'incendie (Batterie) : ${summary.consentBattery}`
      : "";

    const copyInstruction = !isMobile
      ? `============================================\n💡 NOTE POUR LE CLIENT :\nSi vous préférez utiliser votre boîte mail habituelle (Gmail, Outlook, etc.),\nveuillez copier l'intégralité de ce texte et l'envoyer à l'adresse suivante :\n👉 ${shopEmail}\n============================================\n\n`
      : "";

    return `${copyInstruction}DEVIS : Problème d'Oxydation (Eau) - ${summary.productTitle}

[ Modèle / N° de série ]
${summary.modelInfo}

[ État d'allumage ]
${summary.screenStatus}

[ Type de liquide ]
${summary.liquidType}

[ Délai de l'incident ]
${summary.waterTime}

[ Objectif de réparation ]
${summary.repairGoal}

[ État du châssis / Dos ]
${summary.frame}

[ Autres problèmes ]
${summary.cause}

------------------------------------------------
[ ✅ Confirmations & Accords ]
------------------------------------------------
- Risques de perte de données : ${summary.consentData}
- Risque d'extinction définitive : ${summary.consentInternal}
- Conditions (Obligation de moyens) : ${summary.consentFinal}
${batteryLine}


------------------------------------------------
ÉTAT DE L'APPAREIL (DÉCLARÉ PAR LE CLIENT)
------------------------------------------------
* Ce récapitulatif a été rempli par le client à distance.
* Les informations servent de base pour l'estimation du devis.
* L'expertise finale sera réalisée par Kim Reparation à réception.
* Date de demande : ${timestamp}

KIM REPARATION
Réparer d'abord
------------------------------------------------`;
  };

  const handleSendQuote = () => {
    const summary = getSummaryData();
    const messageBody = generateMessageText(summary);
    const phoneNumber = "0627244602";
    const emailAddress = "info@kimreparation.fr";
    const subject = `DEVIS : Problème d'Oxydation (Eau) - ${summary.productTitle} (${summary.modelInfo})`;

    if (isMobile) {
      window.location.href = `sms:${phoneNumber}?body=${encodeURIComponent(messageBody)}`;
    } else {
      window.location.href = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(messageBody)}`;
    }
    setTimeout(() => onClose(), 1000);
  };

  const steps = [
    {
      id: "s1",
      content: (
        <Step1
          screenWork={screenWork}
          setScreenWork={setScreenWork}
          isBackupChecked={isBackupChecked}
          onBackupToggle={() => setIsBackupChecked(!isBackupChecked)}
          scrollBoxRef={scrollBoxRef}
        />
      ),
      valid: screenWork !== null && isBackupChecked,
    },
    {
      id: "s2",
      content: <Step2 liquidType={liquidType} setLiquidType={setLiquidType} />,
      valid: !!liquidType,
    },
    {
      id: "s3",
      content: (
        <Step3
          waterTime={waterTime}
          setWaterTime={setWaterTime}
          repairGoal={repairGoal}
          setRepairGoal={setRepairGoal}
          scrollBoxRef={scrollBoxRef}
        />
      ),
      valid: !!waterTime && !!repairGoal,
    },
    {
      id: "s4",
      content: (
        <Step4
          frameIssues={frameIssues}
          setFrameIssues={setFrameIssues}
          internalDamageAck={internalDamageAck}
          setInternalDamageAck={setInternalDamageAck}
          scrollBoxRef={scrollBoxRef}
        />
      ),
      valid: frameIssues.length > 0 && internalDamageAck,
    },
    {
      id: "s5",
      content: (
        <Step5
          selected={selectedCauses}
          onChange={setSelectedCauses}
          otherText={otherCauseText}
          onOtherTextChange={setOtherCauseText}
          batteryAck={batteryAck}
          setBatteryAck={setBatteryAck}
          scrollBoxRef={scrollBoxRef}
        />
      ),
      valid:
        selectedCauses.length > 0 &&
        (selectedCauses.includes("battery") ? batteryAck : true), // 💡 Validation Batterie
    },
    {
      id: "s6",
      content: (
        <Step6
          deviceType={deviceType}
          setDeviceType={setDeviceType}
          brand={brand}
          setBrand={setBrand}
          otherBrand={otherBrand}
          setOtherBrand={setOtherBrand}
        />
      ),
      valid: !!deviceType && !!brand,
    },
    {
      id: "s7",
      content: (
        <Step7
          deviceType={deviceType}
          brand={brand}
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
          scrollBoxRef={scrollBoxRef}
        />
      ),
      valid: (() => {
        const nameEntered = modelName.trim().length > 0 || dontKnowName;
        const numberEntered = modelNumber.trim().length > 0 || dontKnowNumber;
        const needsFinalAck = dontKnowName || dontKnowNumber;

        if (needsFinalAck) {
          return nameEntered && numberEntered && finalDontKnow;
        }
        return nameEntered && numberEntered;
      })(),
    },
    {
      id: "s8",
      content: (
        <Step8
          summary={getSummaryData()}
          confirmed={finalConfirmed}
          onConfirm={() => setFinalConfirmed(!finalConfirmed)}
        />
      ),
      valid: finalConfirmed,
    },
    { id: "s9", content: <Step9 isMobile={isMobile} />, valid: true },
  ];

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
            height: isMobile ? "98%" : 750,
            bgcolor: "white",
            display: "flex",
            flexDirection: "column",
            borderRadius: isMobile ? 0 : "16px",
            overflow: "hidden",
          }}
        >
          <LinearProgress
            variant="determinate"
            value={((stepIdx + 1) / steps.length) * 100}
            sx={{
              height: 6,
              bgcolor: "#e5e5e7",
              "& .MuiLinearProgress-bar": { bgcolor: "#0071e3" },
            }}
          />
          <Box sx={{ p: 3, flex: 1, display: "flex", flexDirection: "column" }}>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}
            >
              {stepIdx > 0 ? (
                <IconButton
                  onClick={() => {
                    setHistory(history.slice(0, -1));
                    setStepIdx(history[history.length - 1]);
                  }}
                >
                  <ChevronLeftIcon />
                </IconButton>
              ) : (
                <Box sx={{ width: 24 }} />
              )}
              <Typography
                variant="caption"
                sx={{ fontWeight: 800, color: "#86868b" }}
              >
                DIAGNOSTIC EAU
              </Typography>
              <IconButton onClick={onClose}>
                <CloseIcon />
              </IconButton>
            </Box>

            {/* 💡 자동 상단 스크롤을 위한 Ref 연결 */}
            <Box ref={scrollBoxRef} sx={{ flex: 1, overflowY: "auto" }}>
              {steps[stepIdx]?.content}
            </Box>

            <Button
              fullWidth
              variant="contained"
              disabled={!steps[stepIdx]?.valid}
              onClick={() => {
                if (stepIdx === steps.length - 1) handleSendQuote();
                else {
                  setHistory([...history, stepIdx]);
                  setStepIdx(stepIdx + 1);
                }
              }}
              sx={{
                mt: 3,
                py: 2,
                bgcolor: "#0071e3",
                fontWeight: 700,
                borderRadius: "12px",
                textTransform: "none",
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

export default RepairWaterModal;
