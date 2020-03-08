import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Info from '../components/home/info'
import Footer from '../components/Globals/footer'
import Aboutimage from '../components/Globals/Aboutimage'
const AboutPage = ({data}) => (
  <div>
     <hr/>
     <Aboutimage/>
     <Info/>
     <Footer/>
     </div>
);


export default AboutPage