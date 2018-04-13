
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import './css/Header.css';
import logo from './images/logo.svg'


class Header extends Component {
 
  static propTypes = {
      title: PropTypes.string.isRequired,
      items: PropTypes.array.isRequired
     };
  render() {
    const { title, items} = this.props;
    return (
      <div className="header">
        <header className="Logo">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{title}</h1>
          <ul className="menu">
            { items && items.map((item, key )=>
              <li key={key}><Link to={item.url}>{item.title}</Link></li>)}
          </ul>
        </header>
          
      </div>
    );
  }
}

export default Header;
