import React, { Component, useEffect, useState } from 'react'
import axios from 'axios'
import {Img} from 'react-image'
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate' 
import imgj from '../florian-klauer-LmkaYtMpNS8-unsplash.jpg'
import Header from './Header';

function Indonesia(){
    const [movie,setMovie] = useState([])
    const api_key ='fb280e17a4edec2501eec3c356448bf9'
    useEffect(()=>{
        const dd = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_original_language=id`
        axios.get(dd)
        .then(res=>{
            const content = res.data.results
            setMovie(content)
        })
        .catch(err=>console.log(err))
    },[])
    console.log(movie)
    const [noHal,setNoHal] = useState(0)
    const jmlBoleh = 6
    const PageNow = noHal*jmlBoleh
    const pageJmlNow = Math.ceil(movie.length/jmlBoleh)
    const dataNow=  movie.slice(PageNow,PageNow+jmlBoleh)
    const gantiHalaman = ({selected})=>{
    setNoHal(selected)
    }
    return(
        <>
        <div className="head-mo">    
           <div className='hmk'>
               <h3>Indonesia</h3> 
               <p>Film indoneia terbaru</p>
           </div>
          <div className='hmkk'>
              <button>Selengkapnya</button>
          </div>
       </div>
  
       <div className='pop-mo'>
           { dataNow.map(item=>{
               return(
              
                       <div className='pop-mov' key ={item.id}>
                            <Link className='main-link' to={`/currentMovie/${item.id}`} key = {item.id}>
                               <div className='title_mo'>               
                                       <Img className="img-movies" src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} width={100}/>
                                       <div className="one_mo"><i class="fas fa-heart"></i> <span>{item.vote_average}</span></div>
                               </div>
                               <div className='title-year'>{item.original_title}<br/>({item.release_date})</div>
                           </Link>
                       </div>
               )})
           }
       </div> 
        <ReactPaginate 
           previousLabel={"<Prev"}
           nextLabel={">Next"}
           pageCount={pageJmlNow}
           onPageChange={gantiHalaman}
           containerClassName={"paginationBtn"}
           previousClassName={"prevBtn"}
           nextClassName={"nextLinkBtn"}
           disabledClassName={'paginationDisabled'}
           activeClassName={'paginationActive'}
           />
       </>

    )
}

function Popular() {
    const key = "fb280e17a4edec2501eec3c356448bf9"
    const [pop,setPop] = useState([])
    const [judul,deskripsi] = useState({
        title:'POPULAR MOVIES',
        desk:'Film Popular minggu ini'
    })
    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&sort_by=popularity&&language=id-ID&region=ID&page=2`)
        .then(res=>{
            const d = res.data.results
            setPop(d)
        }
        ).catch(err=>console.log(err))
    },[])
    // pagination
    const [no,setNo] = useState(0)
    const jmlisiPerpage = 6
    const currentPage = no*jmlisiPerpage
    const Allpage = Math.ceil(pop.length/jmlisiPerpage)
    const disMov = pop.slice(currentPage,currentPage+jmlisiPerpage)
    const gantiHalaman = ({selected})=>{
        setNo(selected)
    }
        return(
            <>
            <div className="head-mo">    
                <div className='hmk'>
                    <h3>{judul.title}</h3> 
                    <p>{judul.desk}</p>
                </div>
               <div className='hmkk'>
                   <button>Selengkapnya</button>
               </div>
            </div>
            <div className='pop-mo'>
                { disMov.map(item=>{
                    return(
                            <div className='pop-mov' key ={item.id}>
                                 <Link className='main-link' to={`/currentMovie/${item.id}`} key = {item.id}>
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
            <ReactPaginate 
                previousLabel={"<Prev"}
                nextLabel={">Next"}
                pageCount={Allpage}
                onPageChange={gantiHalaman}
                containerClassName={"paginationBtn"}
                previousClassName={"prevBtn"}
                nextClassName={"nextLinkBtn"}
                disabledClassName={'paginationDisabled'}
                activeClassName={'paginationActive'}
                />
            </>
    )
}

function Top() {
    const key = "fb280e17a4edec2501eec3c356448bf9"
    const [top,setTop] = useState([])
    const [judul,deskripsi] = useState({
        title:'TOP MOVIES',
        desk:'Film Top minggu ini'
    })
    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`)
        .then(res=>{
            const d = res.data.results
            setTop(d)
        }
        ).catch(err=>console.log(err))
    },[])

    const [no,setNo] = useState(0)
    const jmlPage = 6
    const currentPage = no*jmlPage
    const jmlPag = Math.ceil(top.length/jmlPage)
    // const Allpage = Math.ceil(top.length/jmlPage)
    const disMov = top.slice(currentPage,currentPage+jmlPage)
    const gantiHalaman = ({selected})=>{
        setNo(selected)
    }
    
        return(
            <>
             <div className="head-mo">    
                <div className='hmk'>
                    <h3>{judul.title}</h3> 
                    <p>{judul.desk}</p>
                </div>
               <div className='hmkk'>
                   <button>Selengkapnya</button>
               </div>
            </div>
            <div className='pop-mo'>
                { disMov.map(item=>{
                    return(
                   
                            <div className='pop-mov' key ={item.id}>
                                 <Link className='main-link' to={`/currentMovie/${item.id}`} key = {item.id}>
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
            <ReactPaginate 
                previousLabel={"<Prev"}
                nextLabel={">Next"}
                pageCount={jmlPag}
                onPageChange={gantiHalaman}
                containerClassName={"paginationBtn"}
                previousClassName={"prevBtn"}
                nextClassName={"nextLinkBtn"}
                disabledClassName={'paginationDisabled'}
                activeClassName={'paginationActive'}
                />
            </>
    )
}

function Trending(){
    const key = "fb280e17a4edec2501eec3c356448bf9"
    const [trending,setTrending] = useState([])
    const [judul,deskripsi] = useState({
        title:'TRENDING MOVIES',
        desk:'Film trending minggu ini'
    })
    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${key}&language=en-US`)
        .then(res=>{
            const d = res.data.results
            setTrending(d)
        }
        ).catch(err=>console.log(err))
    },[])
    const [noHal,setNoHal] = useState(0)
    const jmlBoleh = 6
    const PageNow = noHal*jmlBoleh
    const pageJmlNow = Math.ceil(trending.length/jmlBoleh)
    const dataNow=  trending.slice(PageNow,PageNow+jmlBoleh)
    const gantiHalaman = ({selected})=>{
        setNoHal(selected)
    }
        return(
            <>
             <div className="head-mo">    
                <div className='hmk'>
                    <h3>{judul.title}</h3> 
                    <p>{judul.desk}</p>
                </div>
               <div className='hmkk'>
                   <button>Selengkapnya</button>
               </div>
            </div>
       
            <div className='pop-mo'>
                { dataNow.map(item=>{
                    return(
                   
                            <div className='pop-mov' key ={item.id}>
                                 <Link className='main-link' to={`/currentMovie/${item.id}`} key = {item.id}>
                                    <div className='title_mo'>               
                                            <Img className="img-movies" src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} width={100}/>
                                            <div className="one_mo"><i class="fas fa-heart"></i> <span>{item.vote_average}</span></div>
                                    </div>
                                    <div className='title-year'>{item.original_title}<br/>({item.release_date})</div>
                                </Link>
                            </div>
                    )})
                }
            </div>
            <ReactPaginate 
                previousLabel={"<Prev"}
                nextLabel={">Next"}
                pageCount={pageJmlNow}
                onPageChange={gantiHalaman}
                containerClassName={"paginationBtn"}
                previousClassName={"prevBtn"}
                nextClassName={"nextLinkBtn"}
                disabledClassName={'paginationDisabled'}
                activeClassName={'paginationActive'}
                />
            </>            
    )}




function Movies(){
    const [handling,setHandling] = useState({
        error:null,
        isLoaded: true
    })
    if(handling.error){
        return (
            <div>
                Error: {handling.error.message}
            </div>
        )
    }
    else if(!handling.isLoaded){
        return(
            <div>
                Loading
            </div>
        )
    }
    else{
        return(
            <>
            <Indonesia/>
            <Trending/>
            <Popular/>
            <Top/>
            </>
        )
    }
    
}

export default class componentName extends Component {
    render() {
        return(
        <>
        <Header/>
        <div className="main" style={{backgroundImage:`url(${imgj})`,backgroundPosition:'center',backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
            <Movies/>
        </div>
        </>
        )
    }
}
