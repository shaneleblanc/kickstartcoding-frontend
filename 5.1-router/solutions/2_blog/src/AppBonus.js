import React, { Component } from 'react';
import './App.css';

import Article from './components/Article/Article.js';

const blogPosts = [
  {
    title: "Peanut",
    image: "https://i.imgur.com/b6jayEW.png",
    content: [
      `A peanut allergy is very common and could cause a serious and possibly
      fatal reaction. You should avoid any kind of nut, even artificial. Also
      be mindful of dishes that may be cooked in peanut oil.`,
      `Some unexpected sources of peanuts: Chili, Egg rolls, Hot sauce, Pesto,
      Gravy, Salad dressing, Pancakes, Specialty pizzas, Some vegetarian food
      products advertised as meat substitutes`,
    ],
  },
  {
    title: "Milk",
    image: "https://i.imgur.com/Fy8H565.png",
    content: [
      `A milk allergy is different than lactose intolerance. Cow milk and
      products should be avoided, as reactions can be mild, such as hives, and
      sometimes life threatening. It is also wise to avoid milk from all other
      animals.`,
      `Some unexpected sources of milk: Baked goods, Luncheon meat, hot dogs,
      sausages Nondairy products (look for casein), Shellfish is sometimes
      dipped in milk to mask the odor, Restaurants sometimes put butter on
      steaks for flavor`,
    ],
  },
];


class App extends Component {
  state = {
    page: '',
  }

  onNavigate = (newPage) => {
    this.setState({
      page: newPage,
    });
  }

  renderWelcome() {
    return (
      <div>
        <h1>Welcome</h1>
        <p>Click on a link to learn more.</p>
      </div>
    );
  }

  renderAbout() {
    return (
      <div>
        <h1>About</h1>
        <p>More than 50 million Americans have an allergy of some kind.  Food
        allergies are estimated to affect 4 to 6 percent of children and 4
        percent of adults, according to the Centers for Disease Control and
        Prevention.</p>

        <p>Food allergy symptoms are most common in babies and children, but
        they can appear at any age. You can even develop an allergy to foods
        you have eaten for years with no problems. Learn more about the types
        of food allergies.</p>
      </div>
    );
  }

  renderBlog() {
    return (
      <div>
        <h1>Blog</h1>
        {
          blogPosts.map((post, index) => (
            <Article title={post.title} image={post.image} key={index}>
              {
                post.content.map((text, index) => (
                  <p key={index}>{text}</p>
                ))
              }
            </Article>
          ))
        }
      </div>
    );
  }

  renderContribute() {
    return (
      <div>
        <h1>Contribute</h1>
        <p>Contribute to the blog!</p>
      </div>
    );
  }

  renderContent() {
    if (this.state.page === '') {
      return this.renderWelcome();
    } else if (this.state.page === 'about') {
      return this.renderAbout();
    } else if (this.state.page === 'blog') {
      return this.renderBlog();
    } else if (this.state.page === 'contribute') {
      return this.renderContribute();
    } else {
      return (
        <h1>404</h1>
      );
    }
  }
  render() {
    return (
      <div className="App">
        <div className="App-navigation">
          <h1 className="App-title">Allergy Blog</h1>
          <a onClick={() => this.onNavigate('')}>Welcome</a>
          <a onClick={() => this.onNavigate('about')}>About</a>
          <a onClick={() => this.onNavigate('blog')}>Blog</a>
          <a onClick={() => this.onNavigate('contribute')}>Contribute</a>
        </div>

        <div className="App-mainContent">
          {this.renderContent()}
        </div>

        <div className="App-sidebar">
          <img src="https://i.imgur.com/9iZAYQu.png" alt="steth" />
          <p>Do you have food allergies? Do you know someone with food
          allergies, or prepare food for people who might have allergies?
          Knowing which allergies to watch out for is essential for keeping
          people healthy and averting possibly life-threatening
          disasters.</p>
        </div>

      </div>
    );
  }
}

export default App;
