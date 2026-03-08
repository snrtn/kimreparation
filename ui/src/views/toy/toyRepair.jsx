import React from "react";
import { Box, Container, Typography, Stack } from "@mui/material";

const ToyRepair = () => {
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
          Service Gratieux pour Objets de Loisirs
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
          Jouets Electroniques et Gadgets
        </Typography>

        {/* --- 섹션 1: 제조 공정의 현실 --- */}
        <Box sx={{ py: 6, borderTop: "1px solid #e5e5e7" }}>
          <Typography sx={labelStyle}>
            LA CONCEPTION DES PRODUITS DE GRANDE CONSOMMATION
          </Typography>
          <Typography
            sx={{ color: "#424245", lineHeight: 1.8, fontSize: "1rem", mb: 4 }}
          >
            Il convient de preciser que la majorite des articles ludiques dont
            le prix de vente est inferieur a soixante euros sont fabriques selon
            des methodes de production intensive. Afin de proposer des tarifs
            attractifs au grand public, les constructeurs utilisent frequemment
            des procedes d'assemblage definitifs, tels que le collage ou le
            clipsage mecanique, plutot que des fixations par vis. Cette
            particularite structurelle rend toute ouverture de l'objet complexe
            et peut laisser des marques visuelles sur le plastique lors d'une
            tentative de reparation.
          </Typography>
          <Typography
            sx={{ color: "#86868b", lineHeight: 1.8, fontSize: "0.95rem" }}
          >
            Le role de <strong>Kim Reparation</strong> est d'analyser si une
            remise en etat est techniquement realisable compte tenu de ces
            contraintes de fabrication. Les circuits electroniques de ces
            produits etant generalement tres simplifies et fragiles, nous
            procedons avec la plus grande prudence pour tenter de restaurer les
            fonctions essentielles de l'objet sans endommager sa structure
            globale.
          </Typography>
        </Box>

        {/* --- 섹션 2: 습기 및 액체 노출 안내 --- */}
        <Box sx={{ py: 6, borderTop: "1px solid #e5e5e7" }}>
          <Typography sx={labelStyle}>
            VULNERABILITE FACE AUX LIQUIDES
          </Typography>
          <Typography
            sx={{ color: "#424245", lineHeight: 1.8, fontSize: "1rem", mb: 4 }}
          >
            A l'exception des modeles beneficiant d'une certification
            specifique, la plupart des jouets electroniques ne sont pas equipes
            de protections contre l'humidite. L'absence de joints hermetiques
            permet aux liquides de s'infiltrer rapidement jusqu'aux composants
            internes, ce qui peut entrainer une oxydation prematuree des
            contacts metalliques et des circuits imprimes.
          </Typography>
          <Typography
            sx={{ color: "#86868b", lineHeight: 1.8, fontSize: "0.95rem" }}
          >
            Une simple exposition a un environnement humide suffit parfois a
            alterer le bon fonctionnement de l'appareil de maniere definitive.
            Nous recommandons de conserver ces objets dans un endroit
            parfaitement sec et de ne jamais les immerger, car les dommages lies
            aux liquides sont souvent irreversibles sur cette gamme de produits.
          </Typography>
        </Box>

        {/* --- 섹션 3: 자가 점검 단계 --- */}
        <Box sx={{ py: 6, borderTop: "1px solid #e5e5e7" }}>
          <Typography sx={labelStyle}>
            ETAPES DE VERIFICATION CONSEILLEES
          </Typography>
          <Typography
            sx={{ color: "#424245", lineHeight: 1.8, fontSize: "1rem", mb: 4 }}
          >
            Avant d'envisager une intervention technique, nous vous suggerons de
            proceder a ces quelques verifications de base qui ne necessitent
            aucun demontage de l'appareil.
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
                1. Controle de l'etat des piles
              </Typography>
              <Typography
                sx={{ fontSize: "0.95rem", color: "#424245", lineHeight: 1.7 }}
              >
                Une alimentation faible est la cause principale de nombreux
                dysfonctionnements. Veuillez essayer d'installer des piles
                neuves de qualite superieure. Examinez egalement les ressorts du
                compartiment a piles : s'ils presentent des depots blanchatres,
                cela peut indiquer une fuite d'acide ayant corrompu le passage
                du courant electrique.
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
                2. Observation visuelle des parties mobiles
              </Typography>
              <Typography
                sx={{ fontSize: "0.95rem", color: "#424245", lineHeight: 1.7 }}
              >
                Il arrive que des poussieres ou de petits elements externes
                bloquent les boutons ou les engrenages. Un examen visuel
                attentif permet parfois de deceler un obstacle mecanique simple.
                Si un bouton semble bloque, vous pouvez tenter de le manipuler
                delicatement pour verifier s'il retrouve son mouvement initial.
              </Typography>
            </Box>
          </Stack>
        </Box>

        {/* --- ✅ 섹션 4: 고가/수집용 제품에 대한 권고 (신설) --- */}
        <Box sx={{ py: 6, borderTop: "1px solid #e5e5e7" }}>
          <Typography sx={labelStyle}>
            RECOMMANDATION POUR LES OBJETS DE VALEUR
          </Typography>
          <Typography
            sx={{ color: "#424245", lineHeight: 1.8, fontSize: "1rem", mb: 4 }}
          >
            Il est essentiel de prendre en compte la nature de votre objet avant
            de nous le confier. Si votre jouet possede une valeur marchande
            elevee, s'il s'agit d'une piece de collection rare ou d'un objet de
            prestige, une intervention de notre part n'est pas recommandee.
          </Typography>
          <Typography
            sx={{ color: "#86868b", lineHeight: 1.8, fontSize: "0.95rem" }}
          >
            En effet, les techniques d'ouverture necessaires pour acceder aux
            composants internes peuvent laisser des traces irreversibles qui
            pourraient diminuer la valeur financiere ou l'integrite de
            collection de votre bien. Pour ces cas particuliers, nous vous
            conseillons vivement de solliciter les services d'un atelier
            specialise dans la restauration d'objets de valeur afin de garantir
            la preservation de son etat d'origine et de sa cote sur le marche.
          </Typography>
        </Box>

        {/* --- 섹션 5: 법적 고지 및 책임 한계 --- */}
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
            CADRE DU SERVICE ET ABSENCE DE GARANTIE
          </Typography>
          <Stack spacing={3}>
            <Typography
              sx={{ fontSize: "0.85rem", color: "#424245", lineHeight: 1.6 }}
            >
              <strong>Service Gratieux :</strong> L'intervention sur ces objets
              est proposee par Kim Reparation a titre de service gratieux et de
              courtoisie, dans le but de lutter contre le gaspillage et de
              prolonger la vie des jouets. Aucune remuneration n'est demandee
              pour cette prestation de main-d'oeuvre.
            </Typography>
            <Typography
              sx={{ fontSize: "0.85rem", color: "#424245", lineHeight: 1.6 }}
            >
              <strong>Absence de Garantie :</strong> En raison de la nature
              benevole et non remuneree de ce service, Kim Reparation ne peut
              fournir aucune garantie contractuelle ou legale de resultat ou de
              durabilite. L'objet est traite en l'etat, et notre responsabilite
              ne pourra etre engagee en cas de panne ulterieure, de degradation
              de l'aspect esthetique liee a l'ouverture, ou de perte totale de
              fonction de l'appareil suite a l'intervention.
            </Typography>
          </Stack>
        </Box>
      </Box>
    </Container>
  );
};

export default ToyRepair;
