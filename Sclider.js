import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import PinterestIcon from '@mui/icons-material/Pinterest';
import SearchIcon from '@mui/icons-material/Search';

export default function AnchorTemporaryDrawer({state,setState,toggleDrawer}) {
  

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
     
    >
    <div style={{backgroundColor:'black'}}>
     <div style={{alignItems:'center',height:'100px'}}>
        <form style={{display:'flex',paddingTop:'25px'}}>
        <input placeholder="Search..." type="text" style={{border:0,height:'30px',marginLeft:'15px'}}/>
        <button type="submit" style={{border:0}}><i ><SearchIcon/></i></button>
        </form>
     </div>
     <div style={{height:'1px',backgroundColor:'white'}}></div>
     <div style={{color:'white',marginLeft:'15px',height:'150px'}}>
        <p>Featured</p>
        <p>What to Watch</p>
        <p>Latest News and Reviews</p>
     </div>
     <div style={{height:'1px',backgroundColor:'white'}}></div>
     <div style={{color:'#00dcff',marginLeft:'15px'}}>
        <p>Contact Us</p>
        <p>Privacy Policy</p>
        <p>About Us</p>
        <p>Fact Checking Policy</p>
        <p>Corrections Policy</p>
        <p>Ethics Policy</p>
        <p>DMCA Take Down Policy</p>
        <p>Editorial Policy</p>
        <p>Owenership Policy</p>
        <p>Terms of Use</p>
     </div>
     <div style={{display:'flex',justifyContent:'space-around',marginTop:'15px'}}>
        <i style={{backgroundColor:'red'}}><FacebookIcon/></i>
        <i style={{backgroundColor:'red'}}><XIcon/></i>
        <i style={{backgroundColor:'red'}}><PinterestIcon/></i>
     </div>
    </div>
    </Box>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
