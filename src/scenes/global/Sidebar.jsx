import React, { useEffect } from 'react'
import { useState } from 'react'
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import {Box, IconButton, Typography, useTheme} from "@mui/material";
import {Link} from 'react-router-dom'
import { tokens } from '../../theme';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import  TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import PersonOutlined from '@mui/icons-material/PersonOutlined';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import { Search, SearchOff } from '@mui/icons-material';




const Item = ({ title, to, icon, selected, setSelected }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
      <MenuItem
        active={selected === title}
        style={{
          color: colors.grey[100],
        }}
        onClick={() => setSelected(title)}
        icon={icon}
      >
        <Typography>{title}</Typography>
        <Link to={to} />
      </MenuItem>
    );
  };

  
  
  
  const Sidebar = () => {
      const theme = useTheme();
      const colors = tokens(theme.palette.mode);
      const [collapsed, setCollapsed] = useState(false);
      const [selected, setSelected] = useState('dashboard');
      
      const [width, setWidth] = useState("");

      useEffect(() => {
            const handleResize = () => {
                setWidth(window.innerWidth);
            };
            window.addEventListener("resize", handleResize);
            handleResize();
            return () => {
                window.removeEventListener("resize", handleResize);
            };
        }, []);
        useEffect(() => {
            if (width < 1280) {
                setCollapsed(true);
            } else {
                setCollapsed(false);
            }
        }, [width]);

  return (
    <Box
    sx={{
        "& .pro-sidebar-inner": {
            backgroundColor: `${colors.primary[400]} !important`,
            },
        "& .pro-icon-wrapper": {
            backgroundColor: "transparent !important" 
            },
        "& .pro-inner-item": {
            padding: "5px 35px 5px 20px !important",
            },
            "& .pro-inner-item:hover": {
                color: "lightblue !important",
            },
            "&.pro-menu-item.active" :{
                color: "green !important",
            },
           position: collapsed ? "static" : "",
            top: "0",
            zIndex: "1",
            bottom: "0",
            left: "0",
            
    }}
    >
    <ProSidebar collapsed={collapsed} >
    <Menu iconShape="square">
    <MenuItem
     onClick={() => setCollapsed(!collapsed)}
        icon={collapsed ? <MenuOutlinedIcon /> : undefined} 
        style={{
            margin: "10px 0px 20px 0px",
            color: colors.grey[100],
        }}
    >
        {!collapsed && (
            <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            ml="10px"
            > 
            < Typography variant="h3" color="inherit"
            >
                BOSSU
            </Typography>
            <IconButton onClick={() => setCollapsed(!collapsed)}>
                <MenuOutlinedIcon />
            </IconButton>
            </Box>
        )}  
    </MenuItem>

    {!collapsed && (
        <Box mb="25px">
            <Box display="flex" 
            justifyContent="center"
            alignItems="center"
            >
        <img
         src="./kojo.jpg"
          alt="kojo"
        width="100px"
        height="100px"
        style={{
            borderRadius: "50%",
            objectFit: "cover",
            cursor: "pointer",
        }}
        
        />
            </Box>
            <Box>
                <Typography
                variant="h2"
                color= {colors.grey[100]}
        sx={{m:"10px 0 0 0"}}
        textAlign={"center"}
>
                    Kojo
                </Typography>
                <Typography
                variant="h5"
                color= {colors.greenAccent[500]}
                textAlign={"center"}
                >
                    BOSSU
                </Typography>
            </Box>


         </Box>
    )}
     <Box paddingLeft={collapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Data
            </Typography>
            <Item
              title="Manage Team"
              to="/team"
              icon={< PeopleOutlineOutlinedIcon
              />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Contacts Information"
              to="/contacts"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Invoices Balances"
              to="/invoices"
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Pages
            </Typography>
            <Item
              title="Profile Form"
              to="/form"
              icon={<PersonOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Calendar"
              to="/calendar"
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="FAQ Page"
              to="/faq"
              icon={<HelpOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Charts
            </Typography>
            <Item
              title="Bar Chart"
              to="/bar"
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Pie Chart"
              to="/pie"
              icon={<PieChartOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Line Chart"
              to="/line"
              icon={<TimelineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Geography Chart"
              to="/geography"
              icon={<MapOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
        </ProSidebar>



    </Box>
  )
}

export default Sidebar