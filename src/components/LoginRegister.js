import React, { Component,useState } from 'react'
import * as z from 'zod'
import {useForm} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import Header from './Header'
import axios from 'axios'
const pengguna = z.object({
    nama:z.string({message:'nama harus huruf'}).min(5,{message:'Minimal harus 5 angka'}),
    email:z.string({message:'email harus huruf'}).email({message:'format email salah'}),
    password:z.string({message:'password harus berupa huruf'}).min(8,{message:"minimal jumlah pasword 8"}),
    konfirmasiPassword:z.string({message:'password harus berupa huruf'}).min(8,{message:"minimal jumlah pasword 8"})
}).refine(res=>res.password===res.konfirmasiPassword,{
    message:'Passwprd tidak sama',
    path:['konfirmasiPassword']
})
const onSubmit = (data)=>{
    axios.post('http://localhost:4000/auth',{
        nama:data.nama,
        email:data.email,
        password:data.password
    })
    window.location = '/login';
}
function Register(){
    const {register,handleSubmit, formState:{errors}} = useForm({
        resolver:zodResolver(pengguna)
    })
    const [val,valState] = useState('')
    return(
        <>
        <div className='log'>
        <div className='log-title'>                 
        <h2>Sign In to MovBi</h2>
        </div>
        <form className='login' onSubmit={handleSubmit(onSubmit)} method='post'>
            <div className='form-group'>
                <label>Username</label>
                <input type="text" className='form-control' name="nama" {...register('nama',{required:true})} onChange={(event)=>valState(event.target.value)}/>
                {errors.nama?.message && <p>{errors.nama?.message}</p>}
            </div>
            <div className='form-group'>
                <label>Email</label>
                <input type="text" className='form-control' email="nama" {...register('email',{required:true})} onChange={(event)=>valState(event.target.value)}/>
                {errors.email?.message && <p>{errors.email?.message}</p>}
            </div>
            <div className='form-group'>
                <label>Password</label>
                <input type="password" className='form-control' name="password" {...register('password',{required:true})} onChange={(event)=>valState(event.target.value)}/>
                {errors.password?.message && <p>{errors.password?.message}</p>}
            </div>
            <div className='form-group'>
                <label>Konfirmasi Password</label>
                <input type="password" className='form-control' name="konfirmasiPassword" {...register('konfirmasiPassword',{required:true})} onChange={(event)=>valState(event.target.value)}/>
                {errors.konfirmasiPassword?.message && <p>{errors.konfirmasiPassword?.message}</p>}
            </div>
            <div className='form-group'>
                <button type="submit">Sign In</button>
            </div>
        </form>
    </div>
    </>
    )

}
export default class LoginRegister extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Register/>
            </div>
        )
    }
}

