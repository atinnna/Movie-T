import React, { Component } from 'react'
import axios from 'axios'
import { useLocation, Link } from "react-router-dom";
import { useParams } from 'react-router-dom';

const View = ()=>{
    let key = "fb280e17a4edec2501eec3c356448bf9"
    const param = useParams()
    const getApi = axios.get(`https://api.themoviedb.org/3/keyword/${param.id}?api_key=${key}`)
    return(

        <>
        <p>{param.id}</p>
        </>
    )
}
export default class CurrentMovie extends Component {
    render() {
        
        return (
            <div>
                <View/>
                
            </div>
        )
    }
}
