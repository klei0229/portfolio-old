import React, { useEffect, useState } from "react";
import darkTheme from "../themes";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";

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
    demoLink: "https://snackclub-ecommerce.onrender.com/",
    githubLink: "https://github.com/klei0229/acme-shopping-2207-FSA-PT_self",

    role: "Met regularly to plan out the scope of the project. Helped wireframe website layout and model ecommerce data. Pair programmed the Sequelize models to be used with PostgreSQL and set up the API routes. Created several UI elements using React and Material UI that resulted in completion of the landing page and product detail page.",
    difficulties:
      "The challenge with this project was getting familiar with Material and creating working elements in a rather short period of time. Because of this, I ended up writing many inline style declarations for components. \n\n If I was to improve on my code, I would aim to adopt the DRY principle by reduce redundant inline style code.",
    technologies: [
      "JavaScript",
      "React",
      "Redux",
      "Express",
      "PostgreSql",
      "MaterialUI",
      "Sequelize",
      "Stripe",
    ],
  },
  {
    name: "Quick Menu Builder",
    subheading: "Stackathon Project",
    description:
      "An application that allows local restaurant businesses to generate and customize a digital version of their menu by parsing in menu data via a CSV file.",
    demoLink: "https://menu-builder-stackathon.onrender.com/",
    githubLink: "https://github.com/klei0229/acme_menus_1",
    role: "My role was to create an MVP of the menu builder in a week’s time. This included creating the database using Sequelize, setting up the API routes, implementing the ability for users to upload CSV sheets, and building out a user interface that lets users toggle several visual components including text font, typography, and color on their menu.",
    difficulties:
      "The challenge with this project was controlling the state of the React application. Due to the time constraint and scale of the project, I opted to not use Redux and as a result I ended up having a hard time scaling the project. I ended up having to tediously pass props from a parent react component down to the nested child components tree to complete the project. \n\n To improve on this project, I can commit to restructuring the project and use Redux to control the state of the application.",
    technologies: [
      "Javascript",
      "React",
      "Redux",
      "Express",
      "PostgreSql",
      "Sequelize",
      "MaterialUI",
    ],
  },
  {
    name: "Restaurant Menu Management App",
    subheading: "Capstone Project",
    description:
      "An expansion of the Quick Menu Builder individual project that elaborates on the function of helping local restaurant businesses manage and design their digital menus.",
    demoLink: "https://menu-builder-capstone.onrender.com/",
    githubLink: "https://github.com/klei0229/fullstack-capstone-team-6-self",
    role: "Refactored the initial code base from the previous project (Quick Menu Builder) to implement Redux to manage the state of the application. This allowed the application to be maintainable as we included more functionality on the user interface.\n\n I also implemented the React Dnd API to create a custom drag and drop user interface that allows users to move items on their menu and ultimately customize the layout of their menu and how menu items appear. ",
    difficulties:
      " The challenge for this project was learning how the React Dnd API works and then building the drag and drop system. It was a very time consuming process learning how the API worked and then finding what I could use in the API for the project needs. Ultimately, I had to construct roughly 10 different react components for the system to work. \n\nTo improve the project, I can write code to allow visual components that are found on the menu to be draggable (ex: text, images).",
    technologies: [
      "JavaScript",
      "React",
      "Redux",
      "Express",
      "PostgreSql",
      "Sequelize",
      "MaterialUI",
      "React DnD",
    ],
  },
];

const Projects = () => {
  return (
    <>
      <Grid container spacing={2}>
        {projects.map((project) => {
          return (
            <Grid item lg={12}>
              <Box
                sx={{
                  backgroundColor: "#121212",
                  p: 3,
                  borderRadius: "5px",
                  minHeight: "85%",
                }}
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
                <Grid container spacing={6}>
                  {/* left column */}
                  <Grid item lg={5}>
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
                      align="left"
                      variant="h6"
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
<br/>
                    <Typography
                      align="left"
                      variant="h6"
                      sx={{
                        fontWeight: "bold",
                        color: react,
                        fontFamily: darkTheme.typography.text.fontFamily,
                        fontSize: "18px",
                      }}
                    >
                      Technologies Used
                    </Typography>

                    <List
                      sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        mt:-1
                      }}
                    >
                      <Typography
                        align="left"
                        variant="h6"
                        sx={{
                          fontWeight: "bold",
                          fontFamily: darkTheme.typography.text.fontFamily,
                          color: darkTheme.typography.text.color,
                        }}
                      ></Typography>


                      {project.technologies.map((item) => {
                        return (
                          <ListItem
                            disableGutters
                            disablePadding
                            sx={{
                              width: "50%",
                            }}
                          >
                            {/* <ListItemIcon
                              sx={{
                                color: react,
                              }}
                            >
                              <DoubleArrowIcon />
                            </ListItemIcon> */}
                            <ListItemText
                              sx={{
                                color: "white",
                                fontFamily:
                                  darkTheme.typography.text.fontFamily,
                              }}
                            >

                              <Box sx={{display:'flex', alignItems:'center', flexWrap:'wrap', backgroundColor:''}}>
                              <DoubleArrowIcon sx={{ pr:"5px",color: react }} />
                              <Typography
                                sx={{
                                  fontFamily:
                                    darkTheme.typography.text.fontFamily,
                                  fontSize: 16,
                                }}
                                >
                                {item}
                              </Typography>
                                </Box>
                            </ListItemText>
                          </ListItem>
                        );
                      })}

                    </List>
                  </Grid>

                  {/* right column */}
                  <Grid item lg={7}>
                    <Typography
                      align="left"
                      variant="h6"
                      sx={{
                        fontWeight: "bold",
                        fontFamily: darkTheme.typography.text.fontFamily,
                        color: darkTheme.typography.text.react,
                      }}
                    >
                      My Role{" "}
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
                      {/* {project.role} */}
                      {project.role.split('\n').map(i => {
    return (<>{i}<br/></>)
})}
                    </Typography>
                    <br />
                    <Typography
                      align="left"
                      variant="h6"
                      sx={{
                        fontWeight: "bold",
                        fontFamily: darkTheme.typography.text.fontFamily,
                        color: darkTheme.typography.text.react,
                      }}
                    >
                      Project Difficulties{" "}
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
                      {project.difficulties.split('\n').map(i => {
    return (<>{i}<br/></>)
})}
                    </Typography>
                  </Grid>
                </Grid>

                <br />
                <br />

                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
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
    </>
  );
};
export default Projects;
