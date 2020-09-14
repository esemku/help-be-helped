import React from 'react'
// import { toAbsoluteUrl } from '../../../../../_metronic/_helpers'
import styles from './Layout.scss';
import { NavLink } from 'react-router-dom'


export const Layout = ({ children }) => {
  return (
    <div className="layout">
      <div className="layout__aside-wrapper">
        <div className="layout__aside">
          <NavLink to='/'>
            <div className="layout__logo">
              <img src="/media/images/auth/logo-letter-1.png" alt="logo"/>
            </div>
          </NavLink>
          <div className='layout__article'>
            <h1>Welcome to<br/>Help-Be-Helped!</h1>
            <p>
              The ultimate Bootstrap, Angular 8, React & VueJS admin theme
              framework for next generation web apps.
            </p>
          </div>
          <footer>
            <span>© 2020 esemcode</span>
            <a href=''>Privacy</a>
            <a href=''>Legal</a>
            <a href=''>Contact</a>
          </footer>
        </div>
      </div>

      <div className='layout__main'>
        <div className='layout__main-acc'>
          <div>
            <span>Dont have an account yet?</span>
            <NavLink to='/auth/register'>
              <a href=''>Sign Up!</a>
            </NavLink>
          </div>
        </div>
        <div className='layout__main-children'>{children}</div>
      </div>
    </div>
  )
}

export default Layout
