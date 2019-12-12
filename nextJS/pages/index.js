import React, {Component} from 'react';
import Link from 'next/link'
import Router from 'next/Router'
import User from "../components/User";

class IndexPage extends Component {

  static getInitialProps(context) {
    console.log(context);

    return {};
  }

  render() {

    return (
      <div>
        <h1>The Main index page</h1>
        <p>GO to <Link href="/auth"><a>Auth</a></Link></p>
        <button onClick={() => Router.push('/auth')}>Go to Auth</button>
        <hr/>
        <User name="Name" age="100" />
      </div>
    );
  }
}

export default IndexPage;