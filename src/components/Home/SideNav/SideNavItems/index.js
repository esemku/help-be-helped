import React, { useState, useEffect } from 'react'
import styles from './SideNavItems.scss'


const SideNavItems = props => {

  const items = [
    {
      title: 'HELPING',
      list: [
        {
          title: 'Want to Help',
          icon: 'fas fa-hands-helping'
        },
        {
          title: 'Need Help',
          icon: 'far fa-life-ring'
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
                  <li className='sideNavItems__list-item'>
                    <i className={l.icon}></i>{l.title}
                  </li>
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
