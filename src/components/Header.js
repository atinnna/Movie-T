import React, { Component } from 'react';


export default class Header extends Component {
    Navbar(){
      return(
        <div className="nav">
            <div className='kiri'>
              <i className="fas fa-bars"></i>
              <a href="">
              <button onClick="show">IMDb</button>
              </a> 
            </div> 
            <div className='tengah'>
                <div className='inputan'>
                    <div className='category'>
                      All
                    </div>
                    <div className='search'>
                      <input  name="" placeholder='Search IMDb'></input>
                    </div>
                    <div className='s'>
                      <i class="fas fa-search"></i>
                    </div>
                </div>
            </div>
            <div className='kanan'>
                <div className='pro link'>
                  <a href="">IMDbPro</a>
                </div>
                <div className='watch link'>
                <a href="">WatchList</a>
                </div>
                <div className='signIn link'>
                <a href="">Sign In</a>
                </div>
            </div>
        </div>
      )
    }
  render() {
    return( 
    <div>
      <this.Navbar/>
    </div>
    )
  }
}
