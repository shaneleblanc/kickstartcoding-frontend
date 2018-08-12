import React, { Component } from 'react';
import './SingleBlogPost.css';
import { Helmet } from 'react-helmet';

import { blogPosts } from '../Blog/blogposts.js';

// Get the Article component
import Article from '../../Article/Article.js';

class SingleBlogPost extends Component {
  render() {
      let post = blogPosts[this.props.match.params.postId];
      // this needs updating!
    console.log('rendering single blog post', this.props.match.params);
    return (
      <div className="SingleBlogPost">
        <p>Debug: params data coming in as: {this.props.match.params.postId}</p>
        <Helmet>
            <title>{post.title}</title>
        </Helmet>
        <Article title={post.title} image={post.image}>
          <p>{post.text}</p>
        </Article>
      </div>
    );
  }
}

export default SingleBlogPost;
