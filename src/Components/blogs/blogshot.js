import React from 'react';

const Blogshot = (props) => {
  return(
      <section>
        <header>{props.Title}</header>
        <p>{props.Summary}</p>
      </section>
  )
}

export default Blogshot;
