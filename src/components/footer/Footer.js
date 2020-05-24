import React from 'react';
import './Footer.scss';

function Footer(props) {
  return (
    <div className="footer">
      <div className="footer__box">
        <button onClick={() => props.show()}>Rules</button>
        <button onClick={() => props.goMenu()}>Menu</button>
      </div>
    </div>
  );
}

export default Footer;