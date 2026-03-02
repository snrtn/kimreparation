import React from "react";
import { Stack, Typography, Box } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import SmsIcon from "@mui/icons-material/Sms";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

const Step9 = ({ isMobile }) => {
  return (
    <Stack
      spacing={4}
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        px: 2,
      }}
    >
      {/* 둥근 아이콘 배경 */}
      <Box
        sx={{
          width: 90,
          height: 90,
          borderRadius: "50%",
          bgcolor: "#f5fbff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "3px solid #0071e3",
          boxShadow: "0 8px 24px rgba(0, 113, 227, 0.15)",
          mb: 2,
        }}
      >
        {isMobile ? (
          <SmsIcon sx={{ fontSize: "2.5rem", color: "#0071e3" }} />
        ) : (
          <AlternateEmailIcon sx={{ fontSize: "2.5rem", color: "#0071e3" }} />
        )}
      </Box>

      <Box>
        <Typography
          variant="h5"
          sx={{ fontWeight: 800, mb: 2.5, color: "#1d1d1f" }}
        >
          Dernière étape !
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "#424245",
            lineHeight: 1.8,
            fontSize: "1.05rem",
            fontWeight: 500,
          }}
        >
          {isMobile ? (
            <>
              Pour vous envoyer le devis, <br />
              les informations que vous avez saisies vont être transférées vers
              votre application de <b>SMS</b>.
            </>
          ) : (
            <>
              Pour vous envoyer le devis, <br />
              les informations que vous avez saisies vont être transférées vers
              votre application <b>E-mail</b>.
            </>
          )}
        </Typography>
      </Box>
    </Stack>
  );
};

export default Step9;
