import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import '../components/Footer.css'

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <InstagramIcon/>
        <FacebookIcon/>
        <YouTubeIcon/>
      </div>
      <p>&copy; 2022 iaxom.com</p>
    </div>
  );
}

export default Footer;
