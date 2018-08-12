import React, { Component } from 'react';
import './SingleBlogPost.css';

import { blogPosts } from '../Blog/blogposts.js';

// Get the Article component
import Article from '../../Article/Article.js';

class SingleBlogPost extends Component {
  render() {
    const post = blogPosts[this.props.match.params.index];
    return (
      <div className="SingleBlogPost">
        <h1>About: {post.title}</h1>
        <Article title={post.title} image={post.image}>
          {
            post.content.map((text, index) => (
              <p key={index}>{text}</p>
            ))
          }
        </Article>
      </div>
    );
  }
}

export default SingleBlogPost;
