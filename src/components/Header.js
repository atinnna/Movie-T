import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
    constructor(props) {
      super(props)
      this.state = {
        display:false,
        title:"MOV-T"
      }
      this.Show = this.Show.bind(this)
    }

    Show(){
      this.setState((state)=>{
        if(state.display === false){
          return{display:true}
        }
        else{
          return{display:false}
          }
        }
      )
    }

    NavAfter(){
      return(
        <div className="kategory_movies">         
          <div className='umum'>
              <ul>
                <li className='li-first'>Movies</li>
                <li>Top 100 Movies</li>
                <li>Top Box Office</li>
                <li>Top K-Drama</li>
                <li>Top Animation</li>
                <li>Coming Soon</li>
              </ul>
          </div>
          <div className='genre'>
              <ul>
                <li className='li-first'>Genre</li>
                <li>Drama</li>
                <li>Horror</li>
                <li>Animation</li>
                <li>K-Drama</li>
                <li>Series</li>
              </ul>
          </div>
          <div className='genre-country'>
              <ul>
                <li className='li-first'>Country</li>
                <li>Indonesia</li>
                <li>Korea</li>
                <li>Amerika</li>
                <li>Jepang</li>
                <li>China</li>
              </ul>
          </div>
        </div>
      )}
    
    NavT = ()=>{
      return(
        <div className="nav">
            <div className='kiri'>
                <button  onClick={this.Show}> <i className="fas fa-bars"></i></button>
                <a href="" className='btn'>
                {this.state.title}
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
                  <a href="">{this.state.title}Pro</a>
                </div>
                <div className='watch link'>
                  <a href="">WatchList</a>
                </div>
                <div className='signIn link'>
                  <a href="">Sign In</a>
                </div>
            </div>
    </div>
      )}
    Navbar=()=>{
      if(this.state.display === false){
      return(
        <>
          <this.NavT/>
      </>  
      )}
    else{
      return(
        <>
          <this.NavT/>
          <this.NavAfter/>
       </>
    )}}
    
render() {
  return( 
  <div>
    <this.Navbar/>
  </div>
  )}
}
