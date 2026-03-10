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
import SignatureCanvas from "react-signature-canvas";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import HomeIcon from "@mui/icons-material/Home";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const ToyDevis = () => {
  const todayDate = new Date().toLocaleDateString("fr-FR");
  const sigCanvas = useRef(null);
  const pdfRef = useRef(null);

  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [hasSignature, setHasSignature] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [finalConfirm, setFinalConfirm] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    city: "",
    toyName: "",
    isJoycon: false, // 👈 이거 추가
    contactType: "phone",
    phoneValue: "",
    emailUser: "",
    emailDomain: "@gmail.com",
    customDomain: "",
  });

  const [agreements, setAgreements] = useState({
    fraisPieces: false,
    voisin: false,
    priority: false,
    delai: false,
    limitation: false,
    aspect: false,
    abandon: false,
    engagement: false,
  });

  const joyconText =
    "Frais de Pieces : Le client reconnait etre informe que seul le service de main-d'oeuvre est gratieux. Tout composant materiel installe dans la manette fera l'objet d'une facturation prealablement acceptee par le client.";

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
    Object.keys(agreements).every((k) =>
      k === "fraisPieces" ? !formData.isJoycon || agreements[k] : agreements[k],
    ) &&
    formData.name.trim() !== "" &&
    formData.city !== "" &&
    formData.toyName.trim() !== "" &&
    isContactValid;

  const toggleAgreement = (id) =>
    setAgreements((prev) => ({ ...prev, [id]: !prev[id] }));

  const handleOpenPreview = () => {
    setHasSignature(false);
    setFinalConfirm(false);
    setIsPreviewOpen(true);
  };

  const clearSignature = () => {
    sigCanvas.current.clear();
    setHasSignature(false);
  };

  const handleDownloadPDF = async () => {
    const element = pdfRef.current;
    if (!element) return;

    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      backgroundColor: "#ffffff",
      scrollY: 0,
      windowHeight: element.scrollHeight,
    });

    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");

    const pdfWidth = 210;
    const pdfHeight = 297;
    const margin = 0;

    const imgProps = pdf.getImageProperties(imgData);
    const availableWidth = pdfWidth - margin * 2;
    const availableHeight = pdfHeight - margin * 2;

    const ratio = Math.min(
      availableWidth / imgProps.width,
      availableHeight / imgProps.height,
    );

    const finalWidth = imgProps.width * ratio;
    const finalHeight = imgProps.height * ratio;

    const x = (pdfWidth - finalWidth) / 2;
    const y = margin;

    pdf.addImage(imgData, "PNG", x, y, finalWidth, finalHeight);
    pdf.save(
      `CONTRAT_KIM_REPARATION_${formData.name.replace(/\s+/g, "_")}.pdf`,
    );
  };

  const handleSendEmail = () => {
    setIsSubmitted(true);
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
            j'offre à mes voisins.
          </Typography>
        </Paper>

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
            <Box>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={formData.isJoycon}
                    onChange={(e) => {
                      const isChecked = e.target.checked;
                      setFormData({
                        ...formData,
                        isJoycon: isChecked,
                        toyName: isChecked ? "Nintendo switch joycon" : "",
                      });
                      if (!isChecked) {
                        setAgreements((prev) => ({
                          ...prev,
                          fraisPieces: false,
                        }));
                      }
                    }}
                    size="small"
                  />
                }
                label={
                  <Typography sx={{ fontSize: "0.85rem", fontWeight: 600 }}>
                    Nintendo switch joycon
                  </Typography>
                }
                sx={{ mb: 1 }}
              />
              <TextField
                variant="standard"
                label="Désignation du Jouet"
                fullWidth
                value={formData.toyName}
                disabled={formData.isJoycon}
                onChange={(e) =>
                  setFormData({ ...formData, toyName: e.target.value })
                }
              />
            </Box>
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
            {/* 👇 새로 추가되는 조이콘 전용 항목 (여기에 끼워넣기!) */}
            {formData.isJoycon && (
              <Paper
                variant="outlined"
                onClick={() => toggleAgreement("fraisPieces")}
                sx={{
                  p: 2,
                  borderRadius: "12px",
                  cursor: "pointer",
                  borderColor: agreements.fraisPieces ? "#0066cc" : "#e5e5e7",
                  bgcolor: agreements.fraisPieces ? "#f5faff" : "transparent",
                  transition: "0.2s",
                  display: "flex",
                  alignItems: "center",
                  "&:hover": { borderColor: "#0066cc" },
                }}
              >
                <Checkbox
                  size="small"
                  checked={agreements.fraisPieces}
                  readOnly
                />
                <Typography
                  sx={{
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    ml: 1,
                    color: agreements.fraisPieces ? "#003366" : "#424245",
                  }}
                >
                  {joyconText}
                </Typography>
              </Paper>
            )}

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

      <Dialog
        fullScreen
        open={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
        PaperProps={{ sx: { bgcolor: "#f5f5f7" } }}
      >
        <AppBar sx={{ position: "relative", bgcolor: "#1d1d1f" }}>
          <Toolbar>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6">
              Vérification et Signature
            </Typography>
            <Button color="inherit" onClick={() => setIsPreviewOpen(false)}>
              Fermer
            </Button>
          </Toolbar>
        </AppBar>

        <DialogContent
          sx={{
            py: 5,
            bgcolor: "#f5f5f7",
          }}
        >
          <Paper
            ref={pdfRef}
            sx={{
              margin: "0 auto",
              p: { xs: 3, md: 5 },
              width: "100%",
              maxWidth: "900px",
              minHeight: { xs: "auto", md: "1400px" },
              display: "flex",
              flexDirection: "column",
              bgcolor: "#fff",
              boxShadow: 3,
              border: "1.5px solid #000",
            }}
          >
            <Box
              sx={{
                borderBottom: "3px solid #000",
                pb: 2,
                mb: 3,
                pt: 10,
                textAlign: "center",
              }}
            >
              <Typography sx={{ fontWeight: 900, fontSize: "1.4rem", mb: 2 }}>
                CONTRAT DE PRISE EN CHARGE
                <br />
                KIM REPARATION
              </Typography>
              <Box sx={{ mb: 6 }}>
                <Typography
                  sx={{
                    fontSize: "0.95rem",
                    fontWeight: 900,
                    color: "#0066cc",
                  }}
                >
                  Prestataire : Kim Reparation (Service Bénévole)
                </Typography>
              </Box>
              <Stack spacing={0.5} sx={{ color: "#424245", textAlign: "left" }}>
                <Typography sx={{ fontSize: "0.85rem" }}>
                  <strong>Propriétaire (Client) :</strong> {formData.name}
                </Typography>
                <Typography sx={{ fontSize: "0.85rem" }}>
                  <strong>Contact :</strong> {finalContact}
                </Typography>
                <Typography sx={{ fontSize: "0.85rem" }}>
                  <strong>Commune :</strong> {formData.city}
                </Typography>
                <Typography sx={{ fontSize: "0.85rem" }}>
                  <strong>Désignation du Jouet :</strong> {formData.toyName}
                </Typography>
              </Stack>
            </Box>

            <Box
              sx={{ display: "flex", flexDirection: "column", gap: 1, mb: 4 }}
            >
              {/* 👇 이거 한 줄만 기존 map 위에 추가하시면 됩니다 */}
              {formData.isJoycon && (
                <Typography sx={{ fontSize: "0.75rem", lineHeight: 1.3 }}>
                  • {joyconText}
                </Typography>
              )}

              {allDefenseLines.map((line) => (
                <Typography
                  key={line.id}
                  sx={{ fontSize: "0.75rem", lineHeight: 1.3 }}
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
                {formData.toyName}) soit traité bénévolement par Kim
                Reparation."
              </Typography>
            </Box>

            <Box sx={{}}>
              <Stack
                direction={{ xs: "column", md: "row" }}
                justifyContent="space-between"
                spacing={5}
              >
                <Box sx={{ flex: 1 }}>
                  <Typography sx={{ fontWeight: 600, fontSize: "1rem" }}>
                    Fait à {formData.city},<br /> le {todayDate}
                  </Typography>
                </Box>
                <Box sx={{ flex: 2 }}>
                  <Typography
                    sx={{ fontWeight: 800, fontSize: "0.9rem", mb: 1 }}
                  >
                    Signature :
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
                      penColor="#0000ff"
                      canvasProps={{
                        maxWidth: "600px",
                        height: 150,
                        className: "sigCanvas",
                      }}
                      onEnd={() => setHasSignature(true)}
                    />
                  </Box>
                  <Button
                    data-html2canvas-ignore
                    size="small"
                    onClick={clearSignature}
                    sx={{ mt: 1, color: "#d32f2f" }}
                  >
                    Effacer et recommencer
                  </Button>
                </Box>
              </Stack>
            </Box>
          </Paper>
        </DialogContent>

        <DialogActions
          sx={{ p: 3, flexDirection: "column", bgcolor: "#fff", gap: 2 }}
        >
          <Box
            sx={{
              p: 1,
              bgcolor: "#eff7ff",
              borderRadius: "10px",
              border: "1px solid #0071e3",
              width: "100%",
              maxWidth: "600px",
            }}
          >
            <FormControlLabel
              control={
                <Checkbox
                  checked={finalConfirm}
                  onChange={(e) => setFinalConfirm(e.target.checked)}
                  sx={{ color: "#0071e3" }}
                />
              }
              label={
                <Typography sx={{ fontSize: "0.85rem", fontWeight: 700 }}>
                  Je confirme que ces informations sont exactes
                </Typography>
              }
            />
          </Box>
          <Stack direction="row" spacing={2}>
            <Button
              variant="outlined"
              onClick={() => setIsPreviewOpen(false)}
              sx={{ px: 4 }}
            >
              RETOUR
            </Button>
            <Button
              variant="contained"
              disabled={!hasSignature || !finalConfirm}
              onClick={handleSendEmail}
              sx={{ bgcolor: "#0066cc", px: 4 }}
            >
              ENVOYER LA DEMANDE
            </Button>
          </Stack>
        </DialogActions>
      </Dialog>

      <Dialog
        open={isSubmitted}
        PaperProps={{ sx: { borderRadius: "24px", p: 3, textAlign: "center" } }}
      >
        <DialogContent>
          <CheckCircleIcon sx={{ fontSize: 70, color: "#34c759", mb: 2 }} />
          <Typography variant="h5" sx={{ fontWeight: 900 }}>
            Demande Reçue !
          </Typography>
          <Typography sx={{ color: "#424245", my: 3 }}>
            Nous vous recontacterons très rapidement.
          </Typography>
          <Stack spacing={2}>
            <Button
              fullWidth
              variant="contained"
              startIcon={<PictureAsPdfIcon />}
              onClick={handleDownloadPDF}
              sx={{
                py: 1.5,
                borderRadius: "12px",
                bgcolor: "#0071e3",
                fontWeight: 900,
              }}
            >
              Sauvegarder en PDF
            </Button>
            <Button
              fullWidth
              variant="outlined"
              startIcon={<HomeIcon />}
              onClick={() => window.location.reload()}
              sx={{ py: 1.5, borderRadius: "12px" }}
            >
              Retour à l'accueil
            </Button>
          </Stack>
        </DialogContent>
      </Dialog>
    </Container>
  );
};

export default ToyDevis;
