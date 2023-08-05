import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import 'animate.css'

import LogoS from '../../assets/images/logo-sa.png'
import './index.scss'

const Logo = () => {
  const bgRef = useRef()
  const solidLogoRef = useRef()
  const [logoLoaded, setLogoLoaded] = useState(false)

  useEffect(() => {
    const tl = gsap.timeline()

    tl.to(bgRef.current, {
      duration: 1,
      opacity: 1,
    }).to(solidLogoRef.current, {
      opacity: 1,
      duration: 1,
      delay: 2,
      ease: 'power4.out',
      onStart: () => {
        setTimeout(() => {
          if (logoLoaded && solidLogoRef.current) {
            solidLogoRef.current.classList.add(
              'animate__animated',
              'animate__hinge'
            )
          }
        }, 6000)

        gsap.to(solidLogoRef.current, {
          rotation: -10,
          duration: 0.5,
          ease: 'none',
        })
      },
    })
  }, [logoLoaded])

  const handleLogoLoad = () => {
    setLogoLoaded(true)
  }

  return (
    <div className="logo-container" ref={bgRef}>
      <img
        ref={solidLogoRef}
        className="solid-logo"
        src={LogoS}
        alt="S"
        onLoad={handleLogoLoad}
      />
    </div>
  )
}

export default Logo
