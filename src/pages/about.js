import React from "react"
import {Link } from 'gatsby';
import Info from '../components/home/info'
import Footer from '../components/Globals/footer'
import Aboutimage from '../components/Globals/Aboutimage'
const AboutPage = ({data}) => (
  <div>
     <hr/>
     <Aboutimage/>
     <Info/>
     <Link to="/">
           <button className="btn text-uppercase btn-yellow">back to homepage</button>
           <hr w-25></hr>
            </Link>

     <Footer/>
     </div>
);


export default AboutPage