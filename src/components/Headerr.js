import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import {Redirect} from 'react-router-dom';

export default class Header extends Component {
    constructor(props) {
      super(props)
      this.state = {
        display:false,
        title:"MOVT",
        kata_kunci:""
      }
      this.Show = this.Show.bind(this)
      this.SetKataKunci = this.SetKataKunci.bind(this)
      this.Submit = this.Submit.bind(this)
    }
    SetKataKunci(e){
      this.setState({
       kata_kunci : e.target.value 
    })
    }
    Submit(e){
      e.preventDefault()
      this.setState({
        kata_kunci : this.state.kata_kunci
      })
      console.log( this.state.kata_kunci)
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
            </div> 
            <div className='tengah'>
                <div className='inputan'>
                    <div className='search'>
                      <form onSubmit={this.Submit}>
                      <input  name="keySearch" placeholder='Search Movies' onChange={this.SetKataKunci}></input>
                      <button type="submit"><i class="fas fa-search"></i></button>
                      </form>
                    </div>
                </div>
            </div>
            <div className='kanan'>
                <div className='pro link'>
                  <a href="">LikeList</a>
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
