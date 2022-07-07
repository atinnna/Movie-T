import React, { Component, useEffect, useState } from 'react'
import axios  from 'axios'
import {useParams} from 'react-router-dom'
import {Img} from 'react-image'
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate'
import Header from './Header';
import imgj from '../florian-klauer-LmkaYtMpNS8-unsplash.jpg'

function Genre() {
  const key = "fb280e17a4edec2501eec3c356448bf9"
  const param = useParams()
  const [movies,setMovies]= useState([])
  const [no,noHal] = useState(1)
  const fetchData = ()=>{
  axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=${param.id}&page=${no}`)
  .then(res=>setMovies(res.data.results)).catch(err=>console.log(err))
  }
  useEffect(()=>{
      fetchData()
  },[no])
  console.log(movies)
  const page = 20
  const curretPage = no*page
  const jmlPage = 10
  const inOnePage = movies
  const changePage = ({selected})=>{
    noHal(selected)
  } 
  return (
    <>
    <div className="head-mo">    
       <div className='hmk'>
           <h3>Kumpulan Film</h3> 
       </div>
   </div>

   <div className='pop-mo'>
       { inOnePage.map(item=>{
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
       pageCount={jmlPage}
       onPageChange={changePage}
       containerClassName={"paginationBtn"}
       previousClassName={"prevBtn"}
       nextClassName={"nextLinkBtn"}
       disabledClassName={'paginationDisabled'}
       activeClassName={'paginationActive'}
       />
   </>
  )
}
export default class Genre_movie extends Component {
  render() {
    return (
      <div class="main" style={{backgroundImage:`url(${imgj})`,backgroundPosition:'center',backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
      <Header/>
      <Genre/>
      </div>
    )
  }
}
