import {React} from 'react'
import { ReactSVG } from 'react-svg';

const Specific = (props) => {
  const loc = `/classifiedSVG/${props.loc}_classified.svg`;

  return (
    <ReactSVG src={loc} wrapper='div' className={props.loc} />
    )
}

export default Specific