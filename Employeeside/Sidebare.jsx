//Sidebar.jsx
import React, { useState } from 'react'
import 
{BsPersonGear,BsGrid1X2Fill,  BsPersonFillCheck, BsPeopleFill, 
    BsPersonVcard }
 from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';
// import ExitToAppIcon from '@mui/icons-material/ExitToApp';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import Collapse from '@mui/material/Collapse';
// import ListItemText from '@mui/material/ListItemText';
// import ListItemButton from '@mui/material/ListItemButton';
// import List from '@mui/material/List';
// import ExpandMore from '@mui/icons-material/ExpandMore';
// import ExpandLess from '@mui/icons-material/ExpandLess';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';



function Sidebare({openSidebarTogglee, OpenSidebarr}) {


    const [open, setOpen] = React.useState(true);
    const [opens, setOpens] = React.useState(true);


    const navigate = useNavigate();


    const handleLogout = () => {
      navigate('/adlogin');
      console.log('Logout clicked');
    };

    const handleClick = () => {
        setOpen(!open);
      };

      const manageClick = () => {
        setOpens(!opens);
      };
  
    const fontSizeStyle = { fontSize: '1rem' }; 
  return (
    <aside id="sidebar" className={openSidebarTogglee ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
               <BsPersonGear/>  TalentHRM
                            </div>
            <span className='icon close_icon' onClick={OpenSidebarr}></span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="/dashee">
                    <BsGrid1X2Fill className='icon' /> Dashboard
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="/eprofile">
                    <BsPersonVcard className='icon'/> Profile
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="/leave">
                    <BsPersonVcard className='icon'/>Leave Calender
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="/grievance">
                    <BsPersonVcard className='icon'/>Grievances
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="/rules">
                    <BsPersonVcard className='icon'/> Rules & Regulations
                </a>
            </li>
            {/* <li className='sidebar-list-item'>
            
                        <ListItemButton onClick={handleClick}>
        
        <BsPeopleFill className='icon' />        
        
        <ListItemText primary="Leave" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <li className='sidebar-list-item'><a href='/Employeedetails'>
            <ListItemText primary="Add Employee" /></a></li>
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
          <li className='sidebar-list-item'><a href='/Employeeview'>
            <ListItemText primary="Employee View" /></a></li>          
            </ListItemButton>
            </List>
        </Collapse>
        
        </li>
        <li className='sidebar-list-item'>
            
            <ListItemButton onClick={manageClick}>

<BsPersonFillCheck className='icon' />        

<ListItemText primary="Training Details" />
{opens ? <ExpandLess /> : <ExpandMore />}
</ListItemButton>
<Collapse in={opens} timeout="auto" unmountOnExit>
<List component="div" disablePadding>
<ListItemButton sx={{ pl: 4 }}>
<li className='sidebar-list-item'><a href='/Training'>
<ListItemText primary="Training remarks" /></a></li>
</ListItemButton>
<ListItemButton sx={{ pl: 4 }}>
<li className='sidebar-list-item'><a href='/Viewtraining'>
<ListItemText primary="Training View" /></a></li>          
</ListItemButton>
</List>
</Collapse> */}

{/* </li> */}
            <li >
            <button onClick={handleLogout} style={fontSizeStyle} className='button'>
                  <PowerSettingsNewIcon fontSize="small" /> Logout
                </button>
              
            </li>
        </ul>
    </aside>
  )
}

export default Sidebare