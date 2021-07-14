import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import styles from './blog.module.css'
import Layout from '../components/layout'

// http://localhost:8000/___graphql

class AboutIndex extends React.Component {
  render() {
    const siteTitle = 'Rebels'
    const people = get(this, 'props.data.allContentfulPerson.edges')

    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff' }}>
          <Helmet title={siteTitle} />
          <div className={styles.hero}>About</div>
          <div className="wrapper">
            <h2 className="section-headline">Recent articles</h2>
            <ul className="article-list">
              {people.map(({ node }) => {
                return (
                  <li key={node.id}>
                    <h2>{node.name}</h2>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </Layout>
    )
  }
}

export default AboutIndex

export const pageQuery = graphql`
query MyQuery {
  allContentfulPerson {
    edges {
      node {
        id
        name
        shortBio {
          shortBio
        }
      }
    }
  }
}
`