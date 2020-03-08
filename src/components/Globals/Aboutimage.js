import React from 'react'
import { graphql, StaticQuery } from 'gatsby'


import BackgroundImage from 'gatsby-background-image'

const Aboutimage = ({ back }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "about.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1920,) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <BackgroundImage
          Tag="section"
          className={back}
          fluid={imageData}
        
        >
          <h2 className="aboutimage">
          </h2>
        </BackgroundImage>
      )
    }}
  />
)



export default Aboutimage