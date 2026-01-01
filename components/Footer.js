import React from 'react';

const phoneNumber = "0707237966"

function Footer() {
  return (
    <footer className='FooterContainer'>
      <div className='ContactContainer'>
        <h4 className='ContactHeader'>Contact</h4>
        <ul className='FooterInfoContainer'>
          <li className='FooterInfo'>
            <span className='FooterInfoLabel'>Mobile</span>
            <a className='FooterLinks' href={`tel:${phoneNumber}`}>{phoneNumber}</a>
          </li>
          <li className='FooterInfo'>
            <span className='FooterInfoLabel'>Email</span>
            <a className='FooterLinks' href="mailto:alexanderavernas@gmail.com">alexanderavernas@gmail.com</a>
          </li>
          <li className='FooterInfo'>
            <span className='FooterInfoLabel'>LinkedIn</span>
            <a className='FooterLinks' href='https://www.linkedin.com/in/alexander-avern%C3%A4s-3aa752251/' target="_blank" rel="noopener noreferrer">View my profile →</a>
          </li>
        </ul>
      </div>
      <div className='FooterText'>
        &copy; {new Date().getFullYear()} Alexander Avernäs. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;