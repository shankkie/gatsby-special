---
title: Gatsby App for CC!
slug: gatsby-CC
author: Shankar Veerakandhan
---

# Gatsby Special App


### Adding CSS with emotion
`npm i @emotion/core @emotion/styled gatsby-plugin-emotion`

create a gatsby-config.js file and add gatsby-plugin-emotion into plugins object


### Rendering Site Metadata
* Add `siteMetaData: { title: 'title''}` inside config file.
* Also, `npm i gatsby-plugin-react-helmet react-helmet`

react-helmet is a library for modifying the head of an html doc in React. Allows to set title, meta tags, open cards description or Twitter Cards
gatsby-plugin-react-helmet: server side rendering with helmet

### MDX
- is a way to enable using React Components inside of markdown.
- `npm i gatsby-plugin-mdx @mdx-js/mdx @mdx-js/react` needs to be installed to make mdx up and running
- inside the config file, 
```
    { 
        resolve: 'gatsby-plugin-mdx', 
        options: {
            defaultLayouts: {
                default: './src/components/layout.js'
            }
        }
    }
```

### Writing post in mdx
- install `npm i gatsby-source-filesystem`

gatsby file system is a way to use local files as part of GraphQL data layer.

### graphql query for getting single mdx
```
query($slug: String!) {
  mdx( frontmatter: { slug: { eq: $slug}}) {
    frontmatter {
      slug
      author
    }
  }
}
```

query Variables 
```
{
  "slug": "second-post"
}
```