import React, { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import {Img} from 'react-image'
function DispKategori(){
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
          <h2 className='li-first'>Genre</h2>
          <div className='sub-genre'>
          <ul>
                <Link classsName='main-link' to={`/filter/18`}>
                <li>Drama</li>
                </Link>
                <Link classsName='main-link' to={`/filter/27`}>
                <li>Horror</li>
                </Link>
                <Link classsName='main-link' to={`/filter/16`}>
                <li>Animation</li>
                </Link>
                <Link classsName='main-link' to={`/filter/28`}>
                  <li>Action</li>
                </Link>
                <Link classsName='main-link' to={`/filter/12`}>
                  <li>Adventure</li>
                </Link>
            </ul>
            <ul>
                <Link classsName='main-link' to={`/filter/35`}>
                  <li>Comedy</li>
                </Link>
                <Link classsName='main-link' to={`/filter/99`}>
                  <li>documentary</li>
                </Link>
                <Link classsName='main-link' to={`/filter/878`}>
                  <li>Science Fiction</li>
                </Link>
                <Link classsName='main-link' to={`/filter/53`}>
                  <li>Thriller</li>
                </Link>
                <Link classsName='main-link' to={`/filter/10402`}>
                  <li>Music</li>
                </Link>
              </ul>
              </div>
          </div>
    
          <div className='genre-country'>
              <ul>
                <li className='li-first'>Country</li>
                <Link classsName='main-link' to={`/negara/${negara.indonesia}`}>
                <li>Indonesia</li>
                </Link>
                <Link classsName='main-link' to={`/negara/${negara.korea}`}>
                <li>Korea</li>
                </Link>
                <Link classsName='main-link' to={`/negara/${negara.jepang}`}>
                <li>Jepang</li>
                </Link>
                <Link classsName='main-link' to={`/negara/${negara.china}`}>
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
            </div> 
        )
    }
   
}

export default function Header() {
  const [dataAll, setDataAll] = useState([])
  const [searchI, searchItems] = useState("")
  const key ='fb280e17a4edec2501eec3c356448bf9'

    useEffect(()=>{
      axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${searchI}`)
      .then(res=>{
          const hasil = res.data.results
          setDataAll(hasil)
      }).catch(err=>{
          console.log('kosonf') 
      })
    })

    const searchMovies = (mov)=>{
        searchItems(mov)
      }
  const [noHal,setNoHal] = useState(0)
    const jmlBoleh = 6
    const PageNow = noHal*jmlBoleh
    const pageJmlNow = Math.ceil(dataAll.length/jmlBoleh)
    const dataNow= dataAll.slice(PageNow,PageNow+jmlBoleh)
    const gantiHalaman = ({selected})=>{
    setNoHal(selected)
    }
      return(
        <>
        <div className="nav">
        <Navbar/>
        <div class='title'>
          <Link classsName='main-link' to='/'>MovBi</Link></div>
        <div className='tengah'>
                <div className='inputan'>
                    <div className='search'>
                          <input  name="query" placeholder='Search Movies' value={searchI} onChange={(e)=>searchMovies(e.target.value)}></input>
                          <i class="fas fa-search"></i>
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
                  <Link classsName='main-link' to='/loginRegister'>Sign In </Link>
                </div>
            </div>
        </div>
        <div className='pop-mo'>
            {dataAll.length > 1 ? (
                  dataAll.map((item) => {
                      return (
                        <>
                        <div className='pop-mov' key ={item.id}>
                        <Link classsName='main-link' to={`/currentMovie/${item.id}`} key = {item.id}>
                          <div className='title_mo'>               
                                  <Img className="img-movies" src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} width={100}/>
                                  <div className="one_mo"><i class="fas fa-heart"></i> <span>{item.vote_average}</span></div>
                          </div>
                          <div className='title-year'>{item.original_title}<br/>({item.release_date})</div>
                        </Link>
                        </div>
                  </>
                      )
                  })
                ):
                dataAll.map((item) => {
                return(
                <>
                koosong
                </>
                ) }
                )}
          </div>
      </>
         
    )
      }
