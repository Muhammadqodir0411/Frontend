import React, { Component } from 'react'
import {news} from '../../data/news'
import "bootstrap/dist/css/bootstrap.min.css"
export class News extends Component {
  render() {
    return (
      <section>
        <div className="container">
            <h2 className='text-center m-3'>News Categoriys</h2>
            <div className="row">
            {news.map((el, i) => (
              <div key={i} className="col-12 col-sm-6 col-md-4 col-lg-3">
                <img src={el.image} alt="" />
                <h3>{el.title}</h3>
                <p>{el.description}</p>
                <time>{el.date}</time>
              </div>
            ))}
            </div>
        </div>
      </section>
    )
  }
}

export default News