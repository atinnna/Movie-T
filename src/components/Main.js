import React, { Component } from 'react'
import {Img} from 'react-image'
import Header from './Header'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
function Penc(){
    // let navigate = useNavigate()
    let {keySearch} = useParams()  
}
export default class componentName extends Component {
    constructor(props) {
      super(props)
      this.state = {
         isLoaded : false,
         isi : [],
         top:[],
         terbaru:[],
         error:null,
      
      }
    } 
    componentDidMount(){
        let key = "fb280e17a4edec2501eec3c356448bf9"
        Promise.all([
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&sort_by=popularity$page=1`),
        fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`),
        fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${key}&language=en-US`),
        
        ])
        .then(([resp1,resp2,resp3])=>
      
        Promise.all([resp1.json(),resp2.json(),resp3.json()]))
        .then(([resul,topk,trending])=>{
            this.setState({
                isLoaded:true,
                isi:resul.results,
                top:topk.results,
                trending: trending.results
            })
        },
        (error)=>{
            this.setState({
                isLoaded:true,
                error
            })
            })
            
        }
    
    GetPopular=()=>{
        console.log(`Iyeyey ${this.state.isi}`);
        return(
        <div className="main">
            <div className="head-mo">    
                <div className='hmk'>
                    <h3>POPULAR MOVIES</h3> 
                    <p>Film Popular minggu ini </p>
                </div>
               <div className='hmkk'>
                   <button>Selengkapnya</button>
               </div>
            </div>
            <div className='pop-mo'>
                {
                  
                    this.state.isi.map(item=>{
                        return(
                            <div className='pop-mov' key ={item.id}>
                                <div className='title_mo'>               
                                        <Img className="img-movies" src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} width={100}/>
                                        <div className="one_mo"><i class="fas fa-heart"></i> <span>{item.vote_average}</span></div>
                                    </div>
                                <div className='title-year'>{item.original_title}<br/>({item.release_date})</div>
                            </div>
                        ) 
                    })
                }
            </div>
        </div>
        )}

    GetTop = ()=>{
        return(
            <div className="main">
                <div className="head-mo">
                    <div className='hmk'>
                        <h3>Top MOVIES</h3>
                        <p>Film dengan Rating Terbanyak</p>
                    </div>
                    <div className='hmkk'>
                        <button>Selengkapnya</button>
                    </div>
                </div>
                <div className='pop-mo'>
                    {
                        this.state.top.map(item=>{
                            return(
                                <div className='pop-mov' key ={item.id}>
                                <div className='title_mo'>               
                                        <Img className="img-movies" src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} width={100}/>
                                        <div className="one_mo"><i class="fas fa-heart"></i> <span>{item.vote_average}</span></div>
                                    </div>
                                <div className='title-year'>{item.original_title}<br/>({item.release_date})</div>
                            </div>
                            ) 
                        })
                    }
                </div>
            </div>
            )}
    
    GetTrending = ()=>{
        return(
            <div className="main">
                <div className="head-mo">
                    <div className='hmk'>
                    <h3>Trending MOVIES</h3>
                        <p>Film yang trending</p>
                    </div>
                    <div className='hmkk'>
                        <button>Selengkapnya</button>
                    </div>
                    </div>
                <div className='pop-mo'>
                    {
                        this.state.trending.map(item=>{
                            return(
                            <div className='pop-mov' key ={item.id}>
                            <Link to={`/currentMovie/${item.id}`} key = {item.id}>
                                <div className='title_mo'>               
                                        <Img className="img-movies" src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} width={100}/>
                                        <div className="one_mo"><i class="fas fa-heart"></i> <span>{item.vote_average}</span></div>
                                    </div>
                                <div className='title-year'>{item.original_title}<br/>({item.release_date})</div>
                            
                           </Link>
                           </div>
                          
                            ) 
                        })
                    }
                </div>
            </div>
        )
    }

    
    render() {
        const {isLoaded,error}= this.state
        if(error){
            return (
                <div>
                    Error: {error.message}
                </div>
            )
        }
        else if(!isLoaded){
            return(
                <div>
                    Loading
                </div>
            )
        }
        else{
            return(
                <>
                <this.GetTrending/>
                <this.GetPopular/>
                <this.GetTop/>
                
                </>
            )
        }
    }
}
