import React, { useEffect, useState } from "react";
import darkTheme from "../themes";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from '@mui/icons-material/Language';

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
import SourceIcon from "@mui/icons-material/Source";
import CodeSharpIcon from "@mui/icons-material/CodeSharp";
import { CodeSharp } from "@mui/icons-material";
import CodeOffSharpIcon from "@mui/icons-material/CodeOffSharp";
import JavascriptSharpIcon from "@mui/icons-material/JavascriptSharp";
const react = "#489294";
const body = "#9CA3AF";

const projects = [
  {
    name: "Snack Club",
    subheading: "Ecommerce Project",
    description:
      "A curated snack bundle subscription e-commerce website that implemented common ecommerce site functionality including user sign up and login, product searching, shopping cart, and order payment with Stripe.",
    demoLink:"https://menu-builder-capstone.onrender.com/",
    githubLink:"https://github.com/klei0229/fullstack-capstone-team-6-self"
  },
  {
    name: "Quick Menu Builder",
    subheading: "Stackathon Project",
    description:
      "An application that allows local restaurant businesses to generate and customize a digital version of their menu by parsing in menu data via a CSV file.",
      demoLink:"https://menu-builder-stackathon.onrender.com/",
      githubLink:"https://github.com/klei0229/acme_menus_1"    
    },
  {
    name: "Restaurant Menu Management App",
    subheading: "Capstone Project",
    description:
      "An expansion of the Quick Menu Builder individual project that elaborates on the function of helping local restaurant businesses manage and design their digital menus.",
      demoLink:"https://snackclub-ecommerce.onrender.com/",
      githubLink:"https://github.com/klei0229/acme-shopping-2207-FSA-PT_self"
    },
];

const Projects = () => {
  return (
    <>
      <Grid container spacing={2}>
        {projects.map((project) => {
          return (
            <Grid item lg={6}>
              <Box
                sx={{ backgroundColor: "#121212", p: 3, borderRadius: "5px", minHeight:'85%' }}
              >
                <SourceIcon
                  sx={{
                    "&:hover": {
                      backgroundColor: "white",
                    },
                    fontSize: "55px",
                    backgroundColor: react,
                    p: 1,
                    borderRadius: "5px",
                  }}
                ></SourceIcon>
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
                  {project.name}{" "}
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
                  {project.subheading}{" "}
                </Typography>
                <Typography
                  align="left"
                  variant="body1"
                  sx={{
                    color: body,
                    color: darkTheme.typography.text.color,
                    fontFamily: darkTheme.typography.text.fontFamily,
                  }}
                >
                  {project.description}
                </Typography>

                <Box sx={{display:'flex', justifyContent:'flex-end'}}>
                  <IconButton
                    href={project.githubLink}
                    sx={{ backgroundColor: react, mr: 0.5 }}
                  >
                    <GitHubIcon fontSize="small"></GitHubIcon>
                  </IconButton>
                  <IconButton
                    href={project.demoLink}
                    sx={{ backgroundColor: react, mr: 0.5 }}
                  >
                    <LanguageIcon fontSize="small"></LanguageIcon>
                  </IconButton>
                </Box>
              </Box>
            </Grid>
          );
        })}
      </Grid>
      <br />
      <br />
      <br />
    </>
  );
};
export default Projects;
