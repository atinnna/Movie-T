import React, { useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
function DispKategori(){
    const [movie,setMovie] = useState([])
    const negara = {
        "indonesia":"id",
        "korea":"ko",
        "jepang":"ja",
        "china":"zh"
    } 
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
                <Link to={`/negara/${negara.indonesia}`}>
                <li>Indonesia</li>
                </Link>
                <Link to={`/negara/${negara.korea}`}>
                <li>Korea</li>
                </Link>
                <Link to={`/negara/${negara.jepang}`}>
                <li>Jepang</li>
                </Link>
                <Link to={`/negara/${negara.china}`}>
                <li>China</li>
                </Link>
               
              </ul>
          </div>
        </div>
    )
}

function Navbar(){
    const [state,setState] = useState({
        display:true,
        title:"MOvBI",
        kata_kunci:""
    })
    if(state.display===false){
        return(          
            <div className='kiri'>
                <button  onClick={()=>setState(()=>{
                    if(state.display === false){
                        return{display:true}
                      }
                      else{
                        return{display:false}
                        }
                })}> <i className="fas fa-bars"></i></button>
                <span>{state.title}</span>
                <DispKategori/>
            </div> 
        )
    }
    else{
        return(
            <div className='kiri'>
                 <button onClick={()=>setState(()=>{
                    if(state.display === false){
                        return{display:true}
                      }
                      else{
                        return{display:false}
                        }
                })}> <i className="fas fa-bars"></i></button>
                <span>{state.title}</span>
            </div> 
        )
    }
   
}

export default function Header() {
      return(
        <div className="nav">
        <Navbar/>
        <div className='tengah'>
                <div className='inputan'>
                    <div className='search'>
                      <form>
                      <input  name="keySearch" placeholder='Search Movies'></input>
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
    )
}
