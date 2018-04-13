import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './css/Footer.css';

class Footer extends Component {
	static propTypes = {
		copyright: PropTypes.string
	};
  render() {


  	const {copyright = '&copy; react 2018'} = this.props;
    return (
      <div className="Footer">
        <p dangerouslySetInnerHTML={{__html: copyright }}></p>
          
      </div>
    );
  }
}

export default Footer;
