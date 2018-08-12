import React, { Component } from 'react';
import './SingleBlogPost.css';

// Get the Article component
import Article from '../../Article/Article.js';

class SingleBlogPost extends Component {
  state = {
    post: null,
  }

  componentDidMount() {
    console.log('need to load', this.props.match.params.index);

    // Modify this...
    fetch('/api/' + this.props.match.params.index)
      .then(response => response.json())
      .then(data => {
        console.log('got data back!', data);
        this.setState({
          post: data.post,
        });
      });
  }

  doDelete = () => {
    fetch('/api/' + this.props.match.params.index + '/delete/', { method:'DELETE' })
      .then(response => response.json())
      .then(data => {
        console.log('got data back!', data);
      });
  }

  render() {
    const post = this.state.post;
    return (
      <div className="SingleBlogPost">
        <h1>Single Post</h1>
        {
          post ? (
            <Article title={post.title} image={post.image}>
              {
                post.content.map((text, index) => (
                  <p key={index}>{text}</p>
                ))
              }
            </Article>
          ) : null
        }

        <button onClick={this.doDelete}>Delete</button>

      </div>
    );
  }
}

export default SingleBlogPost;
