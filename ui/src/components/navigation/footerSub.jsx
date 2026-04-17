import React from "react";
import { Box, Container, Typography, Stack } from "@mui/material";

const FooterSub = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "transparent",
        py: { xs: 6, md: 8 },
        borderTop: "1px solid #f2f2f7",
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={4}>
          {/* 데이터 백업 강조 (정중하고 상세하게) */}
          <Box>
            <Typography
              sx={{
                fontSize: "0.8rem",
                fontWeight: 700,
                color: "#1d1d1f",
                mb: 1.5,
              }}
            >
              SÉCURITÉ DES DONNÉES PERSONNELLES
            </Typography>
            <Typography
              sx={{ fontSize: "0.8rem", color: "#86868b", lineHeight: 1.8 }}
            >
              La sauvegarde intégrale des données (photos, contacts, messages)
              relève de la responsabilité exclusive du client avant toute
              intervention. Un appareil endommagé par un choc ou un liquide peut
              présenter des défaillances imprévisibles. Kim Reparation ne peut
              être tenu responsable de la perte de fichiers numériques survenant
              durant le processus de maintenance.
            </Typography>
            <Typography
              sx={{
                fontSize: "0.8rem",
                color: "#86868b",
                lineHeight: 1.8,
                mt: 2,
              }}
            >
              <strong>Cas d'écran noir ou tactile HS :</strong> Le client est
              libre de ne pas communiquer son code de déverrouillage. Dans ce
              cas, l'atelier réalise uniquement les tests accessibles sans accès
              au système.
              {"\n\n"}
              Les vérifications nécessitant le code (Wi-Fi, Bluetooth, capteurs,
              etc.) seront effectuées **en présence du client** lors de la
              récupération de l'appareil. Si un défaut est identifié durant
              cette phase conjointe, une nouvelle intervention pourra être
              réalisée. Toutefois, si le client choisit de ne pas faire corriger
              une anomalie détectée lors de ces tests, la garantie ne pourra
              s'appliquer aux fonctions concernées.
            </Typography>
          </Box>

          {/* 2. 기술적 위험 및 방수 (팩트 폭격) */}
          <Box>
            <Typography
              sx={{
                fontSize: "0.8rem",
                fontWeight: 700,
                color: "#1d1d1f",
                mb: 1.5,
              }}
            >
              RISQUES TECHNIQUES ET ÉTANCHÉITÉ
            </Typography>
            <Typography
              sx={{
                fontSize: "0.8rem",
                color: "#86868b",
                lineHeight: 1.8,
                mb: 2,
              }}
            >
              Toute intervention matérielle comporte des risques liés à l'état
              initial de l'appareil. Des dommages invisibles, comme des
              micro-fissures structurelles, peuvent évoluer lors du démontage.
              Après l'ouverture de l'appareil, l'étanchéité d'origine (normes
              IP67 ou IP68) n'est plus garantie, même avec l'installation
              systématique d'un nouveau joint de protection.
            </Typography>

            <Typography
              sx={{
                fontSize: "0.8rem",
                color: "#86868b",
                lineHeight: 1.8,
                fontStyle: "italic",
              }}
            >
              Note d'indépendance : Kim Reparation est un prestataire de
              services indépendant, non affilié aux sociétés constructrices
              (Apple, Samsung, Xiaomi, Oppo, Google Pixel, Huawei, PlayStation,
              Xbox, Nintendo, Tesla, etc). Les noms de marques sont mentionnés
              uniquement à titre informatif pour identifier la compatibilité des
              services proposés.
            </Typography>
          </Box>

          <Typography
            sx={{
              fontSize: "0.75rem",
              color: "#86868b",
              pt: 2,
              borderTop: "1px dashed #e5e5e7",
            }}
          >
            © {currentYear} KIM REPARATION. TOUS DROITS RESERVES.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default FooterSub;
