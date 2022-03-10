import React from 'react'
import Navigation from '../components/Navigation'
import "./style.css"
import './common.css'


import landing_page from '../assests/images/landing_page_image-min.jpg';
import men_clothing from '../assests/images/men-clothing-thumbnail-min.jpg';
import winter_collection from '../assests/images/winter-collection-min.jpg';
import women_clothing from '../assests/images/women-clothing-thumbnail-min.jpg';



const Home = () => {
    return (
        <div class="grid-container">
            <Navigation />
            <div class="main-section">
                <div class="container d-flex">
                    <div class="card-img position-rel margin-xs">
                        <img
                            class="img-responsive"
                            src={men_clothing}
                            alt="men_clothing"
                        />
                        <div
                            class="card-badge-secondary position-abs top-50 left-0 padding-xs d-100 head-sm"
                        >
                            <a class="btn-link" href="/pages/productPage/productPage.html">
                                Men Collection
                            </a>
                        </div>
                    </div>

                    <div class="card-img position-rel margin-xs">
                        <img
                            class="img-responsive"
                            src={women_clothing}
                            alt="women_clothing"
                        />
                        <div
                            class="card-badge-secondary position-abs top-50 left-0 padding-xs d-100 head-sm"
                        >
                            <a class="btn-link" href="/pages/productPage/productPage.html">
                                Women Collection
                            </a>
                        </div>
                    </div>

                    <div class="card-img position-rel margin-xs">
                        <img
                            class="img-responsive"
                            src={winter_collection}
                            alt="winter_collection"
                        />
                        <div
                            class="card-badge-secondary position-abs top-50 left-0 padding-xs d-100 head-sm"
                        >
                            <a class="btn-link" href="/pages/productPage/productPage.html">
                                Winter Collection
                            </a>
                        </div>
                    </div>

                    <div class="card-img position-rel margin-xs">
                        <img
                            class="img-responsive"
                            src={men_clothing}
                            alt="men_clothing"
                        />
                        <div
                            class="card-badge-secondary position-abs top-50 left-0 padding-xs d-100 head-sm"
                        >
                            <a class="btn-link" href="/pages/productPage/productPage.html">
                                Men Collection
                            </a>
                        </div>
                    </div>

                    <div class="card-img position-rel margin-xs">
                        <img
                            class="img-responsive"
                            src={winter_collection}
                            alt="winter_collection"
                        />
                        <div
                            class="card-badge-secondary position-abs top-50 left-0 padding-xs d-100 head-sm"
                        >
                            <a class="btn-link" href="/pages/productPage/productPage.html">
                                Winter Collection
                            </a>
                        </div>
                    </div>
                </div>

                <div class="container">
                    <img
                        class="img-responsive"
                        src={landing_page}
                        alt="landing_page"
                    />
                </div>
            </div>
        </div>
    )
}

export default Home