import React from "react";
import {
  Box,
  Container,
  Typography,
  Stack,
  Accordion, // 👈 추가
  AccordionSummary, // 👈 추가
  AccordionDetails, // 👈 추가
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"; // 👈 추가;

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
        {/* --- FAQ & Transparence (고객 이해를 돕는 Q&A) --- */}
        {/* --- FAQ & Transparence --- */}
        <Box sx={{ mb: 15 }}>
          {/* --- SECTION 1 : Données --- */}
          <Typography
            sx={{
              fontWeight: 800,
              fontSize: "1.3rem",
              color: "#1d1d1f",
              mt: 0,
              mb: 3,
              letterSpacing: "-0.02em",
            }}
          >
            Vos Données Personnelles
          </Typography>

          <Stack spacing={2} sx={{ mb: 8 }}>
            <Accordion
              disableGutters
              elevation={0}
              sx={{
                border: "1px solid #e5e5e7",
                borderRadius: "14px !important",
                overflow: "hidden",
                "&:before": { display: "none" },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#0066cc" }} />}
                sx={{
                  bgcolor: "#ffffff",
                  px: 3,
                  py: 1,
                  "&:hover": { bgcolor: "#f5f5f7" },
                }}
              >
                <Typography
                  sx={{ fontWeight: 600, fontSize: "1rem", color: "#1d1d1f" }}
                >
                  Comment puis-je sécuriser mes données avant de vous confier
                  mon appareil ?
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  bgcolor: "#fafafa",
                  borderTop: "1px solid #e5e5e7",
                  p: 3,
                }}
              >
                <Typography
                  sx={{
                    color: "#424245",
                    lineHeight: 1.6,
                    fontSize: "0.95rem",
                    whiteSpace: "pre-line",
                  }}
                >
                  Comment sauvegarder vos données :{"\n"}• iOS (iPhone) : Allez
                  dans Réglages {">"} [Votre Nom] {">"} iCloud {">"} Sauvegarde
                  iCloud {">"} Sauvegarder maintenant.{"\n"}• Android : Allez
                  dans Paramètres {">"} Google {">"} Sauvegarde {">"}{" "}
                  Sauvegarder maintenant.{"\n"}• PC/Mac : Connectez votre
                  appareil et utilisez iTunes, Finder ou un logiciel de
                  transfert dédié.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion
              disableGutters
              elevation={0}
              sx={{
                border: "1px solid #e5e5e7",
                borderRadius: "14px !important",
                overflow: "hidden",
                "&:before": { display: "none" },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#0066cc" }} />}
                sx={{
                  bgcolor: "#ffffff",
                  px: 3,
                  py: 1,
                  "&:hover": { bgcolor: "#f5f5f7" },
                }}
              >
                <Typography
                  sx={{ fontWeight: 600, fontSize: "1rem", color: "#1d1d1f" }}
                >
                  Mon écran ne s'allume plus, pourquoi avez-vous besoin de mon
                  code secret ?
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  bgcolor: "#fafafa",
                  borderTop: "1px solid #e5e5e7",
                  p: 3,
                }}
              >
                <Typography
                  sx={{
                    color: "#424245",
                    lineHeight: 1.6,
                    fontSize: "0.95rem",
                    whiteSpace: "pre-line",
                  }}
                >
                  Cas particulier - Écran noir ou tactile HS :{"\n"}
                  Si l'état de votre écran ne permet pas d'effectuer une
                  sauvegarde préalable :{"\n"}• Le client s'engage à fournir son
                  code de déverrouillage (PIN/Schéma) lors du dépôt.{"\n"}• Ce
                  code est indispensable pour permettre à Kim Reparation
                  d'accéder au système dès le rétablissement de l'affichage,
                  afin de procéder immédiatement aux tests de fonctionnement et
                  à la sécurisation de vos données.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion
              disableGutters
              elevation={0}
              sx={{
                border: "1px solid #e5e5e7",
                borderRadius: "14px !important",
                overflow: "hidden",
                "&:before": { display: "none" },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#0066cc" }} />}
                sx={{
                  bgcolor: "#ffffff",
                  px: 3,
                  py: 1,
                  "&:hover": { bgcolor: "#f5f5f7" },
                }}
              >
                <Typography
                  sx={{ fontWeight: 600, fontSize: "1rem", color: "#1d1d1f" }}
                >
                  Est-il obligatoire de fournir mon code si je souhaite protéger
                  ma vie privée ?
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  bgcolor: "#fafafa",
                  borderTop: "1px solid #e5e5e7",
                  p: 3,
                }}
              >
                <Typography
                  sx={{
                    color: "#424245",
                    lineHeight: 1.6,
                    fontSize: "0.95rem",
                    whiteSpace: "pre-line",
                  }}
                >
                  • Sans ce code, aucune vérification post-réparation ne sera
                  possible et Kim Reparation ne pourra être tenu responsable si
                  des données restent inaccessibles ou si des fonctions
                  secondaires ne sont pas testées.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion
              disableGutters
              elevation={0}
              sx={{
                border: "1px solid #e5e5e7",
                borderRadius: "14px !important",
                overflow: "hidden",
                "&:before": { display: "none" },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#0066cc" }} />}
                sx={{
                  bgcolor: "#ffffff",
                  px: 3,
                  py: 1,
                  "&:hover": { bgcolor: "#f5f5f7" },
                }}
              >
                <Typography
                  sx={{ fontWeight: 600, fontSize: "1rem", color: "#1d1d1f" }}
                >
                  Existe-t-il un risque pour mon appareil s'il est déjà
                  gravement endommagé ?
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  bgcolor: "#fafafa",
                  borderTop: "1px solid #e5e5e7",
                  p: 3,
                }}
              >
                <Typography
                  sx={{
                    color: "#424245",
                    lineHeight: 1.6,
                    fontSize: "0.95rem",
                    whiteSpace: "pre-line",
                  }}
                >
                  <strong>
                    En cas d'échec ou de panne matérielle totale durant ce
                    processus, la responsabilité de Kim Reparation ne pourra
                    être engagée.
                  </strong>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Stack>

          {/* --- SECTION 2 : Oxydation --- */}
          <Typography
            sx={{
              fontWeight: 800,
              fontSize: "1.3rem",
              color: "#1d1d1f",
              mt: 2,
              mb: 3,
              letterSpacing: "-0.02em",
            }}
          >
            Dommages Liquides & Oxydation
          </Typography>

          <Stack spacing={2} sx={{ mb: 8 }}>
            <Accordion
              disableGutters
              elevation={0}
              sx={{
                border: "1px solid #e5e5e7",
                borderRadius: "14px !important",
                overflow: "hidden",
                "&:before": { display: "none" },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#0066cc" }} />}
                sx={{
                  bgcolor: "#ffffff",
                  px: 3,
                  py: 1,
                  "&:hover": { bgcolor: "#f5f5f7" },
                }}
              >
                <Typography
                  sx={{ fontWeight: 600, fontSize: "1rem", color: "#1d1d1f" }}
                >
                  Mon appareil est tombé dans l'eau, est-il certain qu'il
                  refonctionnera ?
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  bgcolor: "#fafafa",
                  borderTop: "1px solid #e5e5e7",
                  p: 3,
                }}
              >
                <Typography
                  sx={{
                    color: "#424245",
                    lineHeight: 1.6,
                    fontSize: "0.95rem",
                    whiteSpace: "pre-line",
                  }}
                >
                  Traitement de l'Oxydation (Dommages Liquides) :{"\n"}
                  L'oxydation est un phénomène chimique instable et évolutif
                  (bombe à retardement).{"\n"}• Conformément à l'Art. 1231-1 du
                  Code civil, l'intervention se limite à une "obligation de
                  moyens" : Kim Reparation déploiera ses meilleurs efforts pour
                  stopper la corrosion, sans garantie de résultat durable.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion
              disableGutters
              elevation={0}
              sx={{
                border: "1px solid #e5e5e7",
                borderRadius: "14px !important",
                overflow: "hidden",
                "&:before": { display: "none" },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#0066cc" }} />}
                sx={{
                  bgcolor: "#ffffff",
                  px: 3,
                  py: 1,
                  "&:hover": { bgcolor: "#f5f5f7" },
                }}
              >
                <Typography
                  sx={{ fontWeight: 600, fontSize: "1rem", color: "#1d1d1f" }}
                >
                  Pourquoi dit-on qu'un nettoyage de désoxydation peut être
                  risqué ?
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  bgcolor: "#fafafa",
                  borderTop: "1px solid #e5e5e7",
                  p: 3,
                }}
              >
                <Typography
                  sx={{
                    color: "#424245",
                    lineHeight: 1.6,
                    fontSize: "0.95rem",
                    whiteSpace: "pre-line",
                  }}
                >
                  • Risque de Panne Fatale : Le nettoyage (chimique) peut
                  révéler des courts-circuits préexistants ou fragiliser des
                  composants déjà corrodés. Le client accepte le risque que
                  l'appareil ne redémarre jamais après ouverture ou tentative de
                  nettoyage.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion
              disableGutters
              elevation={0}
              sx={{
                border: "1px solid #e5e5e7",
                borderRadius: "14px !important",
                overflow: "hidden",
                "&:before": { display: "none" },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#0066cc" }} />}
                sx={{
                  bgcolor: "#ffffff",
                  px: 3,
                  py: 1,
                  "&:hover": { bgcolor: "#f5f5f7" },
                }}
              >
                <Typography
                  sx={{ fontWeight: 600, fontSize: "1rem", color: "#1d1d1f" }}
                >
                  Les réparations liées aux dommages liquides sont-elles
                  garanties ?
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  bgcolor: "#fafafa",
                  borderTop: "1px solid #e5e5e7",
                  p: 3,
                }}
              >
                <Typography
                  sx={{
                    color: "#424245",
                    lineHeight: 1.6,
                    fontSize: "0.95rem",
                    whiteSpace: "pre-line",
                  }}
                >
                  • Exclusion de Garantie : En raison de la nature imprévisible
                  de la corrosion, AUCUNE GARANTIE n'est accordée sur les
                  réparations d'appareils oxydés.{"\n"}• Kim Reparation ne
                  pourra être tenu responsable d'une défaillance ultérieure ou
                  d'une aggravation des dommages liée à la propagation naturelle
                  de l'oxydation interne.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Stack>

          {/* --- SECTION 3 : Garantie --- */}
          <Typography
            sx={{
              fontWeight: 800,
              fontSize: "1.3rem",
              color: "#1d1d1f",
              mt: 2,
              mb: 3,
              letterSpacing: "-0.02em",
            }}
          >
            Garantie & Sérénité
          </Typography>

          <Stack spacing={2}>
            <Accordion
              disableGutters
              elevation={0}
              sx={{
                border: "1px solid #e5e5e7",
                borderRadius: "14px !important",
                overflow: "hidden",
                "&:before": { display: "none" },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#0066cc" }} />}
                sx={{
                  bgcolor: "#ffffff",
                  px: 3,
                  py: 1,
                  "&:hover": { bgcolor: "#f5f5f7" },
                }}
              >
                <Typography
                  sx={{ fontWeight: 600, fontSize: "1rem", color: "#1d1d1f" }}
                >
                  Comment fonctionne la garantie sur les pièces remplacées ?
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  bgcolor: "#fafafa",
                  borderTop: "1px solid #e5e5e7",
                  p: 3,
                }}
              >
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
                  (Garantie de conformité) et 1641 du Code civil (Vices cachés)
                  :{"\n"}• La garantie est strictement limitée aux pièces
                  remplacées et à la main-d'œuvre associée.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion
              disableGutters
              elevation={0}
              sx={{
                border: "1px solid #e5e5e7",
                borderRadius: "14px !important",
                overflow: "hidden",
                "&:before": { display: "none" },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#0066cc" }} />}
                sx={{
                  bgcolor: "#ffffff",
                  px: 3,
                  py: 1,
                  "&:hover": { bgcolor: "#f5f5f7" },
                }}
              >
                <Typography
                  sx={{ fontWeight: 600, fontSize: "1rem", color: "#1d1d1f" }}
                >
                  Y a-t-il des situations où la garantie ne peut pas s'appliquer
                  ?
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  bgcolor: "#fafafa",
                  borderTop: "1px solid #e5e5e7",
                  p: 3,
                }}
              >
                <Typography
                  sx={{
                    color: "#424245",
                    lineHeight: 1.6,
                    fontSize: "0.95rem",
                    whiteSpace: "pre-line",
                  }}
                >
                  • ⚠️ Exclusion de Garantie : Elle ne s'applique en aucun cas
                  si le défaut résulte d'une chute, d'un choc, d'une déformation
                  du châssis ou d'une exposition à l'humidité (Oxydation).
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion
              disableGutters
              elevation={0}
              sx={{
                border: "1px solid #e5e5e7",
                borderRadius: "14px !important",
                overflow: "hidden",
                "&:before": { display: "none" },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#0066cc" }} />}
                sx={{
                  bgcolor: "#ffffff",
                  px: 3,
                  py: 1,
                  "&:hover": { bgcolor: "#f5f5f7" },
                }}
              >
                <Typography
                  sx={{ fontWeight: 600, fontSize: "1rem", color: "#1d1d1f" }}
                >
                  Mon écran présente des lignes ou des taches sans être fissuré,
                  est-ce pris en charge ?
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  bgcolor: "#fafafa",
                  borderTop: "1px solid #e5e5e7",
                  p: 3,
                }}
              >
                <Typography
                  sx={{
                    color: "#424245",
                    lineHeight: 1.6,
                    fontSize: "0.95rem",
                    whiteSpace: "pre-line",
                  }}
                >
                  • Clause de Pression : Toute anomalie d'affichage (lignes,
                  taches, voile noir) consécutive à une pression excessive sur
                  la dalle LCD/OLED, même sans bris de vitre apparent, annule la
                  garantie.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion
              disableGutters
              elevation={0}
              sx={{
                border: "1px solid #e5e5e7",
                borderRadius: "14px !important",
                overflow: "hidden",
                "&:before": { display: "none" },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#0066cc" }} />}
                sx={{
                  bgcolor: "#ffffff",
                  px: 3,
                  py: 1,
                  "&:hover": { bgcolor: "#f5f5f7" },
                }}
              >
                <Typography
                  sx={{ fontWeight: 600, fontSize: "1rem", color: "#1d1d1f" }}
                >
                  Puis-je faire vérifier mon appareil par un autre réparateur
                  après votre intervention ?
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  bgcolor: "#fafafa",
                  borderTop: "1px solid #e5e5e7",
                  p: 3,
                }}
              >
                <Typography
                  sx={{
                    color: "#424245",
                    lineHeight: 1.6,
                    fontSize: "0.95rem",
                    whiteSpace: "pre-line",
                  }}
                >
                  • Intervention Tierce : La rupture de notre sceau de garantie
                  ou toute ouverture par un tiers entraîne la nullité immédiate
                  de la protection.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion
              disableGutters
              elevation={0}
              sx={{
                border: "1px solid #e5e5e7",
                borderRadius: "14px !important",
                overflow: "hidden",
                "&:before": { display: "none" },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#0066cc" }} />}
                sx={{
                  bgcolor: "#ffffff",
                  px: 3,
                  py: 1,
                  "&:hover": { bgcolor: "#f5f5f7" },
                }}
              >
                <Typography
                  sx={{ fontWeight: 600, fontSize: "1rem", color: "#1d1d1f" }}
                >
                  En cas de question ou de désaccord, vers qui puis-je me
                  tourner ?
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  bgcolor: "#fafafa",
                  borderTop: "1px solid #e5e5e7",
                  p: 3,
                }}
              >
                <Typography
                  sx={{
                    color: "#424245",
                    lineHeight: 1.6,
                    fontSize: "0.95rem",
                    whiteSpace: "pre-line",
                  }}
                >
                  • Médiation de la consommation : En cas de litige non résolu
                  avec l'atelier, vous pouvez saisir gratuitement le médiateur
                  CM2C (14 rue Saint Jean, 75017 Paris | www.cm2c.net).
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Stack>
        </Box>

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
