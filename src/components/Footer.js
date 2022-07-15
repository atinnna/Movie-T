import React from 'react'

export default function Footer() {
  return (
    <footer>
        <div className="grid-footer">
            <div className='sosmed'>
                <h3>Contact Me!</h3>
               <span> <i class="fas fa-envelope"></i>&nbsp;&nbsp;&nbsp;atinn433@gmail.com</span>
                <br/>
                <a href='https://github.com/flyyroot'><i class="fab fa-github" aria-hidden="true"></i></a>
                {/* <li><a href='https://twitter.com/rest_restfiew'><i class="fa fa-twitter" aria-hidden="true"></i></a></li> */}
                <a href='https://www.instagram.com/n____atin/'><i class="fab fa-instagram" aria-hidden="true"></i></a>
               
            </div>
            <div className='sosmed'>
                <h3>Subscribe</h3>
                <p>Masukkan email untuk mendapatkan notifikasi</p>
                <input type='email' name='email-user'/>
            </div>
        </div>
        <hr/>
    </footer>
  )
}
