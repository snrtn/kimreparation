import React from "react";
import { Box, Container, Typography, Stack } from "@mui/material";

const ToyJoyCon = () => {
  const labelStyle = {
    fontSize: "0.65rem",
    fontWeight: 700,
    color: "#86868b",
    letterSpacing: "0.1em",
    mb: 3,
    textTransform: "uppercase",
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ py: { xs: 16, xl: 20 } }}>
        <Typography
          sx={{ fontSize: "0.9rem", fontWeight: 600, color: "#0066cc", mb: 1 }}
        >
          Réalité Technique
        </Typography>
        <Typography
          sx={{
            fontWeight: 800,
            fontSize: { xs: "2rem", md: "2.5rem" },
            color: "#1d1d1f",
            mb: 6,
            letterSpacing: "-0.04em",
          }}
        >
          Nintendo Switch Joy-Con
        </Typography>

        {/* --- 섹션 1: 조이콘 제조 현실 --- */}
        <Box sx={{ py: 6, borderTop: "1px solid #e5e5e7" }}>
          <Typography sx={labelStyle}>
            LA RÉALITÉ DE LA CONCEPTION INDUSTRIELLE
          </Typography>

          <Typography
            sx={{ color: "#424245", lineHeight: 1.8, fontSize: "1rem", mb: 2 }}
          >
            Il est important de comprendre que les manettes Nintendo switch
            joycon sont des objets de haute technologie produits à très grande
            échelle. Pour répondre à des impératifs de compacité et de coûts de
            fabrication, le mécanisme interne du joystick repose sur un système
            de balais métalliques qui frottent contre des pistes de carbone.
            Cette friction constante, inhérente à leur fonctionnement, finit
            naturellement par générer des micro-poussières conductrices ou par
            user la piste elle-même.{" "}
            <strong>
              Ce phénomène d'usure, communément appelé "Drift", est aujourd'hui
              un fait technologique largement documenté qui a même fait l'objet
              de recours collectifs (class actions) à l'international.
            </strong>
          </Typography>

          <Typography
            sx={{ color: "#424245", lineHeight: 1.8, fontSize: "1rem", mb: 4 }}
          >
            Une autre fragilité souvent constatée concerne les loquets de
            verrouillage (les attaches fixant la manette à l'écran). Conçus
            d'origine en plastique, ils peuvent s'user avec le temps et les
            glissements répétés, provoquant parfois le détachement des manettes
            en pleine utilisation.{" "}
            <strong>
              Face à ces limites matérielles, de nombreux utilisateurs
              passionnés en viennent même à chercher des pièces de modification
              "custom" (comme des loquets en métal ou des joysticks magnétiques)
              pour pallier cette usure.
            </strong>
          </Typography>

          <Typography
            sx={{ color: "#86868b", lineHeight: 1.8, fontSize: "0.95rem" }}
          >
            Cette usure mécanique est la cause physique principale des
            dysfonctionnements rencontrés. Chez <strong>Kim Réparation</strong>,
            nous proposons une solution fiable de remise en état en remplaçant
            le module mécanique usé par un composant neuf de qualité, afin de
            prolonger durablement l'usage de votre manette actuelle.
          </Typography>
        </Box>

        {/* --- 섹션 2: 부품 비용에 대한 안내 (추가된 부분) --- */}
        <Box sx={{ py: 6, borderTop: "1px solid #e5e5e7" }}>
          <Typography sx={labelStyle}>
            MODALITES CONCERNANT LES COMPOSANTS
          </Typography>
          <Typography
            sx={{ color: "#424245", lineHeight: 1.8, fontSize: "1rem", mb: 4 }}
          >
            Bien que nous nous efforcions de proposer un service de maintenance
            accessible, le remplacement physique du mecanisme de joystick
            necessite l'utilisation d'une piece detachee neuve et specifique.
            Par consequent, nous tenons a informer notre clientele que si la
            main-d'oeuvre peut etre offerte dans le cadre de notre service
            gracieux, **le cout du composant de remplacement reste a la charge
            du proprietaire de l'appareil**.
          </Typography>
          <Typography
            sx={{ color: "#86868b", lineHeight: 1.8, fontSize: "0.95rem" }}
          >
            Ce montant correspond strictement a l'achat de la piece technique
            necessaire a la reparation. Nous vous communiquerons le tarif exact
            du composant avant toute intervention afin que vous puissiez donner
            votre accord en toute transparence.
          </Typography>
        </Box>

        {/* --- 섹션 3: 안전한 소프트웨어 점검 --- */}
        <Box sx={{ py: 6, borderTop: "1px solid #e5e5e7" }}>
          <Typography sx={labelStyle}>
            VERIFICATIONS LOGICIELLES CONSEILLEES
          </Typography>
          <Typography
            sx={{ color: "#424245", lineHeight: 1.8, fontSize: "1rem", mb: 4 }}
          >
            Avant d'envisager le remplacement payant d'un composant, nous vous
            suggerons de proceder a ces quelques verifications simples depuis le
            menu de votre console.
          </Typography>

          <Stack spacing={5}>
            <Box>
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: "1.1rem",
                  mb: 1.5,
                  color: "#1d1d1f",
                }}
              >
                1. Procedure de recalibrage des sticks
              </Typography>
              <Typography
                sx={{ fontSize: "0.95rem", color: "#424245", lineHeight: 1.7 }}
              >
                Dans les parametres de la console, il existe une option
                permettant de recalibrer les sticks analogiques. Cette
                manipulation peut parfois resoudre des decalages legers lies au
                logiciel interne et eviter ainsi un remplacement de piece
                inutile.
              </Typography>
            </Box>

            <Box>
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: "1.1rem",
                  mb: 1.5,
                  color: "#1d1d1f",
                }}
              >
                2. Mise a jour du micrologiciel
              </Typography>
              <Typography
                sx={{ fontSize: "0.95rem", color: "#424245", lineHeight: 1.7 }}
              >
                Assurez-vous que vos manettes sont a jour en verifiant les mises
                a jour disponibles dans le menu de gestion des manettes.
                Parfois, un correctif logiciel suffit a ameliorer la precision.
              </Typography>
            </Box>
          </Stack>
        </Box>

        {/* --- 섹션 4: 법적 고지 사항 --- */}
        <Box
          sx={{
            py: 6,
            borderTop: "1px solid #e5e5e7",
            bgcolor: "#f9f9fb",
            p: 4,
            borderRadius: "20px",
          }}
        >
          <Typography sx={labelStyle}>
            INFORMATIONS LEGALES ET RESPONSABILITES
          </Typography>
          <Stack spacing={3}>
            <Typography
              sx={{ fontSize: "0.85rem", color: "#424245", lineHeight: 1.6 }}
            >
              <strong>Independance :</strong> Kim Reparation est une structure
              de service totalement independante. Nous n'avons aucun lien
              d'affiliation avec la societe Nintendo. L'utilisation du nom
              Nintendo Switch Joy-Con est faite exclusivement a titre
              informatif.
            </Typography>
            <Typography
              sx={{ fontSize: "0.85rem", color: "#424245", lineHeight: 1.6 }}
            >
              <strong>Frais de Pieces :</strong> Le client reconnait etre
              informe que seul le service de main-d'oeuvre est gratieux. Tout
              composant materiel installe dans la manette fera l'objet d'une
              facturation prealablement acceptee par le client.
            </Typography>
            <Typography
              sx={{ fontSize: "0.85rem", color: "#424245", lineHeight: 1.6 }}
            >
              <strong>Garantie Constructeur :</strong> Toute ouverture de votre
              manette par une tierce partie non agreee, telle que Kim
              Reparation, peut entrainer l'annulation de la garantie commerciale
              du fabricant.
            </Typography>
          </Stack>
        </Box>
      </Box>
    </Container>
  );
};

export default ToyJoyCon;
