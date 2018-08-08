//dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';


//  add Components
import Header from './global/Header';
import Content from './global/Content';
import Footer from './global/Footer';

import items  from './data/menu';

class App extends Component {
	 static propTypes={
      children:PropTypes.object.isRequired
   };
  render(){
     const {children} = this.props;
    return (

      <div className="App">
         <Header title="Página nueva con React" items={items} />
         <Content body={children}/>
         <Footer />
      </div>
    );
  }
}

export default App;
