import React from "react";
import { Box, Typography } from "@mui/material";

const NewsTicker = ({ newsItems }) => {
  return (
    <Box
      sx={{
        backgroundColor: "#FFFFFF",
        opacity: "85%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        height: "50px",
        marginTop: "7px",
      }}
    >
      <Box
        className="flex flex-col justify-center items-center"
        sx={{
          backgroundColor: "#363636",
          color: "white",
          width: "400px",
          height: "100%",
          marginLeft: "10px",
        }}
      >
        <Typography sx={{ fontSize: "1.5vw", fontWeight: "bold", padding: '0px' }}>
          RAJASTHAN GOLD
        </Typography>
        <Typography sx={{ fontSize: "1vw", fontWeight: "bold", padding: '0px', marginTop: '-10px' }}>
          Latest News
        </Typography>
      </Box>

      <Box
        sx={{
          width: "100%",
          overflow: "hidden",
          whiteSpace: "nowrap",
          position: "relative",
        }}
      >
        <Box
          component="div"
          sx={{
            display: "inline-block",
            animation: "scroll 40s linear infinite",
            color: "black",
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
                color: "black",
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
