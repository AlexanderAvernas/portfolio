import React from 'react';

const phoneNumber = "0707237966"

function Footer() {
  return (
    <footer className='FooterContainer'>
      <div className='ContactContainer'>
        <h4 className='ContactHeader'>Contact</h4>
        <ul className='FooterInfoContainer'>
          <li className='FooterInfo'>Mobile: <a className='FooterLinks' href={`tel:${phoneNumber}`}>{phoneNumber}</a></li>
          <li className='FooterInfo'>Email: <a className='FooterLinks' href="mailto:Alexander.avernas@hotmail.se">Alexer.aver@hotmail.se</a></li>
          <li className='FooterInfo'>LinkedIn: <a className='FooterLinks' href='https://www.linkedin.com/in/alexander-avern%C3%A4s-3aa752251/' target="_blank" rel="noopener noreferrer">My profile</a></li>
        </ul>
      </div>
      <div className='FooterText'>
        &copy; {new Date().getFullYear()} AlexanderAvernas
      </div>
    </footer>
  );
}

export default Footer;
