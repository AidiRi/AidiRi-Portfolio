import React from 'react';
import {BlankIcon, SpareIcon} from './icons'
//TODO: Create Icon component for each contact icon to feed details/props into
//<Icon Title={} Link={} Svg={}/>
const Contact = (props) => {
  return(
    <div>
      <a title="Link 1" href="http://www.https://github.com/AidiRi" target="_blank">
        <BlankIcon/>
      </a>
      <a title="Link 2" href="http://www.https://github.com/AidiRi" target="_blank">
        <BlankIcon/>
      </a>
      <a title="Link 3" href="http://www.https://github.com/AidiRi" target="_blank">
        <BlankIcon/>
      </a>
      <a title="Link 4" href="http://www.https://github.com/AidiRi" target="_blank">
        <BlankIcon/>
      </a>
      <a title="Link 5" href="http://www.https://github.com/AidiRi" target="_blank">
        <BlankIcon/>
      </a>
    </div>

  )
}

const styles ={
    Header: {

    },
};

export default Contact;
