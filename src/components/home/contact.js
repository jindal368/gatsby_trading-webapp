import React from 'react'
import Title from '../Globals/Title';
import { FaLandmark } from 'react-icons/fa';

export default function contact() {
    return (
      <section className="contact py-5">
        <Title title="Contact Us"/>
         <div className="row">
             <div className="col-10 col-sm-8 col-md-6 mx-auto">
              <form action="https://formspree.io/visheshjindal368@gmail.com" method="POST">
               <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  id="name"
                  placeholder="Johny"
                   />
               </div>

               <div className="form-group">
                <label htmlFor="name">Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="email@gmail.com"
                   />
               </div>

               <div className="form-group">
                <label htmlFor="description">Description</
                label><br/>
               <textarea 
               name="description" 
               id="description" 
               rows="5"
               placeholder="Your Query" 
                />
            
               </div>
              <div className="container">
              <button className="btn btn-yellow btn-block mt-7" type="submit">
               Submit
              </button>
              </div>
              </form>
            
             </div>
         </div>
      </section>
    );
}
