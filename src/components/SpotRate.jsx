import React, { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useSpotRate } from "../context/SpotRateContext";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

const SpotRate = () => {
  const { goldData, silverData } = useSpotRate();

  const getBackgroundColor = (change) => {
    if (change === "up") {
      return "green"; // Green color for increase
    } else if (change === "down") {
      return "red"; // Red color for decrease
    }
    return ""; // White color for no change
  };

  const getColor = (change) => {
    if (change === "up") {
      return "white"; // Green color for increase
    } else if (change === "down") {
      return "white"; // Red color for decrease
    }
    return "#155243"; // Default color for no change
  };

  const renderSpotSection = (metal, data) => (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "stretch",
        gap: "0.5vw",
      }}
    >
      {/* Metal name box - moved to left side with vertical text */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#155243",
          writingMode: "vertical-lr",
          textOrientation: "mixed",
          minWidth: "3vw",
          padding: "1vw 0.5vw",
        }}
      >
        <Typography
          sx={{
            fontSize: "1.5vw",
            color: "white",
            transform: "rotate(180deg)",
            marginBottom: "0.9vw",
          }}
        >
          oz
        </Typography>
        <Typography
          sx={{
            fontSize: "1.7vw",
            fontWeight: "600",
            color: "white",
            transform: "rotate(180deg)",
            textTransform: "uppercase",
          }}
        >
          {metal}
        </Typography>
      </Box>

      {/* Spot rate section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          textAlign: "center",
          padding: "0.5vw 2.5vw",
          width: "100%",
          backgroundColor: "#E8C6AC",
        }}
      >
        <Box>
          <Box className="flex flex-row items-center justify-center">
            <Box
              className="flex justify-center items-center mr-1"
              sx={{
                marginLeft: "0.1vw",
                backgroundColor: "#155543",
                width: "20px",
                height: "20px",
                borderRadius: "20%",
                fontSize: "1.2vw",
                fontWeight: "600",
                color: "white",
              }}
            >
              $
            </Box>
            <Typography
              sx={{
                fontSize: "1.5vw",
                color: "#155243",
                fontWeight: "600",
              }}
            >
              BID
            </Typography>
          </Box>
          <Typography
            variant="h3"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "2.5vw",
              fontWeight: "bold",
              margin: "0.2vw 0",
              padding: "0.6vw 0",
              color: getColor(data.bidChanged),
              backgroundColor: getBackgroundColor(data.bidChanged),
              width: "11vw",
              borderRadius: "10px",
              border: "3px solid #155243",
            }}
          >
            {data.bid}
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "8px",
              border: "2px solid #155243",
            }}
          >
            <Typography
              variant="body2"
              sx={{
                fontSize: "1.1vw",
                color: "#155243",
                fontWeight: "bold",
                marginLeft: "0.5vw",
              }}
            >
              LOW {data.low}
            </Typography>
          </Box>
        </Box>
        <Box>
          <Box className="flex flex-row items-center justify-center">
            <Box
              className="flex justify-center items-center mr-1"
              sx={{
                marginLeft: "0.1vw",
                backgroundColor: "#155543",
                width: "20px",
                height: "20px",
                borderRadius: "20%",
                fontSize: "1.2vw",
                fontWeight: "600",
                color: "white",
              }}
            >
              $
            </Box>
            <Typography
              sx={{
                fontSize: "1.5vw",
                color: "#155243",
                fontWeight: "600",
              }}
            >
              ASK
            </Typography>
          </Box>
          <Typography
            variant="h3"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "2.5vw",
              fontWeight: "bold",
              margin: "0.2vw 0",
              padding: "0.6vw 0",
              color: getColor(data.bidChanged),
              backgroundColor: getBackgroundColor(data.bidChanged),
              width: "11vw",
              borderRadius: "10px",
              border: "3px solid #155243",
            }}
          >
            {data.ask}
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "8px",
              border: "2px solid #155243",
            }}
          >
            <Typography
              variant="body2"
              sx={{
                fontSize: "1.1vw",
                color: "#155243",
                fontWeight: "bold",
                marginLeft: "0.5vw",
              }}
            >
              HIGH {data.high}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );

  return (
    <Box
      className=" mx-auto rounded-lg"
      sx={{
        maxWidth: "100%",
      }}
    >
      <Box>
        <Typography
          sx={{
            fontSize: "1.8vw",
            fontWeight: "700",
            color: "#FFFFFF",
            backgroundColor: "#155243",
            textAlign: "center",
            marginBottom: "1vw",
          }}
        >
          SPOT RATE
        </Typography>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "1vw" }}>
        {renderSpotSection("gold", goldData)}
        {renderSpotSection("silver", silverData)}
      </Box>
    </Box>
  );
};

export default SpotRate;