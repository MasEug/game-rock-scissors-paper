import React from 'react';
import './Header.scss';

function Header(props) {

  return (
      <div className="header">
        <div className="header__box">
          <div className="elements">
              {
                  props.figures.length !== 0 ? props.figures.map( (el, index) => (
                    <div className="name" key={index}>
                        {el}
                    </div>
                  )) : <div>no data</div>
              }
          </div>

          <div className="count">
              <div className="title">
                Score
              </div>

              <div className="numb">
                {props.count}
              </div>
            </div>
        </div>
      </div>
  );
}

export default Header;
