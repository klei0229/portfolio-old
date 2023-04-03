import logo from "./logo.svg";
import "./App.css";
import Main from "./Components/Main.js";
import darkTheme from "./themes"

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import { Typography, Box, Button, IconButton } from "@mui/material";
import {makeStyles} from '@material-ui/core/styles';
import AboutPage from "./Components/AboutPage";
import Education from "./Components/Education";
const useStyles = makeStyles((theme)=>({
  
  primaryBox:{
    backgroundColor:'#121212',
    borderRadius: '5px',
    padding:'2rem',
  },
  heading:{
        fontFamily:darkTheme.typography.text.fontFamily,
        fontWeight:'bold'
  },
  
}));




function App() {
  
  const classes = useStyles();
  return (
    <div className="App">
      <Main classes= {classes}></Main>
    </div>
  );
}

export default App;
