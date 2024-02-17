import React from 'react'
import { Box, Typography, Avatar,useTheme, IconButton, Badge } from '@mui/material'
import { useContext } from 'react'
import { ColorModeContext, tokens } from '../../../theme'
import InputBase from '@mui/material/InputBase'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import  DarkModeOutlinedIcon  from '@mui/icons-material/DarkModeOutlined'
import NotificationsOutlined  from '@mui/icons-material/NotificationsOutlined'
import SettingsOutlined  from '@mui/icons-material/SettingsOutlined'
import SearchIcon from '@mui/icons-material/Search';
import  Person2OutlineOutlined  from '@mui/icons-material/Person2Outlined'


const Topbar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);


  return (
    <Box 
    display="flex" justifyContent="space-between"  p={2} 
    >
        <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="10px"
        >
        <InputBase 
        sx={{ml:2, flex:1}} placeholder="Search" />
    <IconButton
    type="button" sx={{p:1}}
    >
    <SearchIcon />
    </IconButton>

    </Box>
    {/* ICONS */}
    <Box display="flex">
    <IconButton
     onClick={colorMode.toggleColorMode}
    >
    {theme.palette.mode === "dark" ? (
    <DarkModeOutlinedIcon /> 
    ) :  (
 <LightModeOutlinedIcon />
    )}
</IconButton>   
    <IconButton>
    <NotificationsOutlined />
    </IconButton>
    <IconButton>
    <SettingsOutlined />
    </IconButton>
    <IconButton>
    <Person2OutlineOutlined />
    </IconButton>

    </Box>


        </Box>
  )
}

export default Topbar