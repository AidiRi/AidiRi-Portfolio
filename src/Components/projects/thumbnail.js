import React from 'react';
import {Link} from 'react-router-dom'
import style from './style.css'

//Props: Title, Img, Desc

const Thumbnail = (props) => {
  return(

    <section style={styles.Container}>
      <Link to="">
        <header style={styles, styles.Header}>{props.Title}</header>
      </Link>

      <Link to="">
        <img style={styles.Img} src={props.Img} alt="Project Image" />
      </Link>

      <p style={styles}>{props.Desc}</p>

    </section>

  )
}

const styles={
  color: "black",
  Header: {
    textAlign: "left",
    color: "black",
    textDecoration: "underline",
    fontWeight: "bold",
    fontSize: "20px",
  },
  Img: {
    display: "block",
    margin: "0 auto",
    maxWidth: "70%",
  },
  Container: {
    display: "flex",
    flexDirection: "column",
    height: "400px",
    width: "90%",
    maxWidth: "400px",
    minWidth: "300px",
    backgroundColor: "whitesmoke",
    textAlign: "center",
    margin: "30px auto",
    padding: "10px",

  }
}

export default Thumbnail;
