import {React, useState} from 'react'
import Overall from './Overall';
import Specific from './Specific';

const AgriMap = () => {
  const [location, setLocation] = useState('');
  if (location !== '') {
    const locals = document.getElementsByClassName(location);
    for (let local of locals) local.style.fill = '#aa44bb';
  }

  const clickHandler = location => setLocation(location);

  return (
    location === '' ? <div className='Agri-Map'>
                        <Overall size='large' loc={location} clickHandler={clickHandler}/> 
                      </div> :
                      <div className='Agri-Map'>
                        <Overall size='small' loc={location} clickHandler={clickHandler}/> 
                        <Specific loc={location}/>
                      </div>
  )
}

export default AgriMap