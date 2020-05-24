import React from 'react';
import './Modal.scss';

function Modal(props) {
  return (
    <div className="modal">
        <div className="modal__box">
                <div className="modal__head">
                    <div className="title">Rules</div>
                    <div className="close" onClick={() => props.show()}></div>
                </div>

                <div className="modal__body">
                    <div className={props.rule === 3 ? 'image triagle' : 'image pentagon'}></div>
                </div>
        </div>
    </div>
  );
}

export default Modal;
