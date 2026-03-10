import React from "react";
import { Typography, Box, Divider, Paper } from "@mui/material";

// 아이디값을 프랑스어 텍스트로 바꿔주는 사전(Dictionary)
const labels = {
  // 상태
  working: "L'écran s'allume",
  broken: "L'écran reste noir",
  // 겉모습
  front: "Vitre avant brisée / fissurée",
  back: "Vitre arrière ou châssis endommagé",
  camera: "Lentille de la caméra fissurée",
  fog: "Présence de buée dans l'objectif",
  none: "Aucun problème / Non applicable",
  // 화면상태
  lines: "Des lignes apparaissent sur l'affichage",
  spots: "Taches noires (pixels morts) visibles",
  partial: "Une partie de l'écran ne s'affiche pas",
  perfect: "Affichage parfait",
  // 사고경위
  drop_low: "Petite chute (hauteur de bureau)",
  drop_high: "Chute d'une hauteur importante (>1m)",
  water_low: "Immersion légère (moins de 2m)",
  water_high: "Immersion profonde (plus de 2m)",
  bathroom: "Utilisation fréquente dans la salle de bain",
  // 물 종류
  tap: "Eau douce (robinet, toilettes, eau purifiée)",
  sweet: "Boissons sucrées (jus, soda, etc.)",
  sea: "Eau de mer (salée)",
  pool: "Eau de piscine (chlorée)",
  nature: "Eau naturelle (rivière, étang, flaque)",
  // 물 시간/목표
  day: "Il y a moins de 24h",
  days: "Il y a 2 à 3 jours",
  week: "Il y a plus d'une semaine",
  memory: "Sauvegarder les données en priorité",
  device: "Réparer l'appareil avant tout",
  both: "Sauver l'appareil ET les données",
  // 프레임
  bent: "Le châssis est plié ou tordu",
  dent: "Impacts sur le contour",
  swollen: "Batterie gonflée (écran soulevé)",
  // 배터리
  no_charge: "Ne charge plus du tout en USB",
  intermittent: "Faux contact (charge intermittente)",
  slow: "Charge très lente",
  fast_drain: "La batterie se décharge rapidement",
  shutdown: "S'éteint brusquement (entre 10% et 30%)",
  // 터치
  yes: "Oui (Fonctionnel)",
  no: "Non (Dysfonctionnement)",
  ghost: "« Ghost touch » (l'écran bouge tout seul)",
  // 카메라, 오디오, 연결
  flash: "Flash défectueux",
  unknown: "Impossible à vérifier",
  mic: "On ne m'entend pas au téléphone (Microphone)",
  speaker: "Pas de son sortant du haut-parleur",
  record: "Impossible d'enregistrer des mémos vocaux",
  wifi: "Problème Wi-Fi",
  bluetooth: "Problème Bluetooth",
  // 용량, 환경
  unsure: "Je ne m'en rappelle plus",
  sport: "Sport et quotidien (Tapis de course, tir...)",
  agri: "Engins agricoles et tout-terrain (Tracteur...)",
  work: "Chantier et machinerie lourde (Perceuse...)",
  marine: "Nautisme et loisirs aquatiques (Jet-ski...)",
};

const getLabel = (val) => labels[val] || val;

const StepSummary = ({ data }) => {
  const renderItem = (title, value) => {
    // 값이 없거나 빈 배열이면 렌더링 안 함
    if (!value || (Array.isArray(value) && value.length === 0)) return null;

    return (
      <Box sx={{ mb: 2 }}>
        <Typography
          sx={{
            fontSize: "0.85rem",
            color: "#86868b",
            fontWeight: 700,
            mb: 0.5,
            textTransform: "uppercase",
          }}
        >
          {title}
        </Typography>

        {/* 🔥 배열(중복 선택)일 경우 줄바꿈하여 리스트 형태로 보여줌 */}
        {Array.isArray(value) ? (
          value.map((v, index) => (
            <Typography key={index} sx={{ color: "#1d1d1f", fontWeight: 600 }}>
              • {getLabel(v)}
            </Typography>
          ))
        ) : (
          /* 단일 선택일 경우 그냥 보여줌 */
          <Typography sx={{ color: "#1d1d1f", fontWeight: 600 }}>
            {getLabel(value)}
          </Typography>
        )}
      </Box>
    );
  };

  return (
    <Box sx={{ textAlign: "left" }}>
      <Typography
        variant="h4"
        sx={{ fontWeight: 800, mb: 1, color: "#1d1d1f" }}
      >
        Résumé du Bilan
      </Typography>
      <Typography
        sx={{ color: "#424245", fontSize: "1.05rem", mb: 4, lineHeight: 1.6 }}
      >
        Veuillez vérifier les informations ci-dessous avant de valider votre
        demande.
      </Typography>

      <Paper
        elevation={0}
        sx={{
          p: 3,
          bgcolor: "white",
          borderRadius: "16px",
          border: "1px solid #d2d2d7",
        }}
      >
        {renderItem("État de l'écran", data.status)}
        <Divider sx={{ my: 2 }} />

        {renderItem("Aspect extérieur", data.appearance)}
        {data.status === "working" &&
          renderItem("État de l'affichage", data.display)}

        <Divider sx={{ my: 2 }} />
        {renderItem("Circonstances (Incident)", data.incident)}
        {(data.incident.includes("water_low") ||
          data.incident.includes("water_high")) && (
          <>
            {renderItem("Type de liquide", data.waterType)}
            {renderItem("Délai depuis l'incident", data.waterTime)}
            {renderItem("Objectif de réparation", data.waterGoal)}
          </>
        )}

        <Divider sx={{ my: 2 }} />
        {renderItem("État du châssis", data.frame)}
        {data.status === "working" &&
          renderItem("Batterie & Charge", data.battery)}

        {data.status === "working" && (
          <>
            <Divider sx={{ my: 2 }} />
            {renderItem("Fonctionnement du tactile", data.touchWorks)}
            {data.touchWorks === "no" &&
              renderItem("Problèmes tactiles", data.touchIssues)}
            {renderItem("Caméra & Flash", data.camera)}
            {renderItem("Son & Micros", data.audio)}
            {renderItem("Connectivité", data.connection)}
          </>
        )}

        <Divider sx={{ my: 2 }} />
        {renderItem("Alerte de stockage saturé", data.storage)}
        {renderItem("Environnement d'utilisation", data.environment)}
      </Paper>
    </Box>
  );
};

export default StepSummary;
