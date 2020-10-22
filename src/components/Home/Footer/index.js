import React from 'react'
import { useStyles } from './styles'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  const classes = useStyles()

  return (
    <footer className={classes.root}>
      <div>
        <NavLink to=''>
          <span className={classes.span}>About</span>
        </NavLink>
        <NavLink to=''>
          <span className={classes.span}>Team</span>
        </NavLink>
        <NavLink to=''>
          <span className={classes.span}>Contact</span>
        </NavLink>
      </div>
      <div>
        <span className={classes.year}>2020©</span>
        <span className={classes.brand}>Help-Be-Helped</span>
      </div>
    </footer>
  )
}


export default Footer
