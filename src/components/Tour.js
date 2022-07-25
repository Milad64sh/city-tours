import React, { Component } from 'react';
import '../App.css';
export default class Tour extends Component {
  state = {
    showInfo: false,
  };
  handleInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo,
    });
  };
  render() {
    const { id, img, name, city, info } = this.props.tour;
    const { showInfo } = this.state;
    const { removeTour } = this.props;
    return (
      <article className='tour'>
        <div className='img-container'>
          <img src={img} alt='city tour co' />
          <span className='close-btn' onClick={() => removeTour(id)}>
            <i className='fas fa-window-close'></i>
          </span>
        </div>
        <div className='tour-info'>
          <h3>{city}</h3>
          <h4>{name}</h4>
          <h5>
            info{' '}
            <button className='info-btn' onClick={this.handleInfo}>
              <i className='fas fa-caret-square-down'></i>
            </button>
          </h5>
          {showInfo && <p>{info}</p>}
        </div>
      </article>
    );
  }
}
