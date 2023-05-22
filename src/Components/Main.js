//note: add changes only to ghpages branch
import React, { useEffect, useState } from "react";
import darkTheme from "../themes";

import {
  useLocation,
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import {
  Typography,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Grid,
} from "@mui/material";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import AboutPage from "./AboutPage";
import Skills from "./Skills";
import Summary from "./Summary";
import Education from "./Education";
import Projects from "./Projects";

//react
const react = "#489294";
const second = "#9CA3AF";

const links = [
  { page: "About", href: "/portfolio/about" },
  { page: "Education", href: "/portfolio/education" },
  { page: "Projects", href: "/portfolio/projects" },
];

const Main = (props) => {
  console.log(props);
  const classes = props.classes;

  const loc = useLocation().pathname;
  console.log(loc);

  const sizing = {
    summary: {
      width: "20%",
    },
    rightSection: "50%",
  };

  return (
    <>
      {/* main box */}
      <Box
        sx={{ backgroundColor: darkTheme.background.lightGrey, height: "auto" }}
      >
        {/* hero image at top */}
        <Box
          component="img"
          sx={{
            height: 230,
            width: "100%",
            objectFit: "cover",
          }}
          src="https://musing-mcnulty-4b35c6.netlify.app/static/media/cover-image.344e72ef.jpg"
        />

        {/* parent box */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            height: "fit-content",
          }}
        >
          {/* Summary */}
          <Summary sizing={sizing.summary} classes={classes}></Summary>

          <Box sx={{ width: sizing.rightSection }}>
            <Box
              sx={{
                display: "flex",
                padding: 0.5,
                backgroundColor: darkTheme.background.darkGrey,
                mt: "-4px",
                borderRadius: "5px",
              }}
            >
              {links.map((link) => {
                return (
                  <div>
                    <Button component={Link} to={link.href} sx={{ ml: "2rem" }}>
                      <Typography
                        sx={{
                          color: loc === link.href ? react : "white",
                          fontSize: "24px",
                          fontFamily: darkTheme.typography.text.fontFamily,
                        }}
                      >
                        {link.page}
                      </Typography>
                    </Button>
                  </div>
                );
              })}
            </Box>

            <br></br>
            <Routes>
              <Route path="/portfolio" element={<AboutPage />}></Route>
              <Route path="/portfolio/about" element={<AboutPage />}></Route>
              <Route
                path="/portfolio/education"
                element={<Education />}
              ></Route>
              <Route path="/portfolio/projects" element={<Projects />}></Route>
            </Routes>

            {/* <AboutPage></AboutPage> */}
            <br />
            {/* <Skills></Skills> */}
            <br />
            {/* <Education/> */}
            {/* <Projects/> */}
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default Main;
