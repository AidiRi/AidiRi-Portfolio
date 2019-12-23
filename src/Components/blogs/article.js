import React from 'react';

const Article = (props) => {
  return(
      <section>
        <header>{props.Title}</header>
        <p>{props.Summary}</p>
      </section>
  )
}

export default Article;
