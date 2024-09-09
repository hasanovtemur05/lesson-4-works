import { Component } from 'react'
import Header from './components/header/header';
import Footer from './components/footer';
import Main from './components/main';
export default class App extends Component {

  state = {

  }

  render() {
    return (
      <div className="container mt-3">
        <Header/>
        <Main/>
        <Footer/>
      </div>
    )
  }
}
