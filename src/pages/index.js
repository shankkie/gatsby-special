import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout'
import usePosts from '../hooks/use-posts';
import PostPreview from '../components/post-preview';


export default () => {
  const posts = usePosts();

  return (
    <Layout>
      <h2>Code Charger Platform using Gatsby!</h2>
      <p>welcomes you...</p>
      <Link to="/about">&rarr; About section</Link>

      <h2>Read My Blogs</h2>

      {posts.map( post => (
        <PostPreview key={post.slug} post={post}/>
      ))}

    </Layout>
)};
