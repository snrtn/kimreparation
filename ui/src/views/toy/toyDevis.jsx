import React, { useState, useRef } from "react";
import {
  Box,
  Container,
  Typography,
  Stack,
  Checkbox,
  FormControlLabel,
  TextField,
  Button,
  Paper,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Dialog,
  DialogContent,
  DialogActions,
  AppBar,
  Toolbar,
} from "@mui/material";
// 🔥 서명 라이브러리 임포트 (npm install react-signature-canvas 필요)
import SignatureCanvas from "react-signature-canvas";

const ToyDevis = () => {
  const todayDate = new Date().toLocaleDateString("fr-FR");
  const sigCanvas = useRef({});

  // 상태 추가
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [hasSignature, setHasSignature] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    city: "",
    toyName: "",
    contactType: "phone",
    phoneValue: "",
    emailUser: "",
    emailDomain: "@gmail.com",
    customDomain: "",
  });

  const [agreements, setAgreements] = useState({
    voisin: false,
    priority: false,
    delai: false,
    limitation: false,
    aspect: false,
    abandon: false,
    engagement: false,
  });

  const allDefenseLines = [
    {
      id: "voisin",
      isCritical: true,
      text: "Résidence : Ce service est réservé aux habitants des communes citées (Beaumetz-lès-Loges, Basseux, Rivière, Berneville, Simencourt, Bailleulval, Warlus, Monchiet). Une simple vérification de votre adresse (facture/ID) sera effectuée lors du dépôt. Pas de photocopie, juste un coup d'œil pour confirmer que nous sommes bien voisins !",
    },
    {
      id: "pilote",
      isCritical: false,
      text: "Initiative personnelle : Ce programme pilote est une démarche privée et bénévole menée au sein de mon atelier Kim Reparation, visant à tester la faisabilité technique du projet.",
    },
    {
      id: "priority",
      isCritical: true,
      text: "Priorité : Pour garantir la pérennité de mon atelier, les prestations professionnelles (payantes) sont traitées en priorité immédiate. Ce service bénévole peut être suspendu à tout moment selon ma charge de travail.",
    },
    {
      id: "rdv",
      isCritical: false,
      text: "Rendez-vous : S'agissant d'un atelier privé, aucun objet ne sera accepté sans demande de prise en charge préalable et confirmation écrite de ma part.",
    },
    {
      id: "benevole",
      isCritical: false,
      text: "Pièces : Je fonctionne uniquement sur la base de la réparation ou du recyclage de composants existants. Aucun achat de pièces neuves n'est effectué par l'atelier.",
    },
    {
      id: "delai",
      isCritical: true,
      text: "Délais : La gratuité impliquant une gestion sur mon temps libre personnel, aucun engagement de date de fin ou de durée de restitution ne peut être donné.",
    },
    {
      id: "ordre",
      isCritical: false,
      text: "Traitement : Les jouets sont traités selon leur ordre d'arrivée, uniquement après traitement complet de mes dossiers professionnels prioritaires.",
    },
    {
      id: "refus",
      isCritical: false,
      text: "Sécurité : Pour des raisons de sécurité technique, je n'installe pas de pièces fournies par le client (à l'exception des Nintendo switch joycon).",
    },
    {
      id: "mcu",
      isCritical: false,
      text: "Diagnostic MCU : En cas de processeur hors service, je vous proposerai de faire don du jouet pour aider à la réparation d'autres objets.",
    },
    {
      id: "recup",
      isCritical: false,
      text: "Recyclage : Les composants fonctionnels sont récupérés par mes soins pour redonner vie à d'autres jouets (Audio, CMS, etc.).",
    },
    {
      id: "aspect",
      isCritical: true,
      text: "Esthétique : J'apporte le plus grand soin à vos objets ; toutefois, des traces d'ouverture ou légères rayures peuvent apparaître lors de l'intervention technique.",
    },
    {
      id: "coque",
      isCritical: false,
      text: "Restitution : Sur simple demande, la coque ou l'enveloppe vide peut vous être restituée si le jouet n'est pas réparable.",
    },
    {
      id: "limitation",
      isCritical: true,
      text: "Responsabilité : S'agissant d'un service gracieux, je ne peux être tenu responsable en cas d'impossibilité de réparation ou d'arrêt définitif de l'appareil.",
    },
    {
      id: "engagement",
      isCritical: true,
      text: "Zéro Dédommagement : Aucun dédommagement ou remise en état d'origine ne pourra être exigé. Le dépôt vaut acceptation de ces conditions privées.",
    },
    {
      id: "abandon",
      isCritical: true,
      text: "Abandon : Tout objet non récupéré dans les 30 jours suivant ma notification sera considéré comme un don à l'atelier pour pièces de rechange.",
    },
  ];

  const allowedCities = [
    "Beaumetz-lès-Loges",
    "Basseux",
    "Rivière",
    "Berneville",
    "Simencourt",
    "Bailleulval",
    "Warlus",
    "Monchiet",
  ];

  const isCustomDomain = formData.emailDomain === "custom";
  const finalContact =
    formData.contactType === "phone"
      ? formData.phoneValue
      : `${formData.emailUser}${isCustomDomain ? "@" + formData.customDomain : formData.emailDomain}`;

  const isContactValid =
    formData.contactType === "phone"
      ? formData.phoneValue.trim() !== ""
      : formData.emailUser.trim() !== "" &&
        (!isCustomDomain || formData.customDomain.trim() !== "");

  const isComplete =
    Object.values(agreements).every(Boolean) &&
    formData.name.trim() !== "" &&
    formData.city !== "" &&
    formData.toyName.trim() !== "" &&
    isContactValid;

  const toggleAgreement = (id) =>
    setAgreements((prev) => ({ ...prev, [id]: !prev[id] }));

  const handleOpenPreview = () => {
    setHasSignature(false);
    setIsPreviewOpen(true);
  };

  const clearSignature = () => {
    sigCanvas.current.clear();
    setHasSignature(false);
  };

  const handleSendEmail = () => {
    const signatureImage = sigCanvas.current
      .getTrimmedCanvas()
      .toDataURL("image/png");
    console.log("서명 데이터:", signatureImage);
    console.log("폼 데이터:", formData);
    alert("Prêt pour l'envoi d'e-mail ! (Logique à ajouter)");
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ py: { xs: 16, md: 20 } }}>
        <Typography
          sx={{ fontSize: "0.9rem", fontWeight: 600, color: "#0066cc", mb: 1 }}
        >
          Kim Reparation
        </Typography>
        <Typography
          sx={{ fontWeight: 800, fontSize: "2.5rem", color: "#1d1d1f", mb: 2 }}
        >
          Bon de Prise en Charge
        </Typography>

        <Paper sx={{ p: 3, bgcolor: "#f5f5f7", borderRadius: "15px", mb: 1 }}>
          <Typography sx={{ fontWeight: 700, mb: 1, color: "#1d1d1f" }}>
            À lire avant de continuer :
          </Typography>
          <Typography
            sx={{ fontSize: "0.9rem", color: "#424245", lineHeight: 1.6 }}
          >
            Bienvenue chez Kim Reparation. Ce service de réparation de jouets
            est une <strong>initiative personnelle et bénévole</strong> que
            j'offre à mes voisins. Pour que ce projet puisse durer sans impacter
            mon activité professionnelle, il repose sur un contrat de confiance
            mutuelle.
            <br />
            <br />
            En générant ce bon, vous acceptez que je travaille sur votre objet
            pendant mon temps libre, sans garantie de résultat, mais avec toute
            ma passion technique.
          </Typography>
        </Paper>

        {/* --- 폼 영역 (기존과 동일) --- */}
        <Box sx={{ py: 4 }}>
          <Stack spacing={3} sx={{ mt: 2 }}>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <TextField
                variant="standard"
                label="Votre Nom et Prénom"
                fullWidth
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                InputLabelProps={{ shrink: true }}
              />
              <FormControl variant="standard" fullWidth>
                <InputLabel>Votre Commune</InputLabel>
                <Select
                  value={formData.city}
                  onChange={(e) =>
                    setFormData({ ...formData, city: e.target.value })
                  }
                >
                  {allowedCities.map((city) => (
                    <MenuItem key={city} value={city}>
                      {city}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Stack>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              alignItems="flex-end"
            >
              <FormControl variant="standard" sx={{ minWidth: 150 }}>
                <InputLabel>Moyen de contact</InputLabel>
                <Select
                  value={formData.contactType}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      contactType: e.target.value,
                      phoneValue: "",
                      emailUser: "",
                    })
                  }
                >
                  <MenuItem value="phone">Téléphone</MenuItem>
                  <MenuItem value="email">E-mail</MenuItem>
                </Select>
              </FormControl>
              {formData.contactType === "phone" ? (
                <TextField
                  variant="standard"
                  label="Numéro de téléphone"
                  fullWidth
                  placeholder="06 00 00 00 00"
                  value={formData.phoneValue}
                  onChange={(e) => {
                    let val = e.target.value.replace(/\D/g, "");
                    if (val.length > 0 && val[0] !== "0") val = "0" + val;
                    if (val.length > 10) val = val.substring(0, 10);
                    let formatted = val.match(/.{1,2}/g)?.join(" ") || "";
                    setFormData({ ...formData, phoneValue: formatted });
                  }}
                />
              ) : (
                <Stack
                  direction="row"
                  sx={{ width: "100%" }}
                  alignItems="flex-end"
                  spacing={1}
                >
                  <TextField
                    variant="standard"
                    label="E-mail"
                    sx={{ flex: 1 }}
                    placeholder="jean.dupont"
                    value={formData.emailUser}
                    onChange={(e) =>
                      setFormData({ ...formData, emailUser: e.target.value })
                    }
                  />
                  <FormControl variant="standard" sx={{ minWidth: 140 }}>
                    <Select
                      value={formData.emailDomain}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          emailDomain: e.target.value,
                        })
                      }
                    >
                      <MenuItem value="@gmail.com">@gmail.com</MenuItem>
                      <MenuItem value="@orange.fr">@orange.fr</MenuItem>
                      <MenuItem value="@wanadoo.fr">@wanadoo.fr</MenuItem>
                      <MenuItem value="@free.fr">@free.fr</MenuItem>
                      <MenuItem value="@sfr.fr">@sfr.fr</MenuItem>
                      <MenuItem value="@outlook.com">@outlook.com</MenuItem>
                      <MenuItem value="@yahoo.fr">@yahoo.fr</MenuItem>
                      <MenuItem value="@icloud.com">@icloud.com</MenuItem>
                      <MenuItem value="custom">Autre</MenuItem>
                    </Select>
                  </FormControl>
                  {formData.emailDomain === "custom" && (
                    <TextField
                      variant="standard"
                      label="Domaine"
                      placeholder="exemple.com"
                      sx={{ width: 120 }}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          customDomain: e.target.value,
                        })
                      }
                    />
                  )}
                </Stack>
              )}
            </Stack>
            <TextField
              variant="standard"
              label="Désignation du Jouet"
              fullWidth
              onChange={(e) =>
                setFormData({ ...formData, toyName: e.target.value })
              }
              InputLabelProps={{ shrink: true }}
            />
          </Stack>
        </Box>

        <Box sx={{ py: 4 }}>
          <Typography
            sx={{
              fontSize: "0.75rem",
              fontWeight: 800,
              color: "#d32f2f",
              mb: 3,
            }}
          >
            CLIQUEZ SUR CHAQUE CARTE POUR ACCEPTER LES CONDITIONS DE BÉNÉVOLAT :
          </Typography>
          <Stack spacing={1.5} sx={{ mb: 6 }}>
            {allDefenseLines
              .filter((l) => l.isCritical)
              .map((item) => (
                <Paper
                  key={item.id}
                  variant="outlined"
                  onClick={() => toggleAgreement(item.id)}
                  sx={{
                    p: 2,
                    borderRadius: "12px",
                    cursor: "pointer",
                    borderColor: agreements[item.id] ? "#0066cc" : "#e5e5e7",
                    bgcolor: agreements[item.id] ? "#f5faff" : "transparent",
                    transition: "0.2s",
                    display: "flex",
                    alignItems: "center",
                    "&:hover": { borderColor: "#0066cc" },
                  }}
                >
                  <Checkbox
                    size="small"
                    checked={agreements[item.id]}
                    readOnly
                  />
                  <Typography
                    sx={{
                      fontSize: "0.85rem",
                      fontWeight: 600,
                      ml: 1,
                      color: agreements[item.id] ? "#003366" : "#424245",
                    }}
                  >
                    {item.text}
                  </Typography>
                </Paper>
              ))}
          </Stack>
          <Box
            sx={{
              p: 2,
              bgcolor: "#f9f9fb",
              borderRadius: "10px",
              border: "1px solid #e5e5e7",
              mb: 4,
            }}
          >
            {allDefenseLines
              .filter((l) => !l.isCritical)
              .map((item) => (
                <Typography
                  key={item.id}
                  sx={{
                    fontSize: "0.8rem",
                    color: "#636366",
                    mb: 1.5,
                    lineHeight: 1.4,
                  }}
                >
                  • {item.text}
                </Typography>
              ))}
          </Box>
          <Button
            fullWidth
            variant="contained"
            disabled={!isComplete}
            onClick={handleOpenPreview}
            sx={{
              py: 2,
              borderRadius: "12px",
              bgcolor: "#1d1d1f",
              fontWeight: 800,
            }}
          >
            {isComplete
              ? "VOIR LE CONTRAT ET SIGNER"
              : "VEUILLEZ VALIDER LES CLAUSES ET VOS INFOS"}
          </Button>
        </Box>
      </Box>

      {/* ==========================================
          🔥 모달: 계약서 미리보기 및 전자 서명 패드
      ========================================== */}
      <Dialog
        fullScreen
        open={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
        PaperProps={{ sx: { bgcolor: "#f5f5f7" } }}
      >
        <AppBar sx={{ position: "relative", bgcolor: "#1d1d1f" }}>
          <Toolbar>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Vérification et Signature
            </Typography>
            <Button color="inherit" onClick={() => setIsPreviewOpen(false)}>
              Fermer
            </Button>
          </Toolbar>
        </AppBar>

        <DialogContent
          sx={{ display: "flex", justifyContent: "center", py: 5 }}
        >
          <Paper
            sx={{
              p: { xs: 3, md: 6 },
              width: "100%",
              maxWidth: "800px",
              bgcolor: "#fff",
              boxShadow: 3,
            }}
          >
            {/* 🔥 제목 및 줄바꿈 처리 영역 */}
            <Box
              sx={{
                borderBottom: "3px solid #000",
                pb: 2,
                mb: 3,
                textAlign: "center",
              }}
            >
              <Typography sx={{ fontWeight: 900, fontSize: "1.4rem", mb: 2 }}>
                CONTRAT DE PRISE EN CHARGE
                <br />
                KIM REPARATION
              </Typography>

              <Stack spacing={0.5} sx={{ color: "#424245" }}>
                <Typography sx={{ fontSize: "0.9rem", fontWeight: 700 }}>
                  Service Bénévole
                </Typography>
                <Typography sx={{ fontSize: "0.85rem" }}>
                  Propriétaire : {formData.name}
                </Typography>
                <Typography sx={{ fontSize: "0.85rem" }}>
                  Contact : {finalContact}
                </Typography>
                <Typography sx={{ fontSize: "0.85rem" }}>
                  Commune : {formData.city}
                </Typography>
              </Stack>
            </Box>

            <Box
              sx={{ display: "flex", flexDirection: "column", gap: 1.5, mb: 4 }}
            >
              {allDefenseLines.map((line) => (
                <Typography
                  key={line.id}
                  sx={{ fontSize: "0.83rem", lineHeight: 1.3 }}
                >
                  • {line.text}
                </Typography>
              ))}
            </Box>

            <Box
              sx={{
                p: 2,
                border: "2px solid #000",
                textAlign: "center",
                bgcolor: "#fafafa",
                mb: 4,
              }}
            >
              <Typography sx={{ fontSize: "0.8rem", fontWeight: 900 }}>
                "Je soussigné(e) {formData.name}, accepte que mon objet (
                {formData.toyName}) soit traité bénévolement par Kim Reparation.
                Je renonce à tout recours en cas d'impossibilité de réparation
                ou de dégradation."
              </Typography>
            </Box>

            <Stack
              direction={{ xs: "column", md: "row" }}
              justifyContent="space-between"
              spacing={5}
              sx={{ mt: 4 }}
            >
              <Box sx={{ flex: 1 }}>
                <Typography sx={{ fontWeight: 800, fontSize: "0.9rem", mb: 1 }}>
                  Lieu et Date :
                </Typography>
                <Typography variant="body1">
                  Fait à {formData.city}, <br /> le {todayDate}
                </Typography>
              </Box>

              <Box sx={{ flex: 1 }}>
                <Typography sx={{ fontWeight: 800, fontSize: "0.9rem", mb: 1 }}>
                  Signature du Client :
                </Typography>
                <Typography
                  sx={{ fontSize: "0.7rem", color: "#86868b", mb: 1 }}
                >
                  (Veuillez signer dans le cadre ci-dessous)
                </Typography>

                <Box
                  sx={{
                    border: "2px dashed #0066cc",
                    borderRadius: "8px",
                    bgcolor: "#f0f8ff",
                  }}
                >
                  <SignatureCanvas
                    ref={sigCanvas}
                    canvasProps={{
                      width: 300,
                      height: 150,
                      className: "sigCanvas",
                    }}
                    onEnd={() => setHasSignature(true)}
                  />
                </Box>
                <Button
                  size="small"
                  onClick={clearSignature}
                  sx={{ mt: 1, color: "#d32f2f" }}
                >
                  Effacer et recommencer
                </Button>
              </Box>
            </Stack>
          </Paper>
        </DialogContent>

        <DialogActions
          sx={{
            p: 3,
            justifyContent: "center",
            bgcolor: "#fff",
            borderTop: "1px solid #eee",
            gap: 2,
            flexWrap: "wrap",
          }}
        >
          <Button
            variant="outlined"
            size="large"
            onClick={() => setIsPreviewOpen(false)}
            sx={{
              px: 4,
              py: 1.5,
              borderRadius: "30px",
              fontWeight: 700,
              color: "#424245",
              borderColor: "#d2d2d7",
            }}
          >
            RETOUR
          </Button>

          <Button
            variant="contained"
            size="large"
            disabled={!hasSignature}
            onClick={handleSendEmail}
            sx={{
              bgcolor: "#0066cc",
              px: 6,
              py: 1.5,
              fontWeight: 800,
              borderRadius: "30px",
              "&.Mui-disabled": { bgcolor: "#e5e5e7", color: "#a1a1a6" },
            }}
          >
            {hasSignature ? "ENVOYER LA DEMANDE" : "VEUILLEZ SIGNER D'ABORD"}
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default ToyDevis;
