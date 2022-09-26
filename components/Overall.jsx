import React from 'react'
import { ReactSVG } from 'react-svg';

const Overall = props => {
  const size = props.size;
  // if (typeof document !== 'undefined') {
  //   const locals = document.getElementsByClassName(location);
  //   for (let local of locals) local.style.fill = '#aa44bb';
  // }
  const clickHandler = event => {
    const location = event.target.classList[0];
    props.clickHandler(location);
  }

  return (
    <div className={`Overall-${size}`}>
      <ReactSVG src='/classifiedSVG/overall_classified.svg' onClick={clickHandler}/>
    </div>
  )
}

export default Overall