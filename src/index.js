import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PICHART from './components/pichart';
import Clock from './components/clock'
import Chain from './components/chain'
import Terrain from './components/Terrain'
import Eye from './components/eye'
class Header extends React.Component{
  render() {
    return (
      <div className='header'>
        <div className='logo'>Logo </div>
        <div className='non-logo'>NON- LOGO</div>
      </div>
      )
  }
}
class Footer extends React.Component{
  render() {
    return (
      'Here goes Footer'
    );
  }
}
class Content extends React.Component{
    render() {
      return (
        <div className='content'>
          <div className="animation"><PICHART /></div>
          <div className="animation"><Clock/></div>
          <div className="animation"><Chain/></div>
          <div className="animation"><Terrain/></div>
          <div className="animation"><Eye/></div>
          <div className="animation"></div>
          <div className="animation"></div>


        </div>
      );
    }
  
}
class Page extends React.Component {
  render() {
    return (
     <div className='main'>
       <div><Header/></div>
       <Content/>
       <div className='footer'><Footer/></div>
     </div>
     
    );
  }
}
// ========================================

ReactDOM.render(
  <Page />,
  document.getElementById('root')
);
