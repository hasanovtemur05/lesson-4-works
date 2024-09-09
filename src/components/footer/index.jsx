import  { Component } from 'react'
import "./style.scss"
import fasebook from "../../assets/images/fasebook.svg"
import insta from "../../assets/images/insta.svg"
import twinter from "../../assets/images/twinter.svg"
import inn from "../../assets/images/in.svg"
export default class Footer extends Component {
  
  render() {
    return (
      <div className='container'>
          <div className='footer'>
                <div className='footer__icon'>
                <img src={fasebook} alt="" />
                <img src={insta} alt="" />
                <img src={twinter} alt="" />
                <img src={inn} alt="" />
                </div>
                <p>
                Copyright ©2020 All rights reserved 
                </p>
          </div>
      </div>
    )
  }
}
