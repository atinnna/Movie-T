import React, { Component,useState } from 'react'
import * as z from 'zod'
import {useForm} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import Header from './Header'
import axios from 'axios'
import {Link} from 'react-router-dom'
const pengguna = z.object({
    nama:z.string({message:'nama harus huruf'}).min(5,{message:'Minimal harus 5 angka'}),
    password:z.string({message:'password harus berupa huruf'}).min(8,{message:"minimal jumlah pasword 8"}),
   })

function Loginn(){
    const {register,handleSubmit, formState:{errors}} = useForm({
        resolver:zodResolver(pengguna)
    })
    const [val,valState] = useState('')
    const [status,setLoginStatus] = useState('')
    const onSubmit = (data)=>{
        axios.post('http://localhost:4000/auth/login',{
            nama:data.nama,
            password:data.password,
        }).then(response=>{
            if(response.data.message){
                setLoginStatus(response.data.message)
            }
            else{ 
                setLoginStatus(response.data.nama)
                window.location = '/'
            }
        })  
    }
    return(
        <>
        <div className='log'>
        <div className='log-title'>                 
        <h2>Sign In to MovBi</h2>
        <span>{status}</span>
        </div>
        <form className='login' onSubmit={handleSubmit(onSubmit)} method='post'>
            <div className='form-group'>
                <label>Username</label>
                <input type="text" className='form-control' name="nama" {...register('nama',{required:true})} onChange={(event)=>valState(event.target.value)}/>
                {errors.nama?.message && <p>{errors.nama?.message}</p>}
            </div>
            <div className='form-group'>
                <label>Password</label>
                <input type="password" className='form-control' name="password" {...register('password',{required:true})} onChange={(event)=>valState(event.target.value)}/>
                {errors.password?.message && <p>{errors.password?.message}</p>}
            </div>
            <div className='form-group'>
                <button type="submit">Sign In</button>
                <div className="confirmAkun"> Belum punya akun? <Link className="linkh" to={'/loginRegister'}>Register</Link></div>
            </div>
        </form>
    </div>
    </>
    )
}
export default class Login extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Loginn/>
            </div>
        )
    }
}

