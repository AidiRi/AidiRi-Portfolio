import React, {Fragment} from 'react';
import {BlankIcon, SpareIcon} from './icons';
import IconData from './iconData.json';
import Icon from './Icon'

//TODO: Create Icon component for each contact icon to feed details/props into
//<Icon Title={} Link={} Svg={}/>

const displayData = () => {
  return Object.keys(IconData).map((icon, index) => {
    return <Icon key={index} Title={icon.title} Link={icon.link}/>
  });
};

const Contact = (props) => {
  return (
    displayData()
  )
};

const styles ={
    Header: {

    },
};

export default Contact;
