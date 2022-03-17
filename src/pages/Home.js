import React from 'react'
import CollectionData from "../Data/CollectionData";
import CollectionCard from "../components/CollectionCard"
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
                        CollectionData.map(({ id, image, name }) => (
                            <CollectionCard key={id} image={image} name={name} />
                        ))
                    }
                </section>
            </main>
        </div>
    )
}

export default Home