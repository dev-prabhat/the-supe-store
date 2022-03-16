import React from 'react'
import "./style.css"
import './common.css'

import landing_page from '../assests/images/marvel-tee-1.jpeg';
import men_tshirt from '../assests/images/Marvel-Men-T-Shirt-1.jpeg';
import hoodie_collection from '../assests/images/marvel-men-hoodie-1.jpeg';
import women_tshirt from '../assests/images/marvel-women-tshirt-1.jpeg';
import jacket_collection from "../assests/images/marvel-men-jacket-2.jpg"



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
                    <div className="card-img position-rel margin-xs">
                        <img
                            className="img-responsive"
                            src={men_tshirt}
                            alt="men_clothing"
                        />
                        <div className="card-badge-secondary position-abs top-50 left-0 padding-xs d-100 head-sm">
                            <p className="btn-link"> Men Tshirt</p>
                        </div>
                    </div>
                    <div className="card-img position-rel margin-xs">
                        <img
                            className="img-responsive"
                            src={women_tshirt}
                            alt="women_clothing"
                        />
                        <div className="card-badge-secondary position-abs top-50 left-0 padding-xs d-100 head-sm">
                            <p className="btn-link">Women Tshirt</p>
                        </div>
                    </div>
                    <div className="card-img position-rel margin-xs">
                        <img
                            className="img-responsive"
                            src={hoodie_collection}
                            alt="winter_collection"
                        />
                        <div className="card-badge-secondary position-abs top-50 left-0 padding-xs d-100 head-sm">
                            <p className="btn-link">
                                Hoodie Collection
                            </p>
                        </div>
                    </div>
                    <div className="card-img position-rel margin-xs">
                        <img
                            className="img-responsive"
                            src={jacket_collection}
                            alt="winter_collection"
                        />
                        <div className="card-badge-secondary position-abs top-50 left-0 padding-xs d-100 head-sm">
                            <p className="btn-link">
                                Jacket Collection
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Home