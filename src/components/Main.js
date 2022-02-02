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
        let urlKey = "https://api.themoviedb.org/3/movie/550?api_key=fb280e17a4edec2501eec3c356448bf9";
        // let isi = []
        fetch(urlKey)
        .then(resp=>resp.json())
        .then(result=>{
            this.setState({
                isLoaded:true,
                isi:result
            })
        },
        
        (error)=>{
            this.setState({
                isLoaded:true,
                error
            })

        }
        )
        
        // let result = da_json
        // this.setState({
        //         isLoaded:true,
        //         isi:result.isi
        //     })
    }

    render() {
        // <this.getData/>
        const {isLoaded,isi,error}= this.state
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
                        {isi.map(item=>{
                            return(
                            // console.log(item);
                            <li key={item.id}>
                            {item}
                            </li>
                            )
                        })}
                    
                        </div>
                </div>
            )
        }
    }
}
