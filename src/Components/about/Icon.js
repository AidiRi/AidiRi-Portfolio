import React from 'react';
import {BlankIcon, SpareIcon} from './icons'
//TODO: DEBUG - Title and Link are undefined

const Icon = (props) => {
  return (
    <a title={props.Title} href={props.Link} target="_blank">
      <BlankIcon/>
    </a>
  )
}

// <a title={props.Title} href={props.Link} target="_blank">
//   <BlankIcon/>
// </a>
// <a title="Link 2" href="http://www.https://github.com/AidiRi" target="_blank">
//   <BlankIcon/>
// </a>
// <a title="Link 3" href="http://www.https://github.com/AidiRi" target="_blank">
//   <BlankIcon/>
// </a>
// <a title="Link 4" href="http://www.https://github.com/AidiRi" target="_blank">
//   <BlankIcon/>
// </a>
// <a title="Link 5" href="http://www.https://github.com/AidiRi" target="_blank">
//   <BlankIcon/>
// </a>


export default Icon;
