import React, { Fragment} from 'react';
import Thumbnail from './projects/thumbnail'
import Img from './projects/logo512.png'

const Projects = () => {
  return(
  <Fragment>
    <Thumbnail Title={"Title"} Img={Img} Desc={"This is a project description."}/>
    <Thumbnail Title={"Title"} Img={Img} Desc={"This is a project description."}/>
    <Thumbnail Title={"Title"} Img={Img} Desc={"This is a project description."}/>
  </Fragment>
  )
}

export default Projects
