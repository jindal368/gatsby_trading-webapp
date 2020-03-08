import React from 'react'

export default function footer() {
    return (
       <footer className="footer py-3">
        <div class="container">
        <div class="row">
         <div className="col-10 mx-auto col-md-6 text-yellow text-center text-capitalize">
             <h3>
               all right reserved &copy;{new Date().getFullYear().toString}  
             </h3>
             </div>   
        </div>
        </div>
       </footer>
    )
}
