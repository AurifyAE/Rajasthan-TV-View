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
    return "black"; // Default color for no change
  };

  const renderSpotSection = (metal, data) => (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "0.5vw",
      }}
    >
      <Box
        className="flex flex-row items-center justify-center w-full"
        sx={{ backgroundColor: "#363636" }}
      >
        <Typography
          sx={{
            fontSize: "2.2vw",
            fontWeight: "600",
            color: "white",
            textTransform: "capitalize",
          }}
        >
          {metal}
        </Typography>
        <Typography
          sx={{
            marginTop: "10px",
            fontSize: "2.2vw",
            color: "white",
          }}
        >
          oz
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
          backgroundColor: "white",
        }}
      >
        <Box>
          <Box className="flex flex-row items-center justify-center">
            <Typography
              sx={{
                fontSize: "1.5vw",
                color: "black",
                fontWeight: "600",
              }}
            >
              BID
            </Typography>
            <Box
              className="flex justify-center items-center"
              sx={{
                marginLeft: "0.1vw",
                backgroundColor: "#363636",
                width: "26px",
                height: "26px",
                borderRadius: "50%",
                fontSize: "1.5vw",
                fontWeight: "600",
                color: "white",
              }}
            >
              <i class="fa-solid fa-dollar-sign"></i>
            </Box>
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
            }}
          >
            {data.bid}
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "red",
              borderRadius: "3px",
            }}
          >
            <Typography
              variant="body2"
              sx={{
                fontSize: "1vw",
                color: "white",
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
            <Typography
              sx={{
                fontSize: "1.5vw",
                color: "black",
                fontWeight: "600",
              }}
            >
              ASK
            </Typography>
            <Box
              className="flex justify-center items-center"
              sx={{
                marginLeft: "0.1vw",
                backgroundColor: "#363636",
                width: "26px",
                height: "26px",
                borderRadius: "50%",
                fontSize: "1.5vw",
                fontWeight: "600",
                color: "white",
              }}
            >
              <i class="fa-solid fa-dollar-sign"></i>
            </Box>
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
            }}
          >
            {data.ask}
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "green",
              borderRadius: "3px",
            }}
          >
            <Typography
              variant="body2"
              sx={{
                fontSize: "1vw",
                color: "white",
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
      <Box sx={{ display: "flex", flexDirection: "column", gap: "1vw" }}>
        {renderSpotSection("gold", goldData)}
        {renderSpotSection("silver", silverData)}
      </Box>
    </Box>
  );
};

export default SpotRate;
