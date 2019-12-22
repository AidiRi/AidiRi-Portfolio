import React from 'react';
import {Link} from 'react-router-dom'
import './style.css'
//Props: Title, Img, Desc
const Thumbnail = (props) => {
  return(

    <section className="project-container">
      <Link to="">
        <header className="project-title">{props.Title}</header>
      </Link>

      <Link to="">
        <img className="project-image" src={props.Img} alt="Project Image" />
      </Link>

      <p className="project-description">{props.Desc}</p>

    </section>

  )
}

export default Thumbnail;
