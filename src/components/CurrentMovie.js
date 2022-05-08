import React, { Component, useEffect, useState } from 'react'
import axios from 'axios'
import { useLocation, Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import {Img} from 'react-image'

function View(){
    let key = "fb280e17a4edec2501eec3c356448bf9"
    const param = useParams()
    const [movie,setMovie] = useState([])
    const [arrmov,setArr] = useState([])
    
    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/movie/${param.id}?api_key=${key}&append_to_response=videos,images`)
        .then(res=>{
            const yy = res.data
            setMovie(yy)
        })
        .catch(err=>console.log(err))
    },[])

    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/movie/${param.id}?api_key=${key}&append_to_response=videos,images`)
        .then(res=>{
            const kk = res.data.genres
            setArr(kk)
        })
        .catch(err=>console.log(err))
    },[])  

    const hh = arrmov.forEach(d=>{
        return(
            <spa>{d.name}</spa>
        )
    })
    console.log(hh)
    return(
        <div className='main'>
        <div className='grid'>
            <Img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} className="cMo-img" alt=""/>
            <div className='m-deskripsi'>
                <p>
                    <h2>{movie.original_title}</h2><br/>
                    <span>{movie.release_date}</span>
                </p>
                <div className='flex-des'>
                    <ul>
                        <li>Genre</li>
                        <li>Nama Produksi</li>
                        <li>Pendapatan</li>
                        <li>Status</li>
                        <li>Vote</li>
                    </ul>
                    <ul>
                        <li>{ 
                      hh
                    
                        }
                        </li>
                        <li>Nama Produksi</li>
                        <li>Pendapatan</li>
                        <li>Status</li>
                        <li>Vote</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className='overview'>
            <p>{movie.overview}</p>
        </div>
        </div> 
    )
                    }


export default class CurrentMovie extends Component {
    render() {
        
        return (
            <div>
                alal
                <View/>
                
            </div>
        )
    }
}
