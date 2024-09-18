import React, { useState } from "react";
import logo from '../Assests/animemanga250-copy-3.png';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AnchorTemporaryDrawer from "./Sclider";

const Headersection = () => {
  // Drawer state management
  const [state, setState] = useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  // Hover state for menu items
  const [isHovered, setIsHovered] = useState({
    featured: false,
    watch: false,
    news: false,
  });

  // Styles for menu items
  const menuItemStyle = (hover) => ({
    color: hover ? '#dd9933' : 'black',
    textDecoration: hover ? 'underline' : 'none',
    transition: 'color 0.3s ease',
    cursor: 'pointer',
    margin: '0 20px',
  });

  return (
    <div>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        border: '0.5px solid',
        alignItems: 'center',
        padding: '10px',
      }}>
        {/* Left Section: Menu and Logo */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <IconButton
            size="large"
            aria-label="menu"
            onClick={toggleDrawer("left", true)}
            style={{ borderRight: '0.5px solid' }}
          >
            <MenuIcon style={{ color: '#dd9933' }} />
          </IconButton>
          <img src={logo} alt="logo" style={{ height: '60px', marginLeft: '10px' }} />
        </div>

        {/* Middle Section: Navigation */}
        <div style={{ display: 'flex', justifyContent: 'center', fontSize: '18px', fontWeight: 600 }}>
          <div
            style={menuItemStyle(isHovered.featured)}
            onMouseEnter={() => setIsHovered({ ...isHovered, featured: true })}
            onMouseLeave={() => setIsHovered({ ...isHovered, featured: false })}
          >
            Featured
          </div>
          <div
            style={menuItemStyle(isHovered.watch)}
            onMouseEnter={() => setIsHovered({ ...isHovered, watch: true })}
            onMouseLeave={() => setIsHovered({ ...isHovered, watch: false })}
          >
            What to Watch
          </div>
          <div
            style={menuItemStyle(isHovered.news)}
            onMouseEnter={() => setIsHovered({ ...isHovered, news: true })}
            onMouseLeave={() => setIsHovered({ ...isHovered, news: false })}
          >
            Latest News and Reviews
          </div>
        </div>

        {/* Right Section: Search Bar */}
        <div>
          <form>
            <input
              placeholder="Search..."
              type="text"
              style={{ border: 0, width: '200px', marginRight: '5px' }}
            />
            <button type="submit" style={{ border: 0, backgroundColor: 'white' }}>
              <SearchIcon />
            </button>
          </form>
        </div>
      </div>

      {/* Drawer Component */}
      <AnchorTemporaryDrawer state={state} setState={setState} toggleDrawer={toggleDrawer} />
    </div>
  );
};

export default Headersection;
