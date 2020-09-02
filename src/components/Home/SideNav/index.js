import React, { useState, useEffect } from 'react'
import styles from './SideNav.scss'
import SideNavItems from './SideNavItems'


const SideNav = props => {

  // const items = {
  //   helping: {
  //     title: 'Helping',
  //     list: [
  //       'asd',
  //       'qwe'
  //     ]
  //   }
  // }

    // {
    //   link: '/settings/global/profile/account',
    //   svg: '/media/svg/icons/General/User.svg',
    //   name: 'Account'
    // }

  return (
    <div className='sideNav'>
      <div className='sideNav__logo'>Help-Be-Helped</div>
      <SideNavItems />
    </div>
  )
}

export default SideNav
