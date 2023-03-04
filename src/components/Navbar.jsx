import React from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  } from '@fortawesome/free-brands-svg-icons'
import { faSquarePollVertical, faCaretDown, faUser, faUsers } from '@fortawesome/free-solid-svg-icons'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { faUserCheck } from '@fortawesome/free-solid-svg-icons'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function Navbar() {
  /*Our Communities*/
  const [anchorEl1, setAnchorEl1] = React.useState(null);
  const open1 = Boolean(anchorEl1);
  const handleClick1 = (event) => {
    setAnchorEl1(event.currentTarget);
  };
  const handleClose1 = () => {
    setAnchorEl1(null);
  };
  /*For Election Data*/
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
      <div className='container'>
        <nav className='menu'>
          <ul>
            <li className='logo'>
              <FontAwesomeIcon className='logo_mod' icon={faSquarePollVertical} /><span>Hernalytics</span>
            </li>
            <li>
              <Link to="/About" className='about-link'>ABOUT US</Link>
            </li>
            <li className='list_menu'>
            <Button sx={{ fontWeight: 'bold', fontSize: '15px', color: 'white' }}
        id="basic-button"
        aria-controls={open1 ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open1 ? 'true' : undefined}
        onClick={handleClick1}
      >
        Our Communities<FontAwesomeIcon  className='caretdown' icon={faCaretDown}  />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl1}
        open={open1}
        onClose={handleClose1}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose1}><FontAwesomeIcon className='OC' icon={faUser} />General User</MenuItem>
        <MenuItem onClick={handleClose1}><FontAwesomeIcon className='OC' icon={faUsers} />Election Candidates</MenuItem>
        <MenuItem onClick={handleClose1}><FontAwesomeIcon className='OC' icon={faUserPlus} />Decide To Run(DTR)</MenuItem>
        <MenuItem onClick={handleClose1}><FontAwesomeIcon className='OC' icon={faUserCheck} />Reporters</MenuItem>
      </Menu>
            </li>
            <li>
            <Button sx={{ fontWeight: 'bold', fontSize: '15px', color: 'white' }}
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        ELECTION DATA<FontAwesomeIcon className='caretdown' icon={faCaretDown} />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Election Day Live Updates</MenuItem>
        <MenuItem onClick={handleClose}>Post-Election Analysis</MenuItem>
      </Menu>
            </li>
            <li>
            <Link to="/About" className='about-link'>E-BUDDY</Link>
            </li>
            <li>
            <Link to="/About" className='about-link'>VEO PLATFORM</Link>
            </li>
            <li>
            <Link to="/About" className='about-link'>LOGIN</Link>
            </li>
            <li>
            <button type="button" className="btn btn-primary border-0">SIGN UP</button>
            </li>
          </ul>
        </nav>
      </div>
  )
}
