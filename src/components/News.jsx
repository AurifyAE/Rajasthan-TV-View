import React from "react";
import { Box, Typography } from "@mui/material";

const NewsTicker = ({ newsItems }) => {
  return (
    <Box
      sx={{
        backgroundColor: "#155243",
        display: "flex",
        flexDirection: "column",
        height: "50px",
        marginTop: "50px",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#E8C6AC",
          color: "#155243",
          width: "130px",
          height: "35px",
          marginTop: "-35px",
        }}
      >
        <Typography sx={{ fontSize: "1.5vw", fontWeight: "bold", padding: '0px' }}>
          NEWS
        </Typography>
      </Box>

      <Box
        sx={{
          width: "100%",
          overflow: "hidden",
          whiteSpace: "nowrap",
        }}
      >
        <Box
          component="div"
          sx={{
            display: "inline-block",
            animation: "scroll 40s linear infinite",
            color: "#155243",
            fontSize: "2vw",
            textAlign: "center",
          }}
        >
          {newsItems.map((item, index) => (
            <Typography
              key={index}
              component="span"
              sx={{
                marginRight: "4vw",
                display: "inline-block",
                color: "#155243",
                fontSize: "2vw",
              }}
            >
              {item.description}
            </Typography>
          ))}
        </Box>
        <style>
          {`
            @keyframes scroll {
              0% { transform: translateX(100%); }
              100% { transform: translateX(-100%); }
            }
          `}
        </style>
      </Box>
    </Box>
  );
};

export default NewsTicker;
