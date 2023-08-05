import './index.scss'
import AnimatedLetters from '../AnimatedLetters/index'
import Layout from '../Layout/index'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faNodeJs,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timerId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timerId)
    }
  }, [])
  return (
    <>
      <Layout />
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e', '.']}
              idx={15}
            />
          </h1>
          <p>
            I'm an ambitious Fullstack Developer looking for a role in an
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p>
            I'm self-confident, naturally curious, and perpetually working on
            improving my skills in this area. <br />A fun fact is.... I'm a big
            fan of Boca Juniors that's why the colors yellow and blue
          </p>
          <p>
            I like and I feel more confident in Backend are so, I would like to
            work for a company that provides me with the confidence to make
            mistakes and learn from them because I know that's life- falling
            over and over again...but never give up :)
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faNodeJs} color="#44EB00" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#FF8700" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#0064FF" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#00ECFF" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#FF0C00" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
