import React from "react";
import {
  Box,
  Container,
  Typography,
  Stack,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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

  const accordionSx = {
    border: "1px solid #e5e5e7",
    borderRadius: "14px !important",
    overflow: "hidden",
    "&:before": { display: "none" },
  };

  const summarySx = {
    bgcolor: "#ffffff",
    px: 3,
    py: 1,
    "&:hover": { bgcolor: "#f5f5f7" },
  };

  const detailsSx = {
    bgcolor: "#fafafa",
    borderTop: "1px solid #e5e5e7",
    p: 3,
  };

  const textSx = {
    color: "#424245",
    lineHeight: 1.8,
    fontSize: "0.95rem",
    whiteSpace: "pre-line",
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ py: { xs: 16, xl: 20 }, borderTop: "1px solid #e5e5e7" }}>
        <Box sx={{ mb: 15 }}>

          {/* SECTION 1 : Données Personnelles */}
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
            <Accordion disableGutters elevation={0} sx={accordionSx}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#0066cc" }} />}
                sx={summarySx}
              >
                <Typography sx={{ fontWeight: 600, fontSize: "1rem", color: "#1d1d1f" }}>
                  Comment sécuriser mes données avant de déposer mon appareil ?
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={detailsSx}>
                <Typography sx={textSx}>
                  {`Avant toute intervention, nous vous recommandons d'effectuer une sauvegarde complète de vos données. Voici les méthodes disponibles selon votre appareil :\n\n• iPhone : Rendez-vous dans Réglages > [votre prénom] > iCloud > Sauvegarde iCloud, puis appuyez sur « Sauvegarder maintenant ».\n• Android : Accédez à Paramètres > Google > Sauvegarde, puis lancez la sauvegarde.\n• Via ordinateur : Connectez votre appareil et utilisez iTunes (Windows), Finder (Mac) ou tout logiciel de transfert compatible.\n\nCette étape préventive est dans votre intérêt : même si notre intervention est purement matérielle, aucun technicien ne peut garantir à 100 % l'intégrité des données en cas de panne électronique imprévisible.`}
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion disableGutters elevation={0} sx={accordionSx}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#0066cc" }} />}
                sx={summarySx}
              >
                <Typography sx={{ fontWeight: 600, fontSize: "1rem", color: "#1d1d1f" }}>
                  Mon écran est noir, pourquoi avez-vous besoin de mon code de déverrouillage ?
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={detailsSx}>
                <Typography sx={textSx}>
                  {`Lorsque l'écran est hors service, la première étape est de restaurer l'affichage afin de rendre l'appareil fonctionnel. Une fois cela effectué, votre code de déverrouillage nous permet d'accéder aux réglages système pour réaliser les tests de vérification post-réparation : Wi-Fi, Bluetooth, Face ID, Touch ID, etc.\n\nCe code n'est utilisé qu'à des fins techniques et n'est jamais conservé. Si vous préférez saisir vous-même le code au moment des tests, nous pouvons organiser cela en votre présence à l'atelier.`}
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion disableGutters elevation={0} sx={accordionSx}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#0066cc" }} />}
                sx={summarySx}
              >
                <Typography sx={{ fontWeight: 600, fontSize: "1rem", color: "#1d1d1f" }}>
                  Que se passe-t-il si je préfère ne pas fournir mon code ?
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={detailsSx}>
                <Typography sx={textSx}>
                  {`Vous êtes entièrement libre de ne pas communiquer votre code. Dans ce cas, notre vérification sera limitée aux fonctions accessibles depuis l'écran de verrouillage : tactile, luminosité, haut-parleur, caméras.\n\nLes fonctions nécessitant l'accès au système (Wi-Fi, Bluetooth, sécurité biométrique, etc.) ne pourront pas être contrôlées. Notre garantie portera alors uniquement sur les composants que nous avons pu tester.`}
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion disableGutters elevation={0} sx={accordionSx}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#0066cc" }} />}
                sx={summarySx}
              >
                <Typography sx={{ fontWeight: 600, fontSize: "1rem", color: "#1d1d1f" }}>
                  Mon appareil est très endommagé. Y a-t-il des risques lors de l'intervention ?
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={detailsSx}>
                <Typography sx={textSx}>
                  {`Oui, et nous préférons vous en informer clairement plutôt que de vous laisser une fausse impression de sécurité.\n\nLorsqu'un appareil présente des dommages préexistants importants (chute grave, châssis tordu, composants fragilisés), l'intervention peut révéler ou aggraver des problèmes internes qui n'étaient pas visibles avant l'ouverture. Ce n'est pas une défaillance de notre part, mais une réalité technique inhérente à l'état de l'appareil.\n\nNous réalisons un état des lieux photographique avant toute ouverture. Si une situation particulière est découverte à l'intérieur, nous vous en informons immédiatement avant de poursuivre.`}
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Stack>

          {/* SECTION 2 : Dommages Liquides */}
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
            <Accordion disableGutters elevation={0} sx={accordionSx}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#0066cc" }} />}
                sx={summarySx}
              >
                <Typography sx={{ fontWeight: 600, fontSize: "1rem", color: "#1d1d1f" }}>
                  Mon appareil est tombé dans l'eau. Peut-il être sauvé ?
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={detailsSx}>
                <Typography sx={textSx}>
                  {`C'est possible, mais pas garanti. L'oxydation est un phénomène chimique évolutif : les dommages continuent de progresser même après que l'appareil a séché. Plus l'intervention est rapide, plus les chances de récupération sont élevées.\n\nNous traitons les zones touchées sous microscope et procédons à un nettoyage technique des circuits. Notre objectif est de stabiliser l'appareil pour, dans un premier temps, permettre la récupération de vos données, puis d'évaluer la faisabilité d'une réparation complète.\n\nL'intervention sur appareil oxydé relève d'une obligation de moyens : nous mettons en œuvre toutes nos compétences, sans pouvoir garantir un résultat durable compte tenu de l'état chimique des composants.`}
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion disableGutters elevation={0} sx={accordionSx}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#0066cc" }} />}
                sx={summarySx}
              >
                <Typography sx={{ fontWeight: 600, fontSize: "1rem", color: "#1d1d1f" }}>
                  Pourquoi un nettoyage anti-oxydation comporte-t-il des risques ?
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={detailsSx}>
                <Typography sx={textSx}>
                  {`Le nettoyage chimique des circuits peut révéler des courts-circuits qui, jusqu'alors, restaient dormants sous la corrosion. En d'autres termes, l'intervention peut rendre visible une panne qui n'était pas encore apparente.\n\nPar ailleurs, certains composants déjà fortement corrodés peuvent se fragiliser davantage lors du traitement. Ce risque est inhérent à l'état de l'appareil et non à la qualité de l'intervention.\n\nNous vous informons systématiquement de la situation avant de procéder, afin que vous puissiez décider en connaissance de cause.`}
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion disableGutters elevation={0} sx={accordionSx}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#0066cc" }} />}
                sx={summarySx}
              >
                <Typography sx={{ fontWeight: 600, fontSize: "1rem", color: "#1d1d1f" }}>
                  Les réparations après dommages liquides sont-elles couvertes par une garantie ?
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={detailsSx}>
                <Typography sx={textSx}>
                  {`Non. Les interventions liées à l'oxydation ne peuvent pas être couvertes par une garantie commerciale.\n\nLa raison est simple : l'oxydation continue d'évoluer de manière imprévisible, même après le traitement. Un composant peut parfaitement fonctionner à la sortie de l'atelier, puis défaillir quelques semaines plus tard en raison de la propagation résiduelle de la corrosion interne. Ce type de panne ne relève pas d'un défaut d'intervention, mais de l'état irréversible du matériel.\n\nNous vous communiquons cette information avant toute prise en charge, afin de définir ensemble des attentes réalistes.`}
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Stack>

          {/* SECTION 3 : Garantie */}
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
            Garantie & Suivi
          </Typography>

          <Stack spacing={2}>
            <Accordion disableGutters elevation={0} sx={accordionSx}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#0066cc" }} />}
                sx={summarySx}
              >
                <Typography sx={{ fontWeight: 600, fontSize: "1rem", color: "#1d1d1f" }}>
                  Comment fonctionne la garantie sur les pièces remplacées ?
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={detailsSx}>
                <Typography sx={textSx}>
                  {`La garantie couvre les pièces que nous installons ainsi que la main-d'œuvre associée. En cas de défaut avéré sur la pièce elle-même (défaut de fabrication, dysfonctionnement non lié à un choc ou une manipulation externe), nous procédons au remplacement ou à la correction sans frais supplémentaires.\n\nAvant chaque installation, les composants sont testés avec nos équipements (programmateur, multimètre) pour s'assurer de leur bon état. En cas de retour sous garantie, nous réalisons le même contrôle pour déterminer l'origine exacte du problème et vous en communiquer les résultats.`}
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion disableGutters elevation={0} sx={accordionSx}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#0066cc" }} />}
                sx={summarySx}
              >
                <Typography sx={{ fontWeight: 600, fontSize: "1rem", color: "#1d1d1f" }}>
                  Dans quels cas la garantie ne s'applique-t-elle pas ?
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={detailsSx}>
                <Typography sx={textSx}>
                  {`La garantie est liée à la pièce installée et à son installation. Elle ne couvre pas les situations suivantes :\n\n• Dommage physique survenu après la réparation : chute, choc, pression mécanique, déformation du châssis.\n• Exposition à l'humidité ou traces d'oxydation apparues après la prise en charge.\n• Panne liée à la carte mère ou à un composant non remplacé lors de l'intervention.\n\nSi vous observez un dysfonctionnement après réparation, contactez-nous. Nous évaluons chaque situation au cas par cas et vous présentons un diagnostic clair avant toute décision.`}
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion disableGutters elevation={0} sx={accordionSx}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#0066cc" }} />}
                sx={summarySx}
              >
                <Typography sx={{ fontWeight: 600, fontSize: "1rem", color: "#1d1d1f" }}>
                  Mon écran présente des lignes ou des taches sans être fissuré, est-ce pris en charge ?
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={detailsSx}>
                <Typography sx={textSx}>
                  {`Les anomalies d'affichage (lignes, taches, zones noires, voile blanc) peuvent avoir deux origines distinctes : un défaut interne de la pièce, ou une contrainte mécanique exercée sur la dalle après l'intervention.\n\nSi le problème résulte d'une pression extérieure sur l'écran — même sans bris de vitre apparent — cela n'est pas couvert par la garantie. En revanche, si le défaut est d'origine fabricant et n'est pas lié à une manipulation, le remplacement est pris en charge.\n\nNous vous communiquons notre analyse technique pour que vous puissiez comprendre l'origine du problème avant toute décision.`}
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion disableGutters elevation={0} sx={accordionSx}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#0066cc" }} />}
                sx={summarySx}
              >
                <Typography sx={{ fontWeight: 600, fontSize: "1rem", color: "#1d1d1f" }}>
                  Puis-je faire vérifier mon appareil par un autre réparateur après votre intervention ?
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={detailsSx}>
                <Typography sx={textSx}>
                  {`Vous êtes libre de faire vérifier votre appareil où vous le souhaitez. Toutefois, si l'appareil est ouvert ou modifié par un tiers après notre intervention, nous ne serons plus en mesure d'évaluer l'état des composants tels que nous les avons laissés.\n\nDans ce cas, toute réclamation sous garantie deviendra difficile à traiter, car nous ne pouvons pas être tenus responsables de modifications effectuées en dehors de notre atelier. C'est une contrainte technique, pas une clause restrictive.`}
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion disableGutters elevation={0} sx={accordionSx}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#0066cc" }} />}
                sx={summarySx}
              >
                <Typography sx={{ fontWeight: 600, fontSize: "1rem", color: "#1d1d1f" }}>
                  En cas de désaccord, vers qui puis-je me tourner ?
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={detailsSx}>
                <Typography sx={textSx}>
                  {`En cas de litige non résolu directement avec l'atelier, vous avez la possibilité de faire appel à un médiateur de la consommation, gratuitement et sans procédure judiciaire.\n\nNous sommes affiliés au CM2C (Centre de Médiation de la Consommation de Conciliateurs de Justice) :\n• Adresse : 14 rue Saint Jean, 75017 Paris\n• Site : www.cm2c.net\n\nNotre objectif est de résoudre tout différend directement et rapidement. Si vous avez une réclamation, contactez-nous en premier lieu par e-mail à contact@kimreparation.fr.`}
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion disableGutters elevation={0} sx={accordionSx}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#0066cc" }} />}
                sx={summarySx}
              >
                <Typography sx={{ fontWeight: 600, fontSize: "1rem", color: "#1d1d1f" }}>
                  Collecte de données techniques & sécurité du service
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={detailsSx}>
                <Typography sx={textSx}>
                  {`Dans le cadre du bon fonctionnement de notre service de diagnostic en ligne, certaines données techniques sont collectées automatiquement lors de la soumission d'une demande (adresse IP, horodatage, type de navigateur).\n\nCes données sont utilisées exclusivement à des fins de sécurité : prévention du spam, détection d'envois abusifs et protection de l'intégrité du service. Elles ne sont pas utilisées à des fins commerciales ou publicitaires, et sont conservées conformément au Règlement Général sur la Protection des Données (RGPD).\n\nEn cas d'utilisation manifestement abusive du formulaire, l'accès au service peut être temporairement restreint. Pour toute question relative à vos données, contactez-nous à contact@kimreparation.fr.`}
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Stack>
        </Box>

        {/* Mentions Légales */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            pt: 10,
            borderTop: "1px solid #f2f2f2",
            gap: { xs: 8, md: 0 },
          }}
        >
          {/* ÉDITEUR */}
          <Box sx={{ pr: { md: 8 }, borderRight: { md: "1px solid #f2f2f2" } }}>
            <Typography sx={labelStyle}>ÉDITEUR</Typography>
            <Stack spacing={2}>
              <Stack
                direction="row"
                justifyContent="space-between"
                sx={{ borderBottom: "1px solid #f5f5f7", pb: 1.5 }}
              >
                <Typography sx={itemLabelStyle}>Structure</Typography>
                <Typography sx={itemValueStyle}>KIM REPARATION (EI)</Typography>
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
                <Typography sx={itemValueStyle}>00 00 00 00 00 00 00</Typography>
              </Stack>
              <Stack
                direction="row"
                justifyContent="space-between"
                sx={{ borderBottom: "1px solid #f5f5f7", pb: 1.5 }}
              >
                <Typography sx={itemLabelStyle}>Siège social</Typography>
                <Typography sx={{ ...itemValueStyle, textAlign: "right" }}>
                  <br />
                </Typography>
              </Stack>
              <Stack
                direction="row"
                justifyContent="space-between"
                sx={{ borderBottom: "1px solid #f5f5f7", pb: 1.5 }}
              >
                <Typography sx={itemLabelStyle}>Contact</Typography>
                <Box sx={{ textAlign: "right" }}>
                  <Typography sx={itemValueStyle}></Typography>
                  <Typography sx={itemValueStyle}></Typography>
                </Box>
              </Stack>
            </Stack>
          </Box>

          {/* SYSTEM */}
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
                  <Typography sx={itemValueStyle}>OVHcloud (OVH SAS)</Typography>
                  <Typography sx={{ fontSize: "0.7rem", color: "#c1c1c1" }}>
                    Roubaix, France
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
                  <Typography sx={itemValueStyle}>Vercel Inc.</Typography>
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