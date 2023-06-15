import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Greetings } from '../components/Greetings'
import { stringifyCurrentTime } from '../utils/timerUtils'

const StyledContainer = styled.div`
  position: relative;
  top: 20vh;
  padding-left: 7.5vw;
  color: var(--text-white);
  z-index: 0;
  height: 200px;

  h2 {
    animation-name: text_entrance;
    animation-duration: 3s;
    animation-fill-mode: both;
  }
  p {
    position: relative;
    animation-name: text_entrance;
    animation-duration: 3s;
    animation-fill-mode: both;
  }
  p {
    animation-delay: 1s;
  }
  .styledGreeting {
    animation-delay: 2s;
  }

  @keyframes text_entrance {
    from {
      top: 0px;
      opacity: 0;
    }
    to {
      top: 20px;
      opacity: 1;
    }
  }

  @media (max-width: 615px) {
    padding-left: 3vw;
  }
`

const currentHour = new Date().getHours()

export const Home = () => {
  const stringifiedTime = stringifyCurrentTime()

  const [colourLightness, setTextColour] = useState('...')
  function updateColour() {
    const setLightness = 100 - timeToPercent() / 2
    setTextColour(setLightness)
  }

  function timeToPercent() {
    const total = 235959
    return Math.round((stringifiedTime * 100) / total)
  }

  const [greeting, setGreeting] = useState('loading...')

  function updateGreeting() {
    let displayGreeting
    if (currentHour > 6 && currentHour < 12) {
      displayGreeting = 'Good morning'
    } else if (currentHour < 17) {
      displayGreeting = 'Good afternoon'
    } else {
      displayGreeting = 'Good evening'
    }
    setGreeting(displayGreeting)
  }

  setInterval(() => {
    updateColour()
    updateGreeting()
  }, 1000)

  return (
    <StyledContainer>
      <h2>I am Jonathan Souza.</h2>
      <p>Software Enginner with passion for the web, innovation, and music.</p>
      <br />
      <Greetings greeting={greeting} hsl={colourLightness} />
      <br />
    </StyledContainer>
  )
}
