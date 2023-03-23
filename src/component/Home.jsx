import React from 'react'
import bgimg from '../assets/641.jpg'
import Products from './Products'

function Home() {
  return (
    <>
    <div className="hero">
    <div class="card text-white bg-dark border-0">
      <img src={bgimg} class="card-img" alt="Background" height="1290px" />
      <div class="card-img-overlay d-flex flex-column justify-content-center">
        <div className="container">
        <h5 class="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
        <p class="card-text">
          CHECK OUT ALL THE TRENDS
        </p>
        </div>
      </div>
    </div>
    <Products/>
  </div>
    </>
  )
}

export default Home