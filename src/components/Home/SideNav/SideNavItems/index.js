import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './SideNavItems.scss'


const SideNavItems = props => {

  const items = [
    {
      title: 'HELPING',
      list: [
        {
          title: 'Want to Help',
          icon: 'fas fa-hands-helping',
          link: '/want-to-help'
        },
        {
          title: 'Need Help',
          icon: 'far fa-life-ring',
          link: '/need-help'
        }
      ]
    },
    {
      title: 'OPEN TOPICS',
      list: [
        {
          title: 'Last Helped',
          icon: 'far fa-list-alt'
        },
        {
          title: 'My Questions',
          icon: 'fas fa-question'
        },
        {
          title: 'Interested in',
          icon: 'far fa-eye'
        }
      ]
    }
  ]

  return (
    <div>
      {items.map(item => {
        return(
          <div className='sideNavItems'>
            <h1 className='sideNavItems__title'>{item.title}</h1>
            <ul>
              {item.list.map(l => {
                return (
                  <NavLink to={l.link} key={l.title}>
                    <li className='sideNavItems__list-item'>
                      <i className={`sideNavItems__i-item ${l.icon}`}></i>
                      {l.title}
                      <i class="fas fa-angle-right sideNavItems__i-angle"></i>
                    </li>
                  </NavLink>
                )
              })}
            </ul>
          </div>
        )
      })}
    </div>
  )
}

export default SideNavItems
