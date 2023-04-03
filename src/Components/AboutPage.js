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

import { styled } from "@mui/material";

import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LayersIcon from "@mui/icons-material/Layers";

const skills = [
  "Javascript",
  "React",
  "Redux",
  "Node.js",
  "Express",
  "PostgreSQL",
  "Sequelize",
  "MaterialUI",
];

const knowledegable = ["HTML/CSS", "C++", "Java", "Python", "SQL"];
const react = "#489294";
const iconStart = "#233a3b";

const AboutPage = () => {
  React.useEffect(() => {
    console.log("mytheme", darkTheme);
  }, []);

  return (
    <>
<Box sx={{ backgroundColor: "#121212", p: 3, borderRadius: "5px" }}>
      <Typography
        gutterBottom
        align="left"
        sx={{
          fontFamily: "monospace",
          // color: "#9CA3AF"
          color: "white",
          fontSize: darkTheme.typography.text.fontSize,
        }}
      >
        I'm a recent Software Bootcamp Graduate, starting to look for roles as a
        junior software engineer.
        <br />
        <br />
        I first got into programming as a computer engineering student at The
        City College of New York. As part of my curriculum, I took courses in
        the computer science department. The core classes I took here focused on
        Java, C++ & Python and taught me core computer fundamentals including
        topics like data structures, algorithms, & object-oriented programming.
        <br />
        <br />
        In June 2022, I enrolled into Fullstack Academy to learn more about web
        development technologies. There, I learned and utilized JavaScript,
        Node.js, the React/ Redux framework & PostgreSQL to build and deploy
        code for two team & one solo web application projects.
        <br />
        <br />
        As of December 2022, I graduated from Fullstack Academy, and I’m excited
        to continue the learning process so I can build bigger and more complex
        applications.
      </Typography>

      <br />
      <Typography
        gutterBottom
        align="left"
        sx={{
          fontFamily: darkTheme.typography.text.fontFamily,
          color: darkTheme.typography.text.color,
          fontSize: darkTheme.typography.text.fontSize,
        }}
      >
        Here are some of the technologies I've been using recently:
      </Typography>

      <List
        sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
      >
        {skills.map((skill) => {
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
                align="center"
                sx={{
                  color: "white",
                  fontFamily: darkTheme.typography.text.fontFamily,
                }}
              >
                <Typography
                  sx={{ fontFamily: darkTheme.typography.text.fontFamily, fontSize: darkTheme.typography.text.fontSize }}
                >
                {skill}
                </Typography>
              </ListItemText>
            </ListItem>
          );
        })}
      </List>

      {/* <Box
        sx={{
          backgroundColor: "#121212",
          p: 3,
          borderRadius: "5px",
          "&:hover": {
            // backgroundColor:'red',
            "& .MuiSvgIcon-root": {
              // backgroundColor:react,
              // color:'white'
            },
          },
        }}
      > */}
      {/* <AccountCircleIcon
          sx={{
            "@keyframes pulsate": {
              "0%": {
                backgroundColor: "#2A2837",
                color: "rgb(194,122,247)",
              },
              "100%": {
                backgroundColor: "#7C3AED",
                color: "white",
              },
            },

            "&:hover": {
              animation: "pulsate .15s ease forwards",
            },

            fontSize: "55px",
            backgroundColor: "#2A2837",
            color: "rgb(194,122,247)",
            p: 1,
            borderRadius: "5px",
          }}
        ></AccountCircleIcon>
        <br />
        <br /> */}

      {/* </Box> */}</Box>
    </>
  );
};
export default AboutPage;
