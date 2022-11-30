import React from 'react'
import './header.css'
import People from '../../assets/people.png'
import ai from '../../assets/ai.png'

const Header = () => {
  return (
    <div className='gpt__header section__padding' id='home'>
      <div className='gpt__header-content'>
          <h1 className='gradient__text'>
              Let's build something amazing with GPT-3 openAI
          </h1>
          <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
          </p>
          <div className='gpt__header-content__input'>
              <input type='email' placeholder='Your Email Address here'/>
              <button type='button'>Get Started</button>
          </div>
          <div className='gpt__header-content__people'>
              <img src={People} alt='people'/>
              <p>1400 people has requested to visit in last 24 hours</p>
          </div>
      </div>
      <div className='gpt__header-image'>
        <img src={ai} alt='ai'/>
      </div>
    </div>
  )
}

export default Header