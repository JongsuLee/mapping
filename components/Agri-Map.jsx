import {React, useState} from 'react'
import Overall from './Overall';
import Specific from './Specific';

const AgriMap = () => {
  const [location, setLocation] = useState('');
  if (location !== '') {
    const locals = document.getElementsByClassName(location);
    const overalls = document.getElementsByClassName('overall_classified_svg__overall');
    for (let overall of overalls) overall.style.fill = '#85B66F';
    for (let local of locals) local.style.fill = '#aa33ff';
    document.getElementsByClassName('Agri-Map')[0].style.position = 'relative';
  }
  const loc = location.replace('overall_classified_svg__', '');

  const clickHandler = location => setLocation(location);

  return (
    location === '' ? <div className='Agri-Map'>
                        <Overall size='large' loc={location} clickHandler={clickHandler}/> 
                      </div> :
                      <div className='Agri-Map'>
                        <Overall size='small' loc={location} clickHandler={clickHandler}/> 
                        <Specific loc={loc}/>
                      </div>
  )
}

export default AgriMap