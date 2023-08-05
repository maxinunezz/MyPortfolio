import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import Layout from '../Layout'
import { faCopy } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import rickandmorty from '../../assets/images/rickandmorty.png'
import videogames from '../../assets/images/videogames.jpg'
import hotelhunt from '../../assets/images/hotelhunt.png'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timerId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timerId)
    }
  }, [])

  const emailToCopy = 'Maxicbapl@gmail.com'

  const handleCopyEmail = () => {
    const textarea = document.createElement('textarea')
    textarea.value = emailToCopy
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    document.body.removeChild(textarea)
    alert('Email copied to clipboard!')
  }

  const handleImageClick = (url) => {
    window.open(url, '_blank')
  }

  return (
    <>
      <Layout />
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e', '.']}
              idx={15}
            />
          </h1>
          <p>
            Thank you very much for visiting my website. I'm just starting out
            in the world of programming, so I'm open to any opportunity for
            growth that may arise. If you would like to get in touch with me.
            <br /> My email address is ~~ {emailToCopy}
            <button onClick={handleCopyEmail} className="email">
              <FontAwesomeIcon icon={faCopy} />
            </button>
            <br />
            <br />
            The pictures that you can see on the right, if you touch it, you can
            see some of my projects codes!!! <br />
            First one is my first SPA, i used an api of rick and morty where you
            can see all of characters of the show and the information of them!!!
            <br />
            Second one is my final solo project, i did an app of videogames
            where you can find any game of the api rest, or create your own
            videogame!!! add to favorites, use some filters and more! <br />
            The last one is my final project working on team, we used: Frontend:
            Typescript, Tailwind and Zustand. <br />
            Backend: Node.js and Express. <br />
            Also i have a video of it, you can check it
            <a
              href="https://www.youtube.com/watch?v=TeSnAzw3Ko0"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
            !!
          </p>
        </div>
        <div className="image-container">
          <img
            src={rickandmorty}
            alt="RickandMorty project"
            onClick={() =>
              handleImageClick('https://github.com/maxinunezz/rick_y_morty')
            }
          />
          <img
            src={videogames}
            alt="videogames project"
            onClick={() =>
              handleImageClick(
                'https://github.com/maxinunezz/VIDEOGAMES-FROTEND'
              )
            }
          />
          <img
            src={hotelhunt}
            alt="hotelhunt project"
            onClick={() =>
              handleImageClick('https://github.com/maxinunezz/HotelHunt')
            }
          />
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
