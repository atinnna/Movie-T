import React, { Component, useEffect, useState } from 'react'
import axios from 'axios'
import Iframe from 'react-iframe'
import { useLocation, Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import {Img} from 'react-image'
import ReactPaginate from 'react-paginate';

function View(){
    let key = "fb280e17a4edec2501eec3c356448bf9"
    const param = useParams()
    const [movie,setMovie] = useState([])
    const [arrmov,setGenre] = useState([])
    const [arrpro,setProduction] = useState([])
    const [vid,setVid] = useState([])
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
    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/movie/${param.id}?api_key=${key}&append_to_response=videos,images`)
        .then(res=>{
            const yy = res.data['videos']['results'][0]['key']
            setVid(yy)
            
        })
        .catch(err=>console.log(err))
    },[])
    const video_url = `"https://www.themoviedb.org/video/play?key=${vid}"`
    console.log(video_url) 
    console.log(vid) 
    return(
        <div className='main' style={{margin:0,padding:0,backgroundImage:`url(https://image.tmdb.org/t/p/original/${movie.poster_path})`,backgroundPosition:'center',backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
                 <div className='title-cur'>
                    <h2>{movie.original_title}</h2>
                    <span>{movie.release_date}</span>
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
                        <li>{arrpro.map(p=><span>{p.name}, </span>)}</li>
                        <li>{movie.revenue}</li>
                        <li>{movie.status}</li>
                        <li>{movie.vote_average} dari {movie.vote_count} orang</li>
                    </ul>
                </div>
                <div className='overview'>
                    <h2>Overview</h2>
                    <p>{movie.overview}</p>
                    <div className='video'>
                        <a href= {`https://www.themoviedb.org/video/play?key=${vid}` } className="a-btn">
                        Lihat Trailer
                        </a>
                    </div>
                </div>
            </div>
        </div>
        </div>        
    )
}

function SimilarMovies(){
    let key = "fb280e17a4edec2501eec3c356448bf9"
    const param = useParams()
    const [sama,setSama] = useState([])
  
    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/movie/${param.id}/similar?api_key=${key}&language=en-US&page=1`)
        .then(result=>{
            const hasil = result.data.results
            setSama(hasil)
        })
        .catch(err=>console.log(err))
    },[])
    console.log(sama)
    // pagination
    const [pageNumber, setPage] =useState(0)
    const movPerPage = 10
    const pagesVisited = pageNumber * movPerPage
    const displayMovie = sama.slice(pagesVisited, pagesVisited+movPerPage).map((hasil=>{
        return(
        <div className='sim-movie'>
            <Img src={`https://image.tmdb.org/t/p/original/${hasil.poster_path}`}/> <br/>
            <span>{hasil.title}</span>
        </div>
        )
    }))

    const pageCount = Math.ceil(sama.length/movPerPage)
    const changePage = ({selected})=>{
        setPage(selected)
    }
    // https://api.themoviedb.org/3/movie/{movie_id}/similar?api_key=<<api_key>>&language=en-US&page=1
    return(
        <div className='main'>
            <h2>Similar Movies</h2>
            <div className='grid-simir'>
               {displayMovie}
             
            </div>
            <ReactPaginate 
                previousLabel={"Previous"}
                nextLabel={"Next"}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"paginationBtn"}
                previousClassName={"prevBtn"}
                nextClassName={"nextLinkBtn"}
                disabledClassName={'paginationDisabled'}
                activeClassName={'paginationActive'}
                />
        </div>
    )
}





export default class CurrentMovie extends Component {
    render() {
            
        return (
            <div>
                <View/>
                <SimilarMovies/>
            </div>
        )
    }
}
