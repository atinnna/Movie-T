import React, { Component, useEffect, useState } from 'react'
import axios from 'axios'
import { useLocation, Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import {Img} from 'react-image'
import ReactPaginate from 'react-paginate';
import Header from './Header';
import Footer from './Footer';

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
        <div className='main-cc' style={{margin:0,padding:0,backgroundImage:`url(https://image.tmdb.org/t/p/original/${movie.poster_path})`,backgroundPosition:'center',backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
                 <div className='title-cur'>
                    <h2>{movie.original_title}</h2>
                    <span>{movie.release_date}</span>
                </div>
        <div className='grid'>
            {/* <div className='img-c'><Img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} className="cMo-img" alt=""/></div> */}
            <div className='m-deskripsi'>
                <div className='flex-des'>
                    <ul>
                        <li>Genre</li>
                        <li>Nama Produksi</li>
                        <li>Pendapatan</li>
                        <li>Status</li>
                        <li>Vote</li>
                    </ul>
                    {/* <ul className='sh'>
                        <li>:</li>
                        <li>:</li>
                        <li>:</li>
                        <li>:</li>
                        <li>:</li>
                    </ul> */}
                    <ul>
                        <li>{ arrmov.map(d=>d.name).join(', ')}
                        </li>
                        <li>{arrpro.map(p=>p.name).join(', ')}</li>
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
    const [noHalaman, setHalaman] =useState(0)
    const jumlahBoleh = 10
    const halamanKunjungan = noHalaman * jumlahBoleh
    const jumlahHalaman = Math.ceil(sama.length/jumlahBoleh)
    const displayMovie = sama.slice(halamanKunjungan, halamanKunjungan+jumlahBoleh).map((hasil=>{
        return(
                <Link className='main-link' to={`/currentMovie/${hasil.id}`} key = {hasil.id}>
                    <div className='sim-movie'>
                        <Img src={`https://image.tmdb.org/t/p/original/${hasil.poster_path}`}/> <br/>
                        <span>{hasil.title}</span>
                    </div>
                </Link>
        )
    }))
    const gantiHalaman = ({selected})=>{
        setHalaman(selected)
    }
    return(
        <div className='main-c'>
            <h2>Similar Movies</h2>
            <div className='grid-simir'>
               {displayMovie}
            </div>
            <ReactPaginate 
                previousLabel={"<Prev"}
                nextLabel={">Next"}
                pageCount={jumlahHalaman}
                onPageChange={gantiHalaman}
                containerClassName={"paginationBtn"}
                previousClassName={"prevBtn"}
                nextClassName={"nextLinkBtn"}
                disabledClassName={'paginationDisabled'}
                activeClassName={'paginationActive'}
                />
        </div>
    )
}

function RecomendasiFilm(){
    let key = "fb280e17a4edec2501eec3c356448bf9"
    const parameter = useParams()
    const [rek,setRek] = useState([])
    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/movie/${parameter.id}/recommendations?api_key=${key}&language=en-US&page=1`)
        .then(res=>{
            const result = res.data
            setRek(result)
        })
        .catch(err=>console.log(err))
    },[])
    console.log(rek)
    return  (
        <>
        
        </>
    )
}



export default class CurrentMovie extends Component {
    render() {
        return (
            <>
            <Header/>
            <div>
                <View/>
                <div className='current'>
                <SimilarMovies/>
                </div>
                <RecomendasiFilm/>
            </div>
            <Footer/>
            </>
        )
    }
}
