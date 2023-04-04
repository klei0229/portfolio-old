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

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
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
const second = "#9CA3AF";

const Summary = (props) => {
  const classes = props.classes;
  const sizing = props.sizing;
  return (
    <>
      <Box
        className={classes.primaryBox}
        sx={{
          width: sizing.width,
          height: "50%",
          mr: "5%",
          mt: "-10%",
          boxShadow: 3,
        }}
      >
        {/* Avatar Box */}
        <Box
          component="img"
          src="https://media.licdn.com/dms/image/D4E03AQFxksiXEgTt2A/profile-displayphoto-shrink_400_400/0/1680534639146?e=1686182400&v=beta&t=YGg7u-5K7Wx7pf-Lj4rp_gVfU9K_s9y590qF6ySICPY"
          sx={{ width: 200, borderRadius: "50%" }}
        ></Box>
        <Typography
          variant="h4"
          sx={{
            color: "white",
            fontFamily: darkTheme.typography.text.fontFamily,
            fontWeight: "bold",
          }}
        >
          Kevin Lei
        </Typography>
        {/* <Typography variant='p'>Email: klei0229cs@gmail.com</Typography> */}
        <Typography
          sx={{
            fontFamily: darkTheme.typography.text.fontFamily,
            color: second,
          }}
          variant="h6"
        >
          Software Engineer | Based In NYC
        </Typography>

        <div>
          <Button
            variant="contained"
            size="large"
            sx={{ textTransform: "none", mt: 1, backgroundColor: react }}
          >
            <Typography variant="h6">Download Resume</Typography>
          </Button>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              mt: 1,
              mb: 1,
            }}
          >
            <IconButton href="https://github.com/klei0229" sx={{ backgroundColor: react, mr: 0.5 }}>
              <GitHubIcon fontSize="small"></GitHubIcon>
              
            </IconButton>
            <IconButton href="https://www.linkedin.com/in/kevin-lei-cs/"sx={{ backgroundColor: react, ml: 0.5 }}>
              <LinkedInIcon></LinkedInIcon>
            </IconButton>
          </Box>

          {/* <Typography variant = 'h3'>About</Typography> */}
          <Typography
            align="left"
            variant="body1"
            sx={{
              fontFamily: darkTheme.typography.text.fontFamily,
              color: darkTheme.typography.text.color,
              fontSize: darkTheme.typography.text.fontSize,
            }}
          >
            Computer Engineering and Software Bootcamp Graduate with experience
            building web applications using JavaScript, NodeJS, ReactJS, ReduxJS and
            PostgreSQL
          </Typography>
        </div>
      </Box>
    </>
  );
};
export default Summary;
