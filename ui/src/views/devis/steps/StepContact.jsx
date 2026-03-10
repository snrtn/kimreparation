import React from "react";
import {
  Typography,
  Box,
  TextField,
  Stack,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";

const StepContact = ({ data, onUpdate }) => {
  const isCustomDomain = data.emailDomain === "custom";

  return (
    <Box sx={{ textAlign: "left" }}>
      <Typography
        variant="h4"
        sx={{
          fontWeight: 800,
          mb: 1,
          color: "#1d1d1f",
          fontSize: { xs: "1.6rem", md: "2.125rem" },
        }}
      >
        Vos Coordonnées
      </Typography>
      <Typography
        sx={{
          color: "#424245",
          mb: 4,
          fontSize: { xs: "0.95rem", md: "1.05rem" },
        }}
      >
        Comment souhaitez-vous être recontacté pour votre devis ?
      </Typography>

      <Stack spacing={3}>
        {/* 1. 이름 입력 */}
        <Box>
          <Typography
            sx={{
              color: "#1d1d1f",
              fontWeight: 700,
              fontSize: "0.95rem",
              mb: 1.5,
            }}
          >
            Nom et Prénom
          </Typography>
          <TextField
            fullWidth
            placeholder="Jean Dupont"
            value={data.userName || ""}
            onChange={(e) => onUpdate({ userName: e.target.value })}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "14px",
                bgcolor: "#fbfbfd",
              },
            }}
          />
        </Box>

        {/* 2. 연락 수단 선택 (전화번호 vs 이메일) */}
        <Box>
          <Typography
            sx={{
              color: "#1d1d1f",
              fontWeight: 700,
              fontSize: "0.95rem",
              mb: 1.5,
            }}
          >
            Moyen de contact
          </Typography>
          <FormControl fullWidth>
            <Select
              value={data.contactType || "phone"}
              onChange={(e) =>
                onUpdate({
                  contactType: e.target.value,
                  userPhone: "",
                  emailUser: "",
                })
              }
              sx={{ borderRadius: "14px", bgcolor: "#fbfbfd" }}
            >
              <MenuItem value="phone">Téléphone</MenuItem>
              <MenuItem value="email">E-mail</MenuItem>
            </Select>
          </FormControl>
        </Box>

        {/* 3. 선택에 따른 가변 입력창 */}
        {data.contactType === "phone" ? (
          <Box>
            <Typography
              sx={{
                color: "#1d1d1f",
                fontWeight: 700,
                fontSize: "0.95rem",
                mb: 1.5,
              }}
            >
              Numéro de téléphone
            </Typography>
            <TextField
              fullWidth
              placeholder="06 00 00 00 00"
              value={data.userPhone || ""}
              onChange={(e) => {
                let val = e.target.value.replace(/\D/g, "");
                if (val.length > 0 && val[0] !== "0") val = "0" + val;
                if (val.length > 10) val = val.substring(0, 10);
                let formatted = val.match(/.{1,2}/g)?.join(" ") || "";
                onUpdate({ userPhone: formatted });
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "14px",
                  bgcolor: "#fbfbfd",
                },
              }}
            />
          </Box>
        ) : (
          <Box>
            <Typography
              sx={{
                color: "#1d1d1f",
                fontWeight: 700,
                fontSize: "0.95rem",
                mb: 1.5,
              }}
            >
              Adresse E-mail
            </Typography>
            <Stack direction="row" spacing={1}>
              <TextField
                placeholder="jean.dupont"
                value={data.emailUser || ""}
                onChange={(e) => onUpdate({ emailUser: e.target.value })}
                sx={{
                  flex: 1,
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "14px",
                    bgcolor: "#fbfbfd",
                  },
                }}
              />
              <FormControl sx={{ minWidth: { xs: 120, md: 160 } }}>
                <Select
                  value={data.emailDomain || "@gmail.com"}
                  onChange={(e) => onUpdate({ emailDomain: e.target.value })}
                  sx={{ borderRadius: "14px", bgcolor: "#fbfbfd" }}
                >
                  <MenuItem value="@gmail.com">@gmail.com</MenuItem>
                  <MenuItem value="@orange.fr">@orange.fr</MenuItem>
                  <MenuItem value="@free.fr">@free.fr</MenuItem>
                  <MenuItem value="@outlook.com">@outlook.com</MenuItem>
                  <MenuItem value="@icloud.com">@icloud.com</MenuItem>
                  <MenuItem value="custom">Autre</MenuItem>
                </Select>
              </FormControl>
            </Stack>

            {/* 'Autre' 선택 시 직접 입력창 */}
            {isCustomDomain && (
              <TextField
                fullWidth
                placeholder="exemple.com"
                sx={{
                  mt: 1.5,
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "14px",
                    bgcolor: "#fbfbfd",
                  },
                }}
                onChange={(e) => onUpdate({ customDomain: e.target.value })}
              />
            )}
          </Box>
        )}
      </Stack>
    </Box>
  );
};

export default StepContact;
