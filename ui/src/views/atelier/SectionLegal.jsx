import React from "react";
import { Box, Container, Typography, Stack } from "@mui/material";

const SectionLegal = () => {
  const labelStyle = {
    fontSize: "0.7rem",
    fontWeight: 800,
    color: "#1d1d1f",
    mb: 4,
    letterSpacing: "0.2em",
  };

  const itemLabelStyle = { fontSize: "0.8rem", color: "#86868b" };
  const itemValueStyle = { fontSize: "0.85rem", fontWeight: 700 };

  return (
    <Container maxWidth="md">
      <Box sx={{ py: { xs: 16, xl: 20 }, borderTop: "1px solid #e5e5e7" }}>
        {/* --- 법적 책임 조항들 --- */}
        <Stack spacing={8} sx={{ mb: 15 }}>
          <Box>
            <Typography sx={{ fontWeight: 800, fontSize: "1.5rem", mb: 2 }}>
              Protection des Données
            </Typography>
            <Typography
              sx={{
                color: "#424245",
                lineHeight: 1.6,
                fontSize: "0.95rem",
                whiteSpace: "pre-line",
              }}
            >
              Comment sauvegarder vos données :{"\n"}• iOS (iPhone) : Allez dans
              Réglages {">"} [Votre Nom] {">"} iCloud {">"} Sauvegarde iCloud{" "}
              {">"} Sauvegarder maintenant.{"\n"}• Android : Allez dans
              Paramètres {">"} Google {">"} Sauvegarde {">"} Sauvegarder
              maintenant.{"\n"}• PC/Mac : Connectez votre appareil et utilisez
              iTunes, Finder ou un logiciel de transfert dédié.{"\n"}
              {"\n"}
              Cas particulier - Écran noir ou tactile HS :{"\n"}
              Si l'état de votre écran ne permet pas d'effectuer une sauvegarde
              préalable :{"\n"}• Le client s'engage à fournir son code de
              déverrouillage (PIN/Schéma) lors du dépôt.{"\n"}• Ce code est
              indispensable pour permettre à Kim Reparation d'accéder au système
              dès le rétablissement de l'affichage, afin de procéder
              immédiatement aux tests de fonctionnement et à la sécurisation de
              vos données.{"\n"}• Sans ce code, aucune vérification
              post-réparation ne sera possible et Kim Reparation ne pourra être
              tenu responsable si des données restent inaccessibles ou si des
              fonctions secondaires ne sont pas testées.{"\n\n"}
              <strong>
                En cas d'échec ou de panne matérielle totale durant ce
                processus, la responsabilité de Kim Reparation ne pourra être
                engagée.
              </strong>
            </Typography>
          </Box>

          <Box>
            <Typography sx={{ fontWeight: 800, fontSize: "1.5rem", mb: 2 }}>
              Expertise : Oxydation & Court-circuit
            </Typography>
            <Typography
              sx={{
                color: "#424245",
                lineHeight: 1.6,
                fontSize: "0.95rem",
                whiteSpace: "pre-line",
              }}
            >
              Traitement de l'Oxydation (Dommages Liquides) :{"\n"}
              L'oxydation est un phénomène chimique instable et évolutif (bombe
              à retardement).{"\n"}• Conformément à l'Art. 1231-1 du Code civil,
              l'intervention se limite à une "obligation de moyens" : Kim
              Reparation déploiera ses meilleurs efforts pour stopper la
              corrosion, sans garantie de résultat durable.{"\n"}• Risque de
              Panne Fatale : Le nettoyage (chimique) peut révéler des
              courts-circuits préexistants ou fragiliser des composants déjà
              corrodés. Le client accepte le risque que l'appareil ne redémarre
              jamais après ouverture ou tentative de nettoyage.{"\n"}• Exclusion
              de Garantie : En raison de la nature imprévisible de la corrosion,
              AUCUNE GARANTIE n'est accordée sur les réparations d'appareils
              oxydés.{"\n"}• Kim Reparation ne pourra être tenu responsable
              d'une défaillance ultérieure ou d'une aggravation des dommages
              liée à la propagation naturelle de l'oxydation interne.
            </Typography>
          </Box>

          <Box>
            <Typography sx={{ fontWeight: 800, fontSize: "1.5rem", mb: 2 }}>
              Garantie de Conformité & Vices Cachés
            </Typography>
            <Typography
              sx={{
                color: "#424245",
                lineHeight: 1.6,
                fontSize: "0.95rem",
                whiteSpace: "pre-line",
              }}
            >
              Garantie Légale et Médiation :{"\n"}
              Conformément aux articles L. 217-3 du Code de la consommation
              (Garantie de conformité) et 1641 du Code civil (Vices cachés) :
              {"\n"}• La garantie est strictement limitée aux pièces remplacées
              et à la main-d'œuvre associée.{"\n"}• ⚠️ Exclusion de Garantie :
              Elle ne s'applique en aucun cas si le défaut résulte d'une chute,
              d'un choc, d'une déformation du châssis ou d'une exposition à
              l'humidité (Oxydation).{"\n"}• Clause de Pression : Toute anomalie
              d'affichage (lignes, taches, voile noir) consécutive à une
              pression excessive sur la dalle LCD/OLED, même sans bris de vitre
              apparent, annule la garantie.{"\n"}• Intervention Tierce : La
              rupture de notre sceau de garantie ou toute ouverture par un tiers
              entraîne la nullité immédiate de la protection.{"\n"}• Médiation
              de la consommation : En cas de litige non résolu avec l'atelier,
              vous pouvez saisir gratuitement le médiateur CM2C (14 rue Saint
              Jean, 75017 Paris | www.cm2c.net).
            </Typography>
          </Box>
        </Stack>

        {/* --- 형님이 주신 섹션 3: Mentions Légales (ÉDITEUR & SYSTEM) --- */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            pt: 10,
            borderTop: "1px solid #f2f2f2",
            gap: { xs: 8, md: 0 },
          }}
        >
          {/* [좌측] ÉDITEUR */}
          <Box sx={{ pr: { md: 8 }, borderRight: { md: "1px solid #f2f2f2" } }}>
            <Typography sx={labelStyle}>ÉDITEUR</Typography>
            <Stack spacing={2}>
              <Stack
                direction="row"
                justifyContent="space-between"
                sx={{ borderBottom: "1px solid #f5f5f7", pb: 1.5 }}
              >
                <Typography sx={itemLabelStyle}>Structure</Typography>
                <Typography sx={itemValueStyle}>Kim Reparation (EI)</Typography>
              </Stack>
              <Stack
                direction="row"
                justifyContent="space-between"
                sx={{ borderBottom: "1px solid #f5f5f7", pb: 1.5 }}
              >
                <Typography sx={itemLabelStyle}>Dirigeant</Typography>
                <Typography sx={itemValueStyle}>KIM Hanjun</Typography>
              </Stack>
              <Stack
                direction="row"
                justifyContent="space-between"
                sx={{ borderBottom: "1px solid #f5f5f7", pb: 1.5 }}
              >
                <Typography sx={itemLabelStyle}>SIRET</Typography>
                <Typography sx={itemValueStyle}>
                  00 00 00 00 00 00 00
                </Typography>
              </Stack>
              <Stack
                direction="row"
                justifyContent="space-between"
                sx={{ borderBottom: "1px solid #f5f5f7", pb: 1.5 }}
              >
                <Typography sx={itemLabelStyle}>Siège social</Typography>
                <Typography sx={{ ...itemValueStyle, textAlign: "right" }}>
                  00 00 00 00 00 00 00
                </Typography>
              </Stack>
              <Stack
                direction="row"
                justifyContent="space-between"
                sx={{ borderBottom: "1px solid #f5f5f7", pb: 1.5 }}
              >
                <Typography sx={itemLabelStyle}>Contact</Typography>
                <Box sx={{ textAlign: "right" }}>
                  <Typography sx={itemValueStyle}>
                    00 00 00 00 00 00 00
                  </Typography>
                  <Typography sx={itemValueStyle}>
                    00 00 00 00 00 00 00
                  </Typography>
                </Box>
              </Stack>
            </Stack>
          </Box>

          {/* [우측] SYSTEM */}
          <Box sx={{ pl: { md: 8 } }}>
            <Typography sx={labelStyle}>SYSTEM & HÉBERGEMENT</Typography>
            <Stack spacing={2}>
              <Stack
                direction="row"
                justifyContent="space-between"
                sx={{ borderBottom: "1px solid #f5f5f7", pb: 1.5 }}
              >
                <Typography sx={itemLabelStyle}>DNS / Domain</Typography>
                <Box sx={{ textAlign: "right" }}>
                  <Typography sx={itemValueStyle}>Hostinger</Typography>
                  <Typography sx={{ fontSize: "0.7rem", color: "#c1c1c1" }}>
                    Larnaca, Chypre
                  </Typography>
                </Box>
              </Stack>
              <Stack
                direction="row"
                justifyContent="space-between"
                sx={{ borderBottom: "1px solid #f5f5f7", pb: 1.5 }}
              >
                <Typography sx={itemLabelStyle}>Hébergeur</Typography>
                <Box sx={{ textAlign: "right" }}>
                  <Typography sx={itemValueStyle}>GitHub, Inc.</Typography>
                  <Typography sx={{ fontSize: "0.7rem", color: "#86868b" }}>
                    San Francisco, CA, USA
                  </Typography>
                </Box>
              </Stack>
              <Typography
                sx={{
                  fontSize: "0.75rem",
                  color: "#86868b",
                  textAlign: "center",
                  mt: 4,
                  fontStyle: "italic",
                }}
              >
                Ce site web a été entièrement conçu et réalisé par nos soins.
              </Typography>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default SectionLegal;
