import React, { Component } from 'react';
import imageHeaderDesktop from '../images/image-header-desktop.jpg';
import './statsCard.css';

class StatsCard extends Component {
  state = {
    stats: [
      { id: '0', amount: '10k+', label: 'COMPANIES'},
      { id: '1', amount: '314', label: 'TEMPLATES'},
      { id: '2', amount: '12M+  ', label: 'QUERIES'}
    ]
  }

  render() { 
    const stats = this.state.stats;

    return (
      <div className='full-screen'>
        <div className='stats-card'>
          <img src={ imageHeaderDesktop } alt='header' className='image-header'/>
          <div className='padding'>
            <h1 className="text-title text-white">Get <span className='text-purple'>insights</span> that help your business grow.</h1>
            <p className='text-description  text-white-75'>Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.</p>
            <div className='stats'>
              {  stats.map( stat => (
                <span key={stat.id} className='stat'>
                  <h3 className='text-amount text-white'>{ stat.amount }</h3>
                  <p className='text-label text-white-60'>{ stat.label }</p>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
 
export default StatsCard;