import React, { Component } from 'react';
import './Blog.css';

import { Link } from 'react-router-dom'

// Get the Article component
import Article from '../../Article/Article.js';

class Blog extends Component {
  state = {
    blogPosts: [],
  }

  componentDidMount() {
    console.log('doing thing');
    fetch('/api/all')
      .then(response => response.json())
      .then(data => {
        console.log('got data back!', data);
        this.setState({
          blogPosts: data.posts,
        });
      });
  }

  render() {
    return (
      <div className="Blog">
        <h1>Blog</h1>
        {
          this.state.blogPosts.map((post, index) => (
            <Article title={post.title} image={post.image} key={index}>
              {
                post.content.map((text, index) => (
                  <p key={index}>{text}</p>
                ))
              }
              <Link to={'/post/' + index}>Read more...</Link>
            </Article>
          ))
        }
      </div>
    );
  }
}

export default Blog;
