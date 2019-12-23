import React from 'react';
import Projects from './Projects'
import Writing from './Blog'
import Contact from './about/contact.js'

const About = (props) => {
  return(
    <section >
      <header> Aidi Rivera </header>
      <p> I make things. Code is one of those things.</p>

      <Contact/>

      <h2>About</h2>
      <p>Cat ipsum dolor sit amet, cereal boxes make for five star accommodation . Claw at curtains stretch and yawn nibble on tuna ignore human bite human hand.</p>
      <p>Wake up wander around the house making large amounts of noise jump on top of your human's bed and fall asleep again kitty scratches couch bad kitty.</p>
      <p>Jump launch to pounce upon little yarn mouse, bare fangs at toy run hide in litter box until treats are fed hiding behind the couch until lured out by a feathery toy bite nose of your human i love cuddles, but scoot butt on the rug.</p>

    </section>
  )
}

const styles={
}

export default About
