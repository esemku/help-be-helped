import React from 'react';
import styles from './Home.scss';
//import {listData} from '../../data/dataStore';
import PropTypes from 'prop-types';
import Header from './Header';
import SideNav from './SideNav';
// import Container from '../Container';
// import Footer from '../Footer';
// import ScrollToTop from '../ScrollToTop';


const Home = props => {
  return (
    <div className='home'>
      <SideNav />
      <div>
        <Header />
        test
      </div>
    </div>
  )
}


export default Home
