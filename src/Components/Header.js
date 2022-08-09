import React from 'react'

import classes from './Header.module.css'
const Header = () => {
  return (
    <div className={classes.MainHeader}>
        <img className={classes.logo} src='nft-logo.png' alt='nft logo not found'></img>
        <p className={classes.links}>
            <a href='#firstSection'>SMB</a>
            <a href='#secondsection'>ROADMAP</a>
            <a href='#thirdsection'>TOKENOMICS</a>
            <a href='#'>ABOUT</a>
            <a href='#'>TERMS</a>
            <a href='#'>MINT</a>
        </p>
        <p className={classes.socialIcons}>
          <a href='#'><img src='icons8-facebook-48.png'></img></a>
          <a href='#'><img src='icons8-telegram-app-48.png'></img></a>
          <a href='#'><img src='icons8-twitter-48.png'></img></a>
        </p>
    </div>
  )
}

export default Header