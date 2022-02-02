import React, { Component } from 'react'
import {Img} from 'react-image'

export default class componentName extends Component {
    constructor(props) {
      super(props)
      this.state = {
         isLoaded : false,
         isi : [],
         error:null
      }
    } 
    componentDidMount(){
        let key = "fb280e17a4edec2501eec3c356448bf9"
        // let image  = `https://api.themoviedb.org/3/movie/{movie_id}/images?api_key=${key}&language=en-US`
        let urlKey = `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity$page=1`;
        fetch(urlKey)
        .then(resp=>resp.json())
        .then(resul=>{
            this.setState({
                isLoaded:true,
                isi:resul.results
            })
        },
        (error)=>{
            this.setState({
                isLoaded:true,
                error
            })
        })
    }

    render() {
        const {isLoaded,isi,error}= this.state
        // console.log(isi.results)
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
                <div className="popular">
                    <div className='pop-mo'>
                        <h3>Popular Movies</h3>
                        <p>This week's top Movies</p>
                        {
                            isi.map(item=>{
                                return(
                                    <div className='pop-mov' key ={item.id}>
                                    <li >{item.original_title}</li>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            )
        }
    }
}
