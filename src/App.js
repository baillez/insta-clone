import React, { Component } from "react";
import "./App.css";
import Header from "./components/header";
import Post from "./components/post";

class App extends Component {
  render() {
    return (
      <div className="App">
        <section className="App-main">
          <Post
            nickname="Chris"
            avatar="https://pbs.twimg.com/media/DOXI0IEXkAAkokm.jpg"
            caption="Moving the community!"
            image="https://pbs.twimg.com/media/DOXI0IEXkAAkokm.jpg"
          />
          <Post
            nickname="OG"
            avatar="https://www.pexels.com/photo/nature-red-love-romantic-67636/"
            caption="Holding a mic"
            image="https://pbs.twimg.com/media/DOXI0IEXkAAkokm.jpg"
          />{" "}
        </section>
      </div>
    );
  }
}

export default App;
