import React from "react";
import logo from '../images/TTlogo.jpg'
import {AppBar,Toolbar,Typography,Button,Box} from '@mui/material'
import {Login, Description} from '@mui/icons-material'



function Navbar(){

    return(
        <AppBar position='static'>
            <Toolbar 
            sx={{
              justifyContent: 'space-between'
            }}>
            <img id="logo-img" src={logo} alt="LOGO"></img>
            <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
        
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <a href="/">Tigers Tournament</a>
          </Typography>

          <Typography
            variant="h1"
            noWrap
            component="a"
            href="/"
            sx={{
              margin: 'auto',
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 1200,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            KRIDABUZZ
          </Typography>
          <Box 
          sx={{
            justifySelf: 'right'
          }}>

          
          <a href="/login"><Button color="inherit" variant="outlined" startIcon={<Login/>}>Login</Button></a>

          <a href="/register"><Button color="inherit" variant="outlined" startIcon={<Description/>}>Register</Button></a>
          </Box>
  

          </Toolbar>
        </AppBar>
    )
}

export default Navbar