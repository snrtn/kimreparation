import React from "react";
import {
  Box,
  Container,
  Typography,
  Stack,
  Paper,
  Divider,
} from "@mui/material";

const AtelierWarranty = () => {
  const warrantyTerms = [
    {
      label: "Engagement Qualité & Partenaires",
      text: "Kim Réparation est une structure officiellement enregistrée (SIRET) et couverte par une assurance RC Pro.\nPour vous offrir la meilleure fiabilité, nous sélectionnons nos composants auprès de fournisseurs certifiés exclusivement basés en France. Cela nous permet de vous garantir une traçabilité totale et des pièces de Grade Original ou Premium.",
    },
    {
      label: "Votre Sérénité : Garantie Légale & Qualité",
      text:
        "Conformément aux dispositions légales, nous garantissons la conformité des pièces installées et notre main-d'œuvre.\n\n" +
        "Notre engagement de fiabilité :\n" +
        "• Batterie : Les tests de cycle et de tension permettent de valider le bon fonctionnement dès la pose.\n" +
        "• Écran : Grâce à un double contrôle technique rigoureux avant installation, nous assurons une conformité totale du matériel.\n" +
        "• Expertise Préalable : Un examen visuel systématique détecte toute anomalie (choc, oxydation) avant intervention, garantissant une transparence absolue sur l'état de votre appareil.\n" +
        "• Preuve Numérique : Chaque étape de l'ouverture et du montage est filmée (Body-cam), constituant une base factuelle incontestable en cas de réclamation.",
    },
    {
      label: "Préservation de l'Étanchéité",
      text: "Lors de chaque fermeture, nous prenons soin d'installer un nouveau joint d'étanchéité pour protéger l'intérieur de votre appareil.\nCependant, nous tenons à vous informer qu'une fois ouvert, un appareil ne peut plus garantir une imperméabilité identique aux normes constructeur (IP67/68). Par précaution, nous vous conseillons donc d'éviter toute immersion ou contact direct avec des liquides.",
    },
    {
      label: "Conseils pour maintenir votre Garantie",
      text: "Pour que la garantie reste valide, l'appareil doit être préservé des incidents du quotidien qui ne relèvent pas du défaut technique :\n• Les dommages accidentels : Fissures sur l'écran ou la vitre arrière, chocs sur le châssis ou la lentille caméra.\n• Les signes de pression interne : L'apparition de lignes ou de taches sur l'affichage (souvent liées à une pression excessive ou un choc, même sans bris de vitre).\n• L'exposition aux liquides : L'oxydation reste une cause d'exclusion de garantie.\n• L'intégrité du montage : Veillez à ne pas retirer notre sceau de garantie (Seal) et à ne pas faire ouvrir l'appareil par un tiers.",
    },
    {
      label: "La Vidéo : Notre gage de confiance",
      text: "Pour une transparence absolue, nous enregistrons chaque étape de notre travail (Body-cam et établi).\n Ce dispositif nous permet de vous assurer que votre appareil a été traité avec le plus grand respect et constitue une base factuelle partagée en cas de question après la réparation.",
    },
    // --- 🚨 여기서부터 정중하고 빡센 법적 보호 조항 🚨 ---
    {
      label: "Protection et Responsabilité des Données",
      text: "La sécurité de vos données est une priorité. Toutefois, l'intervention technique sur un support numérique comporte des risques intrinsèques indépendants de notre volonté. \nConformément aux usages de la profession, la sauvegarde de vos données (photos, contacts, messages) reste à votre charge exclusive. Kim Réparation ne pourra être tenu responsable de la perte de données, conformément au principe de limitation de responsabilité contractuelle.",
    },
    {
      label: "Expertise : Appareils Oxydés ou Court-circuités",
      text: "Lorsqu'une expertise révèle des traces de corrosion (Oxydation) ou des composants brûlés (Court-circuit), l'appareil est considéré comme électroniquement instable. \nEn acceptant la réparation, le client reconnaît avoir été informé que l'intervention se limite à une 'obligation de moyens' (Art. 1231-1 du Code civil). Kim Réparation ne saurait être tenu responsable d'une panne ultérieure résultant de la propagation de la corrosion ou d'une rupture de circuit préexistante.",
    },
    {
      label: "Cadre Légal : Garantie de Conformité et Vices Cachés",
      text: "Conformément aux articles L. 217-3 à L. 217-30 du Code de la consommation, vous bénéficiez de la garantie légale de conformité pour les défauts de fabrication.\nConformément aux articles 1641 à 1649 du Code civil, vous êtes également protégé contre les vices cachés. \n⚠️ IMPORTANT : Ces garanties légales ne s'appliquent pas si le défaut résulte d'une cause externe (chute, choc, pression, exposition à l'humidité ou utilisation non conforme). En cas de litige, le recours au médiateur (CM2C) est possible pour une résolution amiable.",
    },
  ];

  return (
    <Box sx={{ width: "100%", py: { xs: 16, xl: 20 } }}>
      <Container Container maxWidth="md">
        <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 2 }}>
          <Typography
            sx={{
              fontWeight: 800,
              mb: 2,
              textAlign: "left",
              fontSize: "2rem",
            }}
          >
            Engagement
          </Typography>
        </Stack>
        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, md: 4 },
            borderRadius: "20px",
            bgcolor: "#f9f9f9",
          }}
        >
          <Stack spacing={3}>
            {warrantyTerms.map((term, tIdx) => (
              <Box key={tIdx}>
                <Typography
                  sx={{
                    fontWeight: 800,
                    fontSize: "0.7rem",
                    color: "#0071e3",
                    mb: 1,
                    textTransform: "uppercase",
                  }}
                >
                  {term.label}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "0.85rem",
                    fontWeight: 500,
                    color: "#1d1d1f",
                    lineHeight: 1.6,
                    whiteSpace: "pre-line",
                  }}
                >
                  {term.text}
                </Typography>
                {tIdx !== warrantyTerms.length - 1 && (
                  <Divider sx={{ mt: 3, borderColor: "#d2d2d7" }} />
                )}
              </Box>
            ))}
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
};

export default AtelierWarranty;
