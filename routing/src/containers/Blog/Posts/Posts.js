import React, {Component} from 'react';
import axios from "../../../axios";
import {Link, Route} from "react-router-dom";

import './Posts.css';

import Post from "../../../components/Post/Post";
import FullPost from "../FullPost/FullPost";

class Posts extends Component {

  state = {
    posts: [],
    selectedPostId: null,
    error: false
  }

  componentDidMount() {
    axios.get('/posts')
      .then(response => {
        const posts = response.data.slice(0, 4);
        const updatedPosts = posts.map(post => {
          return {
            ...post,
            author: 'Author name'
          }
        });
        this.setState({posts: updatedPosts});
        // console.log( response );
      })
      .catch(error => {
        console.log(error);
        // this.setState({error: true});
      });
  }

  postSelectedHandler = (id) => {
    // this.setState({selectedPostId: id});
    //programmatically link to path
    // this.props.history.push(`/posts/${id}`);
  }

  render() {

    let posts = <p style={{textAlign: 'center'}}>Something went wrong!</p>;
    if (!this.state.error) {
      posts = this.state.posts.map(post => {
        return <Link key={post.id} to={'/posts/' + post.id}>
          <Post
            title={post.title}
            author={post.author}
            clicked={() => this.postSelectedHandler(post.id)}/>
        </Link>;
      });
    }

    return (
      <div>
        <section className="Posts">
          {posts}
        </section>
        <hr/>
        <Route path={"/posts/:id"} exact component={FullPost} />
      </div>
    );
  }
}

export default Posts;