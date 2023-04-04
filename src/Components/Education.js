import React, { useEffect, useState } from "react";
import darkTheme from "../themes";

import {
  Typography,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import TerminalSharpIcon from "@mui/icons-material/TerminalSharp";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import CodeIcon from "@mui/icons-material/Code";

import CodeSharpIcon from "@mui/icons-material/CodeSharp";
import { CodeSharp } from "@mui/icons-material";
import CodeOffSharpIcon from "@mui/icons-material/CodeOffSharp";
import JavascriptSharpIcon from "@mui/icons-material/JavascriptSharp";
const react = "#489294";
const body = "#9CA3AF";

const Education = () => {
  const classes = [
    "Software Design Lab",
    "Algorithms",
    "Data Structures",
    "Discrete Mathematics",
    "Probability and Statistics",
    "Assembly Language",
    "Engineering Economics",
    "Computer Organization",
    "Digital Integrated Circuits",
    "Web Design",
    "Operating Systems",
    "Image Processing",
  ];

  return (
    <>
      {/* <Typography align="left" variant="h5" sx={{ color:darkTheme.typography.text.color, fontWeight: "bold" }}>
          Education{" "}
        </Typography> */}
      <Box sx={{ backgroundColor: "#121212", p: 3, borderRadius: "5px" }}>
        <TerminalSharpIcon
          sx={{
            "&:hover": {
              backgroundColor: "white",
            },
            fontSize: "55px",
            backgroundColor: react,
            p: 1,
            borderRadius: "5px",
          }}
        ></TerminalSharpIcon>
        <br />
        <br />
        <Typography
          align="left"
          variant="h5"
          sx={{
            fontWeight: "bold",
            fontFamily: darkTheme.typography.text.fontFamily,
            color: darkTheme.typography.text.color,
          }}
        >
          1. The City College of New York
        </Typography>
        <Typography
          gutterBottom
          align="left"
          variant="body1"
          sx={{
            fontWeight: "bold",
            color: react,
            fontFamily: darkTheme.typography.text.fontFamily,
            fontSize: "18px",
          }}
        >
          B.Eng in Computer Engineering
        </Typography>

        <Typography
          align="left"
          variant="body1"
          sx={{
            fontSize: darkTheme.typography.text.fontSize,
            color: darkTheme.typography.text.color,
            fontFamily: darkTheme.typography.text.fontFamily,
          }}
        >
          4 Year Computer Engineering program that focuses on computer science
          and electrical engineering topics. Software Engineering Related
          Coursework include:
        </Typography>
        <br />

        <List
          sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
        >
          {classes.map((item) => {
            return (
              <ListItem
                disableGutters
                sx={{
                  width: "50%",
                }}
              >
                <ListItemIcon
                  sx={{
                    color: react,
                  }}
                >
                  <DoubleArrowIcon />
                </ListItemIcon>
                <ListItemText
                  sx={{
                    color: "white",
                  }}
                >
                  <Typography
                    sx={{ fontFamily: darkTheme.typography.text.fontFamily, fontSize: darkTheme.typography.text.fontSize }}
                  >
                    {item}
                  </Typography>
                </ListItemText>
              </ListItem>
            );
          })}
        </List>
      </Box>
      <br />
      <Box sx={{ backgroundColor: "#121212", p: 3, borderRadius: "5px" }}>
        <JavascriptSharpIcon
          sx={{
            "&:hover": {
              backgroundColor: "white",
            },
            fontSize: "55px",
            backgroundColor: react,
            p: 1,
            borderRadius: "5px",
          }}
        ></JavascriptSharpIcon>
        <br />
        <br />
        <Typography
          align="left"
          variant="h5"
          sx={{
            fontWeight: "bold",
            fontFamily: darkTheme.typography.text.fontFamily,

            color: darkTheme.typography.text.color,
          }}
        >
          2. Fullstack Academy
        </Typography>
        <Typography
          gutterBottom
          align="left"
          variant="body1"
          sx={{
            fontSize: "18px",
            fontWeight: "bold",
            color: react,
            fontFamily: darkTheme.typography.text.fontFamily,
          }}
        >
          Web Development Bootcamp
        </Typography>
        <Typography
          align="left"
          variant="body1"
          sx={{
            fontSize: darkTheme.typography.text.fontSize,
            color: darkTheme.typography.text.color,
            fontFamily: darkTheme.typography.text.fontFamily,
          }}
        >
          A 28-week immersive software engineering program based in New York
          City, centered on full-stack JavaScript development, including
          Node.js, Express, Sequelize ORM for PostgreSQL databases, React and
          Redux; along with HTML & CSS, and CS fundamentals.
        </Typography>
      </Box>
    </>
  );
};
export default Education;
