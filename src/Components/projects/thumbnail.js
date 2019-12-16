import React from 'react';
import {Link} from 'react-router-dom'
import './style.css'
//Props: Title, Img, Desc
const Thumbnail = (props) => {
  return(

    <div className="container">
      <Link to="">
        <div className="project-image">
          <img src={props.Img} alt="Project Image" />
        </div>
        <div className="project-title">{props.Title}</div>
        <div className="project-description">{props.Desc}</div>
      </Link>
    </div>

  )
}

export default Thumbnail;
