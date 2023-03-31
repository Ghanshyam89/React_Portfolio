import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GithubIcon from '@material-ui/icons/GitHub'
import EmailIcon from '@material-ui/icons/Email'
import "../styles/Home.css"

function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h3>Hi, This is Ghanshyam Prajapati</h3>
        <div className='prompt'>
          <p> I'm a Tech-Enthusiast willing to learn, unlearn and relearn in the tech Industry with a knack for growth.</p>
          <LinkedInIcon />
          <EmailIcon />
          <GithubIcon />
        </div>
      </div>
      <div className='skills'>
        <h3>Skills</h3>
        <ol className='list'>
          <li className='item'>
            <h4>Front-End</h4>
            <span>HTML, CSS, JavaScript & Bootstrap</span>
          </li>
          <li className='item'>
            <h4>Back-end</h4>
            <span>Spring, Springboot & MySQL</span>
          </li>
          <li className='item'>
            <h4>Languages</h4>
            <span>Java, Python & C</span>
          </li>
          <li className='item'>
            <h4>Infrastructure and Development</h4>
            <span>Visual Studio Code, Git, GitHub, Gitlab & Linux</span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home