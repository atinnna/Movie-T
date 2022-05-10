import React, { Component, useEffect, useState } from 'react'
import axios from 'axios'
import { useLocation, Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import {Img} from 'react-image'

function View(){
    let key = "fb280e17a4edec2501eec3c356448bf9"
    const param = useParams()
    const [movie,setMovie] = useState([])
    const [arrmov,setGenre] = useState([])
    const [arrpro,setProduction] = useState([])
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
            const genr = res.data.genres
            setGenre(genr)
        })
        .catch(err=>console.log(err))
    },[])    
    
    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/movie/${param.id}?api_key=${key}&append_to_response=videos,images`)
        .then(res=>{
            const pc = res.data.production_companies
            setProduction(pc)
        })
        .catch(err=>console.log(err))
    },[])  

  
    return(
        <>
        <div className='main' style={{margin:0,padding:0,backgroundImage:`url(https://image.tmdb.org/t/p/original/${movie.poster_path})`,backgroundPosition:'center',backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
                 <div className='title-cur'>
                    <h2>{movie.original_title}</h2>
                    <span>{movie.release_date}</span>==
                </div>
        <div className='grid'>
            <Img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} className="cMo-img" alt=""/>
            <div className='m-deskripsi'>
                <div className='flex-des'>
                    <ul>
                        <li>Genre</li>
                        <li>Nama Produksi</li>
                        <li>Pendapatan</li>
                        <li>Status</li>
                        <li>Vote</li>
                    </ul>
                    <ul>
                        <li>:</li>
                        <li>:</li>
                        <li>:</li>
                        <li>:</li>
                        <li>:</li>
                    </ul>
                    <ul>
                        <li>{ arrmov.map(d=><span>{d.name}, </span>)}
                        </li>
                        <li>{ arrpro.map(p=><span>{p.name}, </span>)}</li>
                        <li>{movie.revenue}</li>
                        <li>{movie.status}</li>
                        <li>{movie.vote_average} dari {movie.vote_count} orang</li>
                    </ul>
                </div>
                <div className='overview'>
                    <h2>Overview</h2>
                    <p>{movie.overview}</p>
                </div>
            </div>
        </div>
        </div> 
       
       
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
