import React, { Component } from 'react';

class App extends Component {
  state = {
    articles: [
      {
        title: 'My blog post',
        text: 'This is what I think about the world',
      },
      {
        title: 'Another post',
        text: 'On second thought, everything I said previously was wrong',
      },
    ],
  }

  render() {
    return (
      <div className="App">
          {
            this.state.articles.map(article => (
              <div>
                <h1>{article.title}</h1>
                <p>{article.text}</p>
              </div>
            ))
          }
      </div>
    );
  }
}
