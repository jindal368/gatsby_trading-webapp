/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import "./bootstrap.min.css";
import Navbar from './Globals/navbar';
import Background from './Globals/Backgroundimage'

import "./layout.css"

const Layout = ({ children }) => <>
<Navbar/>
<hr></hr>
<Background/>


</>;



Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout
