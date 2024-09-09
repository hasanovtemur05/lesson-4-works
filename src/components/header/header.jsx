import  { Component } from 'react'
import "./style.scss"
export default class header extends Component {
  render() {
    return (
      <div className='header'>
        <ul className='header__list'>
          <li className='header__item'>
            <a href="https://lesson-4-blog.vercel.app/" className='header__link'>Blog</a>
          </li>
          <li className='header__item'>
            <a href="" className='header__link'>Works</a>
          </li>
          <li className='header__item'>
            <a href="" className='header__link'>Contact</a>
          </li>
        </ul>
      </div>
    )
  }
}
