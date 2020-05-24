import React from 'react';
import './Level.scss';

function Level(props) {
  return (
    <div className="game">
        
        {
          props.gameStart.user === true ?

          <div>
           <div className="field">
             <div className="box">
               <div className="title first">
                 You picked
               </div>
               <div className={"circle first " + props.gameStart.figureUser}></div>
             </div>
             
              <div className="message desc">
                <div className="title">{props.messageTotal}</div>
                  <button onClick={() => props.handleClickAgain()}>play again</button>
              </div> 
             
              <div className="box">
                <div className="title">
                  The house picked
                </div>
                <div className={"circle second " + props.gameStart.randomFigure}></div>
              </div>
           </div>

            <div className="message mob">
              <div className="title">{props.messageTotal}</div>
                <button onClick={() => props.handleClickAgain()}>play again</button>
            </div>
          </div>
           : 
          <div className={props.elements.length === 3 ? 'game__box triangle' : 'game__box pentagon'}>
              {
                props.elements.map((el, i) => (
                <div className={'circle ' + el} key={i} onClick={() => props.handleClickFigure(el)}></div>
                )) 
              }
          </div>
        }
    </div>
  );
}

export default Level;
