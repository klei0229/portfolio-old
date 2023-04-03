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

const Skills = () => {
  React.useEffect(() => {
    console.log("mytheme", darkTheme);
  }, []);

  return (
    <>
      {" "}
      <Typography
        align="left"
        variant="h5"
        sx={{ color: darkTheme.typography.text.color, fontWeight: "bold" }}
      >
        Skills{" "}
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
                }}
              >
                {skill}
              </ListItemText>
            </ListItem>
          );
        })}
      </List>
      <Box sx={{ backgroundColor: "#121212", p: 3, borderRadius: "5px" }}>
        <LayersIcon
          sx={{
            "&:hover": {
              backgroundColor: "white",
            },
            fontSize: "55px",
            backgroundColor: react,
            p: 1,
            borderRadius: "5px",
          }}
        ></LayersIcon>

        <br />
        <br />
      </Box>
    </>
  );
};
export default Skills;
