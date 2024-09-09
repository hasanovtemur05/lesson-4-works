import  { Component } from 'react'
import "./style.scss"
import work1 from "../../assets/images/work1.svg"
import work2 from "../../assets/images/work2.svg"
import work3 from "../../assets/images/work3.svg"
import work4 from "../../assets/images/work4.svg"
export default class Main extends Component {
  render() {
    return (
      <div className='main'>
          <h1 className='main__title'>Works</h1>
          <div className="main__cards">


            <div className="main__card">
                <div className="card__left">
                    <img src={work1} alt="" />
                </div>
                <div className="card__right">

                <h1 className='card__title'>Designing Dashboards</h1>
                  <p className='card__info'><span>2020</span>   Dashboard</p>
                  <p className='card__desc'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                </div>
            </div>


            <div className="main__card">
            <div className="card__left">
                    <img src={work2} alt="" />
                </div>
                <div className="card__right">

                <h1 className='card__title'>Designing Dashboards</h1>
                  <p className='card__info'><span>2020</span>   Dashboard</p>
                  <p className='card__desc'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                </div>
            </div>


            <div className="main__card">
            <div className="card__left">
                    <img src={work3} alt="" />
                </div>
                <div className="card__right">
                <h1 className='card__title'>Designing Dashboards</h1>
                  <p className='card__info'><span>2020</span>   Dashboard</p>
                  <p className='card__desc'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                </div>
            </div>


            <div className="main__card">
            <div className="card__left">
                    <img src={work4} alt="" />
                </div>
                <div className="card__right">
                  <h1 className='card__title'>Designing Dashboards</h1>
                  <p className='card__info'><span>2020</span>   Dashboard</p>
                  <p className='card__desc'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                </div>
            </div>
          </div>
      </div>
    )
  }
}
