import React from 'react'
import {Link} from 'gatsby'
import Title from '../Globals/Title'
export default function info() {
    return (
       <section className="py-5">
       <div className="container">
           <Title title="our story"></Title>
       <div className="row">
        <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
            Today’s Artificial Intelligence (AI) has far surpassed the hype of blockchain and quantum computing. The developers now take advantage of this in creating new Machine Learning models and to re-train the existing models for better performance and results.
            </p>
            <Link to="/about">
           <button className="btn text-uppercase btn-yellow">about page</button>

            </Link>

            </div>    
       </div>    
       </div>
       </section>
    )
}
