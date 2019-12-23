import React from 'react';
import Article from './blogs/article'

const Blog = (props) => {
  return(
  <main>
    <Article Title={"Read This Blog Post"} Summary={"This is a really thorough and creative summary of this blog post. "}/>
    <Article Title={"Read This Blog Post"} Summary={"This is a really thorough and creative summary of this blog post. "}/>
    <Article Title={"Read This Blog Post"} Summary={"This is a really thorough and creative summary of this blog post. "}/>
  </main>
  )
}

export default Blog
