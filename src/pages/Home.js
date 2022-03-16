import React from 'react'
import data from "../Data"
import "./style.css"
import './common.css'

import landing_page from '../assests/images/marvel-tee-1.jpeg';



const Home = () => {
    return (
        <div className="grid-container">
            <main className="main-section">
                <section className="banner-image-container">
                    <img
                        className="img-responsive"
                        src={landing_page}
                        alt="landing_page"
                    />
                </section>
                <p className='text-lg text-center'>Collections</p>
                <section className="container d-flex">
                    {
                        data.map(({ id, image, name }) => (
                            <div className="card-img position-rel margin-xs" key={id}>
                                <img
                                    className="img-responsive"
                                    src={image}
                                    alt="men_clothing"
                                />
                                <div className="card-badge-secondary position-abs top-50 left-0 padding-xs d-100 head-sm">
                                    <p className="btn-link">{name}</p>
                                </div>
                            </div>
                        ))
                    }
                </section>
            </main>
        </div>
    )
}

export default Home