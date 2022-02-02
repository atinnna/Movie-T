import React, { Component } from 'react'
import {Img} from 'react-image'
import Header from './Header'

export default class componentName extends Component {
    constructor(props) {
      super(props)
      this.state = {
         isLoaded : false,
         isi : [],
         error:null,
      }
    } 
    componentDidMount(){
        let key = "fb280e17a4edec2501eec3c356448bf9"
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&sort_by=popularity$page=1`)
        .then(resp=>resp.json())
        .then(resul=>{
            this.setState({
                isLoaded:true,
                isi:resul.results,
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
        return(
        <div className="main">
            <div className="head-mo">
                <h3>Expore MOVIES</h3>
                <p>This week's top Movies</p>
            </div>
            <div className='pop-mo'>
                {
                    this.state.isi.map(item=>{
                        return(
                            <div className='pop-mov' key ={item.id}>
                                <Img className="img-movies" src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} width={100}/>
                                <div className='title_mo'> 
                                    <div className="one_mo"><i class="fas fa-heart"></i> <span>{item.vote_average}</span></div>
                                    <div className='two-mo'>{item.vote_count} Orang</div>
                                </div>
                                <div className='title-year'>{item.original_title}<br/>({item.release_date})</div>
                            </div>
                        ) 
                    })
                }
            </div>
        </div>
        )}
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
                <Header/>
                <this.GetPopular/>
                </>
            )
        }
    }
}
