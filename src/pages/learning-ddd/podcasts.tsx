import { graphql, useStaticQuery } from "gatsby"
import React, { FC } from "react"

import Layout from "../../templates/layout"
import Podcast, { PodcastContent } from "../../components/podcast"
import PodcastPlatforms from "../../components/podcast-platforms"
import SEO from "../../components/seo"

const Podcasts: FC = () => {
  const podcasts = useStaticQuery<{
    allContentYaml: { nodes: { sessions: PodcastContent[] }[] }
  }>(graphql`
    query {
      allContentYaml(
        filter: { sessions: { elemMatch: { title: { ne: null } } } }
      ) {
        nodes {
          sessions {
            title
            podcast
          }
        }
      }
    }
  `).allContentYaml.nodes[0].sessions.filter(
    (session) => session.podcast != null
  )

  return (
    <Layout>
      <SEO
        title="Domain-Driven Design podcasts"
        description="A curated list of Domain-Driven Design and Software Architecture related podcasts"
      />
      <div className="w-full flex flex-col items-center">
        <h2 className="my-6 lg:w-2/3 xl:w-1/2">Podcasts</h2>
        <PodcastPlatforms />
        <div className="flex flex-row justify-center">
          <div className="flex flex-row flex-wrap items-center w18/20">
            {podcasts.map((session, index) => {
              return <Podcast key={index} session={session}></Podcast>
            })}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Podcasts
